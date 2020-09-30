//criando um servidor
//iniciar servidor = npm run dev

//servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//configuraar nunjucks(template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//receber dados do req.body
.use(express.urlencoded({extended:true}))
//configurando arquivos estáticos (css, script, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5000)