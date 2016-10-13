# Twitter Client - Server
Прокси-сервер к Twitter Search API созданный для видео по разработке бесконечной прокрутки во vue.js (https://www.youtube.com/watch?v=HOmgDf2v3yI)

## Установка
Клонируем репозиторий к себе на компьютер
```
git clone https://github.com/GitHubTochkaDev/twitter-client-server
```
Переходим в директорию с проектом
```
cd twitter-client-server
```
Устанавливаем зависимости
```
npm install
```
Создаем файл `.env` с ключами доступа, которые мы получили от твиттера
```
CONSUMER_KEY=CONSUMER_KEY_HERE
CONSUMER_SECRET=CONSUMER_SECRET_HERE
ACCESS_TOKEN=ACCESS_TOKEN_HERE
ACCESS_TOKEN_SECRET=ACCESS_TOKEN_SECRET_HERE
```
Запускаем сервер с помощью команды `npm start`. И открываем в браузере: 
```
http://localhost:3000/tweets?q=SOME_QUERY&count=COUNT_TWEETS
```