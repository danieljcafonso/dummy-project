import axios from "axios"

const apiURL = process.env.REACT_APP_API

if (!apiURL) console.warn("Provided API URL is empty, did you setup your environment variables?")

export const axiosInstance = axios.create({
  baseURL: apiURL
})

