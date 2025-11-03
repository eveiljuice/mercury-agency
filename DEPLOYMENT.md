# Инструкция по деплою Mercury Agency

## Фронтенд (Netlify)

Фронтенд уже задеплоен на: https://mercury-agency.netlify.app/

### Настройки Netlify:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18.x

## Бэкенд (Нужно задеплоить)

Бэкенд необходимо разместить на отдельном хостинге. Варианты:

### 1. Heroku (рекомендуется)

1. Создайте аккаунт на https://www.heroku.com/
2. Установите Heroku CLI
3. Выполните команды:

```bash
# Логин в Heroku
heroku login

# Создайте приложение
heroku create mercury-agency-backend

# Установите переменные окружения
heroku config:set TELEGRAM_BOT_TOKEN=your_bot_token
heroku config:set TELEGRAM_CHAT_ID=your_chat_id
heroku config:set WEB3_CAREER_API_TOKEN=kMn9WFPS2fhG2B38F9mqMh11VgepjAg7
heroku config:set PORT=3001

# Деплой
git push heroku main
```

### 2. Railway.app

1. Зарегистрируйтесь на https://railway.app/
2. Создайте новый проект из GitHub репозитория
3. Добавьте переменные окружения:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `WEB3_CAREER_API_TOKEN`
   - `PORT=3001`

### 3. Render.com

1. Зарегистрируйтесь на https://render.com/
2. Создайте Web Service из репозитория
3. Настройки:
   - Build Command: `npm install`
   - Start Command: `node server/index.js`
   - Добавьте переменные окружения

## После деплоя бэкенда

1. Получите URL вашего бэкенда (например: `https://mercury-agency-backend.herokuapp.com`)

2. Обновите URL в коде:

**В `src/services/web3Jobs.ts`:**
```typescript
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://YOUR-BACKEND-URL.herokuapp.com/api/web3-jobs'
  : 'http://localhost:3001/api/web3-jobs'
```

**В `src/components/Contact.tsx`:**
```typescript
const apiUrl = import.meta.env.PROD 
  ? 'https://YOUR-BACKEND-URL.herokuapp.com/api/contact'
  : 'http://localhost:3001/api/contact'
```

3. Закоммитьте изменения и задеплойте на Netlify

## Проверка CORS

Текущие разрешенные origins:
- `http://localhost:3000` - локальная разработка
- `http://localhost:5173` - Vite dev server
- `https://mercury-agency.netlify.app` - продакшен

## Переменные окружения

### Бэкенд (.env):
```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
WEB3_CAREER_API_TOKEN=kMn9WFPS2fhG2B38F9mqMh11VgepjAg7
PORT=3001
```

### Фронтенд (Netlify Environment Variables):
Нет необходимости - все конфиденциальные данные на бэкенде

## Тестирование

После деплоя проверьте:
1. Открыть https://mercury-agency.netlify.app/
2. Перейти в секцию Web3 Jobs - должны загружаться вакансии
3. Попробовать отправить форму контакта - сообщение должно придти в Telegram
4. Проверить консоль браузера на ошибки CORS

## Команды для локальной разработки

```bash
# Запуск всего проекта
npm run dev:all

# Только фронтенд
npm run dev

# Только бэкенд
npm run server
```

