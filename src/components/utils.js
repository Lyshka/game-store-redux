import axios from "axios"

export const calcTotalPrice = items => items.reduce((sum, game) => sum + game.price, 0)
const instance = axios.create({baseURL: process.env.BASEURL || "https://server-game-redux.herokuapp.com/"})

export default instance