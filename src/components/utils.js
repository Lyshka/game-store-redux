import axios from "axios"

export const calcTotalPrice = items => items.reduce((sum, game) => sum + game.price, 0)
const instance = axios.create({baseURL: process.env.BASEURL || "https://vast-tor-82563.herokuapp.com"})

export default instance