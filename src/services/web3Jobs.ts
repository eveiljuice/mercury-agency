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

const API_TOKEN = 'kMn9WFPS2fhG2B38F9mqMh11VgepjAg7'
const API_URL = `https://web3.career/api/v1?token=${API_TOKEN}`

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
    const params = new URLSearchParams()
    
    if (options.remote !== undefined) params.append('remote', String(options.remote))
    if (options.limit) params.append('limit', String(options.limit))
    if (options.country) params.append('country', options.country)
    if (options.tag) params.append('tag', options.tag)
    if (options.show_description !== undefined) params.append('show_description', String(options.show_description))

    const url = params.toString() 
      ? `${API_URL}&${params.toString()}` 
      : API_URL

    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch jobs: ${response.statusText}`)
    }

    const data: Web3JobsResponse = await response.json()
    
    // API возвращает массив вакансий под индексом '2'
    return data['2'] || []
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

