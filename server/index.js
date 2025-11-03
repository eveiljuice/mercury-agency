import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Telegram Bot API endpoint
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID
const WEB3_CAREER_API_TOKEN = process.env.WEB3_CAREER_API_TOKEN

// Web3.career API proxy endpoint
app.get('/api/web3-jobs', async (req, res) => {
  try {
    const { remote, limit, country, tag, show_description } = req.query
    
    if (!WEB3_CAREER_API_TOKEN) {
      return res.status(500).json({ 
        success: false, 
        message: 'Web3 Career API token not configured' 
      })
    }

    // Формируем URL для Web3.career API
    const params = new URLSearchParams()
    params.append('token', WEB3_CAREER_API_TOKEN)
    
    if (remote !== undefined) params.append('remote', String(remote))
    if (limit) params.append('limit', String(limit))
    if (country) params.append('country', country)
    if (tag) params.append('tag', tag)
    if (show_description !== undefined) params.append('show_description', String(show_description))

    const apiUrl = `https://web3.career/api/v1?${params.toString()}`
    
    const response = await fetch(apiUrl)
    
    if (!response.ok) {
      throw new Error(`Web3.career API error: ${response.statusText}`)
    }

    const data = await response.json()
    
    // Возвращаем данные как есть
    res.json(data)
  } catch (error) {
    console.error('Web3.career API proxy error:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch jobs from Web3.career API',
      error: error.message 
    })
  }
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, telegram, message } = req.body

    // Валидация
    if (!name || !telegram || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Все поля обязательны для заполнения' 
      })
    }

    // Валидация telegram username
    if (!telegram.startsWith('@')) {
      return res.status(400).json({ 
        success: false, 
        message: 'Telegram никнейм должен начинаться с @' 
      })
    }

    // Формируем сообщение для Telegram
    const telegramMessage = `
🔔 <b>Новая заявка с сайта!</b>

👤 <b>Имя:</b> ${name}
📱 <b>Telegram:</b> ${telegram}
💬 <b>Сообщение:</b>
${message}
    `.trim()

    // Отправляем в Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    })

    const data = await response.json()

    if (!data.ok) {
      console.error('Telegram API error:', data)
      return res.status(500).json({ 
        success: false, 
        message: 'Ошибка отправки в Telegram' 
      })
    }

    res.json({ 
      success: true, 
      message: 'Сообщение успешно отправлено!' 
    })
  } catch (error) {
    console.error('Server error:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Ошибка сервера. Попробуйте позже.' 
    })
  }
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

