import { Router, request, response } from "express";


export default (router: Router): void => {
    router.get('/', (request, response) => 
    response.json({ olá: 'Esta é uma rota principal' }))
}