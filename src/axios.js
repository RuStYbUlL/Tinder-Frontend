// Axios is a package that will make http request simple

import axios from 'axios'

const instance = axios.create({
    baseUrl: 'https://tinder-backendtest.herokuapp.com' // Pull from Heroku
})

export default instance;