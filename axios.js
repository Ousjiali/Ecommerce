import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/shopping-cart-d4b64/us-central1/api',
})

export default instance
