# Прокси-сервер к Twitter Search API

## Установка
Клонируем репозиторий к себе на компьютер
```
git clone https://github.com/GitHubTochkaDev/infinite-scroll-tutorial
```
Переходим в директорию с сервером
```
cd infinite-scroll-tutorial/server
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