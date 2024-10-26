# Портал проекта MAUVERSE

Портал проекта мобильного приложения MAUverse позволяет пользователям следить за ходом разработки и получать свежие обновления. На главной странице сайта размещена новостная лента проекта, где можно ознакомиться со свежими обновлениями, а на странице контактов можно связаться по почте для обратной связи от пользователей. Также имеется админ-панель для управления контентом сайта.

### Сборка

Создать .env файл в корне

```sh
VITE_JSON_SERVER_URL=http://localhost:3030
```

Установить зависимости

```sh
npm install
```

Запуск проекта

```sh
npm run dev # Запуск в режиме разработки

npm run build # Построение проекта

npm run lint # Проверка кода на ошибки

npm run format # Форматирование кода

npm run preview # Предпросмотр собранного приложения
```

## Основные используемые технологии и библиотеки

-   [API MAUverse](https://github.com/nikkkkolay/mauverse_server)
-   [react-admin](https://marmelab.com/react-admin/)
-   [zustand](https://github.com/pmndrs/zustand)
-   [react-hook-form](https://react-hook-form.com/)
-   [axios](https://github.com/axios/axios)
-   [framer-motion](https://www.framer.com/docs/)
-   [react-helmet](https://github.com/nfl/react-helmet)
