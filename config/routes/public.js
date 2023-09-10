console.log('Loading public routes')

module.exports = (app) => {

  //todo adicionar rotas sem autenticação aqui

  app.get('/', (req, res) => {
    res.status('200').send("running")
  })
  
  console.log('Public routes ok')
} 