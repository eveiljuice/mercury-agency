export interface Web3Job {
  id: string
  title: string
  date: string
  date_epoch: number
  country: string
  city: string
  company: string
  location: string
  apply_url: string
  tags: string[]
  description: string
}

interface Web3JobsResponse {
  [key: string]: any
  2: Web3Job[] // API возвращает массив вакансий под индексом 2
}

// API URL теперь указывает на наш бэкенд прокси
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-domain.com/api/web3-jobs' // Замените на ваш домен в продакшене
  : 'http://localhost:3001/api/web3-jobs'

export const fetchWeb3Jobs = async (
  options: {
    remote?: boolean
    limit?: number
    country?: string
    tag?: string
    show_description?: boolean
  } = {}
): Promise<Web3Job[]> => {
  try {
    // Формируем параметры запроса к нашему прокси эндпоинту
    const params = new URLSearchParams()
    
    if (options.remote !== undefined) params.append('remote', String(options.remote))
    if (options.limit) params.append('limit', String(options.limit))
    if (options.country) params.append('country', options.country)
    if (options.tag) params.append('tag', options.tag)
    if (options.show_description !== undefined) params.append('show_description', String(options.show_description))

    const url = params.toString() 
      ? `${API_BASE_URL}?${params.toString()}` 
      : API_BASE_URL

    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch jobs: ${response.statusText}`)
    }

    const data: any = await response.json()
    
    // Логируем структуру ответа для отладки
    console.log('API Response structure:', {
      isArray: Array.isArray(data),
      keys: Object.keys(data),
      type: typeof data,
      sample: data
    })
    
    // Проверяем разные возможные форматы ответа
    let jobs: Web3Job[] = []
    
    // Случай 1: Ответ уже массив
    if (Array.isArray(data)) {
      jobs = data
    }
    // Случай 2: Ответ - объект с массивом под индексом '2'
    else if (data && typeof data === 'object' && Array.isArray(data['2'])) {
      jobs = data['2']
    }
    // Случай 3: Ответ - объект с массивом под ключом 'jobs' или 'data'
    else if (data && typeof data === 'object' && Array.isArray(data.jobs)) {
      jobs = data.jobs
    }
    else if (data && typeof data === 'object' && Array.isArray(data.data)) {
      jobs = data.data
    }
    // Случай 4: Ответ - объект с числовыми ключами, ищем первый массив
    else if (data && typeof data === 'object') {
      const keys = Object.keys(data)
      for (const key of keys) {
        if (Array.isArray(data[key])) {
          jobs = data[key]
          break
        }
      }
    }
    
    // Проверяем что получили массив
    if (!Array.isArray(jobs)) {
      console.warn('API returned non-array data. Structure:', data)
      console.warn('Trying to extract jobs from response...')
      return []
    }
    
    console.log(`Successfully loaded ${jobs.length} jobs from API`)
    return jobs
  } catch (error) {
    console.error('Error fetching Web3 jobs:', error)
    return []
  }
}

export const getRemoteJobs = (limit: number = 50) => 
  fetchWeb3Jobs({ remote: true, limit })

export const getJobsByTag = (tag: string, limit: number = 50) => 
  fetchWeb3Jobs({ tag, limit })

export const getJobsByCountry = (country: string, limit: number = 50) => 
  fetchWeb3Jobs({ country, limit })

