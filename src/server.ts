import app from "./config/app"

type Pessoa = {
  nome: string
  email: string
}

const listPessoa: Pessoa [] = []

// //GET, POST, PUT, DELETED, PATCH
// router.get('/', (request, response) =>
//   response.json({ ola: 'Ola mundo', nome: 'Glêsio' }))

// router.post('/formulario', (request, response) =>{
// //const {nome, email} = request.body
//   listPessoa.push ({ nome: request.body.nome, email:request.body.email }= request.body)
//   return response. status(201).json ()  //CREATED
// })

// router.get('/carregar',(request, response)  =>{
// listPessoa.push({ nome:'Lucas', email: 'lucasribeiro@gmail.com'})
// listPessoa.push({ nome:'Linda', email: 'lindacavalo@gmail.com'})
// listPessoa.push({ nome:'Luísa', email: 'luísachagas@gmail.com'})
// return response.json({ list: listPessoa })})

app.listen(3000, () => { console.log('Running port 3000') })
