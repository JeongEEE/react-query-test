import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

export const getProducts = () =>
  api.get(`/products`).then((res) => res.data)