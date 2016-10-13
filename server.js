require('dotenv').config();

var Twitter = require('twitter');
var http = require('http');
var fs = require('fs');
var url = require('url');

// Указываем коды доступа к Twitter API
var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

// Страница ошибки 404
function respondNotFound(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'})
    response.write('Page not found')
    response.end()
}

// Делаем запрос
function onRequest(request, response){

    // Проверяем что это GET запрос
    if(request.method == 'GET') {

        // Получаем параметры пришедшие в запросе
        var params = url.parse(request.url, true).query

        // Делаем запрос к Search API с параметрами и получаем ответ
        client.get('search/tweets', params, function(error, data, res){

            // Убеждаемся что в ответе нет ошибок
            if (!error) {

                // Фильтруем пришедшие твиты и оставляем только нужные поля
                var tweets = data.statuses.map(function(status) {
                    return {
                        name: status.user.name,
                        username: status.user.screen_name,
                        avatar: status.user.profile_image_url,
                        text: status.text,
                        created_at: status.created_at
                    }
                })

                // Создаем JSON-объект со всеми данными
                var json = JSON.stringify({
                    next_page_url: 'http://localhost:3000/tweets' + data.search_metadata.next_results,
                    data: tweets
                })

                // Задаем необходимые заголовки для ответа
                response.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                })

                // Отправляем ответ
                response.end(json)

            } else {

                // Если в ответе ошибка выводим страницу 404
                respondNotFound(response)

            }
        }.bind(response));
        
    } else {
        respondNotFound(response)
    }
}

// Запускаем сервер на порте 3000
http.createServer(onRequest).listen(3000, function(){
    console.log("Server is running on port 3000");
    console.log("Example: http://localhost:3000/tweets?q=vuejs&count=10");
});