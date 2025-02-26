// JWT
require("dotenv-safe").config();
const crypto = require('./crypto');
const jwt = require('jsonwebtoken');
var { expressjwt: expressJWT } = require("express-jwt");
const cors = require('cors');
const corsOpcoes = {
  origin: "http://localhost:3000",
  //metodos que o cliente pode executar
  methods: "GET,PUT,POST,DELETE", 
  allowedHeaders: "Content-Type,Authorization",
  credentials: true
}

var cookieParser = require('cookie-parser')

const CHAVE = 'bf3c199c2470cb477d907b1e0917c17e';
const IV = '5183666c72eec9e4';

const express = require('express');
const { usuario } = require('./models');

const app = express();

app.set('view engine', 'ejs');

app.use(cors());
app.use(cors(corsOpcoes))

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(cookieParser());
app.use(
  expressJWT({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    getToken: req => req.cookies.token
  }).unless({ path: ["/autenticar", "/logar", "/deslogar", "/usuarios/cadastrar"] })
);

app.get('/autenticar', async function(req, res){
  res.render('autenticar');
})

app.get('/', async function(req, res){
  res.render("home")
})

app.get('/usuarios/cadastrar', async function(req, res){
  res.render('usuarios/cadastrar')
})


app.post('/usuarios/cadastrar', async function(req, res){
  try { 
 const criptografia = {
   nome: req.body.nome,
   senha: crypto.encrypt(req.body.senha)
}
    if(req.body.senha == req.body.csenha){
      const bd = await usuario.create(criptografia);
     
      res.redirect('/usuarios/listar')
    }
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'As senhas são diferentes!' });
}
})

app.get('/usuarios/listar', async function(req, res){
 try {
  var bd = await usuario.findAll();
  res.json(bd);
} catch (err) {
  console.error(err);
  res.status(500).json({ message: 'Ocorreu um erro ao buscar os usuário.' });
}
})

app.post('/logar', async (req, res) => {
  const comparar = await usuario.findOne({ where: { nome: req.body.nome, senha: crypto.encrypt(req.body.senha) } });
  if(comparar) {
    const id = 1;
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 3000
    })
    return res.cookie('token', token, {httpOnly:true}).json({
      nome: comparar.usuario,
      token: token
    })
  }
    res.status(500).json({mensagem: "Nome ou senha inválidos"})
})

app.post('/deslogar', function(req, res) {
  res.cookie('token', null, {httpOnly:true});
  res.json({deslogar:true})
})

app.listen(3001, function() {
  console.log('App de Exemplo escutando na porta 3001!')
});