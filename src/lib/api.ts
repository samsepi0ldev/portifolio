import axios from 'axios'
import { env } from '../config/env'

export const api = axios.create({
  headers: {
    Authorization: `Bearer ${env.VITE_ACCESS_TOKEN}`
  }
})
