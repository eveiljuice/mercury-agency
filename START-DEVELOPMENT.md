# Запуск проекта для разработки

## Проблема: "ERR_CONNECTION_REFUSED"

Эта ошибка возникает когда **бэкенд сервер не запущен**.

## Правильный запуск проекта

### Вариант 1: Все в одной команде (рекомендуется)

Откройте один терминал и выполните:

```bash
npm run dev:all
```

Эта команда запустит **одновременно**:
- Фронтенд на `http://localhost:3000`
- Бэкенд на `http://localhost:3001`

### Вариант 2: Два отдельных терминала

**Терминал 1 - Бэкенд:**
```bash
npm run server
```
Должно появиться: `Server running on http://localhost:3001`

**Терминал 2 - Фронтенд:**
```bash
npm run dev
```
Должно появиться: `Local: http://localhost:3000/`

## Проверка что все работает

1. **Бэкенд:** Откройте http://localhost:3001/health
   - Должен показать: `{"status":"ok"}`

2. **Фронтенд:** Откройте http://localhost:3000
   - Сайт должен открыться и загрузиться

3. **Web3 Jobs:** Перейдите в секцию "Web3 Jobs"
   - Вакансии должны загрузиться без ошибок

## Что делать если ошибки

### "ERR_CONNECTION_REFUSED" на порту 3001
- Бэкенд сервер не запущен
- **Решение:** Запустите `npm run server` в отдельном терминале

### "Port 3001 is already in use"
- Бэкенд уже запущен в другом терминале
- **Решение:** Используйте тот же терминал или закройте старый процесс

### "Port 3000 is already in use"
- Фронтенд уже запущен
- **Решение:** Используйте тот же терминал или закройте старый процесс

## Переменные окружения

Убедитесь что файл `.env` существует и содержит:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
WEB3_CAREER_API_TOKEN=kMn9WFPS2fhG2B38F9mqMh11VgepjAg7
PORT=3001
```

## Порты

- **Фронтенд (Vite):** http://localhost:3000
- **Бэкенд (Express):** http://localhost:3001

## CORS настроен для:

- `http://localhost:3000` - фронтенд dev server
- `http://localhost:5173` - запасной порт Vite
- `https://mercury-agency.netlify.app` - продакшен

## Быстрая проверка

```bash
# Проверить что бэкенд работает
curl http://localhost:3001/health

# Или в PowerShell
Invoke-WebRequest -Uri "http://localhost:3001/health"
```

Если видите `{"status":"ok"}` - бэкенд работает правильно!

