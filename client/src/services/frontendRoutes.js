import axios from 'axios'
const apiUrl_prod = 'http://localhost:8000/api/prod';
const apiUrl_sub = 'http://localhost:8000/api/sub'
const apiUrl_paint = 'http://localhost:8000/api/paint'
const apiUrl_final = 'http://localhost:8000/api/final'

export function getProd() {
    return axios.get(apiUrl_prod);
}

export function getSub() {
    return axios.get(apiUrl_sub);
}

export function getPaint() {
    return axios.get(apiUrl_paint)
}

export function getFinal() {
    return axios.get(apiUrl_final);
}