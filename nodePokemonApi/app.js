const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
let pokemons = require('./mock-pokemon');
const {Sequelize, DataTypes} = require('sequelize')
const { success,getUniqueId } = require('./helper')
const { connect } = require('./db')
//const PokemonMode1 = require('./src/models/pokemons')

var cors = require('cors')
 
var corsOptions = {
  origin: 'http://localhost:5173',
}

const app = express()
const port = 3000

connect().then(_ => console.log('OK'))

app
.use(favicon(__dirname +'/favicon.ico'))
    .use(cors(corsOptions))
    .use(morgan('dev'))
    .use(express.json())

app.get('/',(req,res)=>res.send('Hello again and again, Express ! '))

app.use(require('./pokemons'))

app.listen(port,()=>console.log('Notre application est demarrée sur : http://localhost:'+port))