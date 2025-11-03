# Mercury Agency - Инструкция по настройке

## Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка Telegram бота

#### Шаг 1: Создание бота
1. Откройте Telegram и найдите [@BotFather](https://t.me/BotFather)
2. Отправьте команду `/newbot`
3. Следуйте инструкциям и задайте имя боту
4. Скопируйте токен бота (например: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`)

#### Шаг 2: Получение Chat ID
1. Найдите бота [@userinfobot](https://t.me/userinfobot) в Telegram
2. Отправьте ему любое сообщение
3. Скопируйте ваш `Id` (например: `123456789`)

### 3. Настройка переменных окружения

Создайте файл `.env` в корне проекта:

```bash
cp .env.example .env
```

Отредактируйте `.env` и добавьте ваши данные:

```env
TELEGRAM_BOT_TOKEN=ваш_токен_бота
TELEGRAM_CHAT_ID=ваш_chat_id
PORT=3001
```

### 4. Запуск проекта

#### Запуск фронтенда и бэкенда одновременно:
```bash
npm run dev:all
```

#### Или запустить по отдельности:

**Фронтенд (в первом терминале):**
```bash
npm run dev
```

**Бэкенд (во втором терминале):**
```bash
npm run server
```

### 5. Открыть в браузере

Фронтенд: http://localhost:5173
Бэкенд API: http://localhost:3001

## Возможности

✅ Мультиязычность (RU/EN) с переключателем языка
✅ Современный дизайн с pill-кнопками навигации
✅ Интеграция с Telegram Bot для получения заявок
✅ Адаптивный дизайн для мобильных и десктопов
✅ Обновленное портфолио с новыми кейсами
✅ Форма обратной связи с Telegram никнеймом

## Структура проекта

```
mercury-agency/
├── src/
│   ├── components/       # React компоненты
│   ├── i18n/            # Конфигурация переводов
│   │   ├── config.ts    # Настройка i18next
│   │   └── locales/     # Файлы переводов (ru, en)
│   ├── theme/           # Chakra UI тема
│   └── main.tsx         # Точка входа
├── server/              # Express сервер
│   └── index.js         # API для Telegram
├── .env                 # Переменные окружения (создать!)
└── package.json
```

## API Endpoints

### POST /api/contact

Отправка формы обратной связи в Telegram.

**Request Body:**
```json
{
  "name": "Имя пользователя",
  "telegram": "@username",
  "message": "Текст сообщения"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Сообщение успешно отправлено!"
}
```

## Контакты

- Email: doorto338@gmail.com
- Telegram: @mercurydotagency

## Технологии

- **Frontend:** React, TypeScript, Chakra UI, Framer Motion, i18next
- **Backend:** Express, Node.js
- **API:** Telegram Bot API

