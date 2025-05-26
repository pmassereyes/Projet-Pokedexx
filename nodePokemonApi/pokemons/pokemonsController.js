
//let pokemons = require('../mock-pokemon');
const {Sequelize, DataTypes} = require('sequelize')
const { success,getUniqueId } = require('../helper')
const PokemonModel = require('./pokemonsModel');
const sequelize = require('../db');
function  formatValidationErrors (errors) {
    const Erreur = errors.errors.map(i => {
        console.log(i.message, i.path)
        return {
            message: i.message,
            path: i.path
        }})
        return { message: 'Validation error', error: Erreur }
}

module.exports = {

    getPokemon: async (req, res) => {
        const Pokemon = PokemonModel(sequelize, DataTypes)
        const id = parseInt(req.params.id)
        const pokemon = await Pokemon.findByPk(id)
        if (pokemon === null){
           return res.status(404).send(`Pokemon avec ID ${id} introuvable`)
        }
        else {
        const message = `Le pokemon ${id} a été trouvé`
        console.log(pokemon,id)
        res.json(success(message,pokemon))
        }
    },

    getPokemonList: async (req,res)=>{
        const Pokemon = PokemonModel(sequelize, DataTypes)

        const pokemons = await Pokemon.findAll()
        const message = 'Voici l intégralité des pokemons'
        res.json(success(message,pokemons))
    },
    
    createPokemon: async (req,res)=>{

        const Pokemon = PokemonModel(sequelize, DataTypes)

        try {
            const pokemonCreated = await Pokemon.create(req.body)
            console.log(pokemonCreated)
        
            const message = 'Le pokemon '+pokemonCreated.name +' a bien été crée.'
            res.json(success(message,pokemonCreated))
        }
        catch(error) {
            return res.status(400).send(formatValidationErrors(error)) 

        }
        
    },
    
    updatePokemon: async (req, res) => {
        const Pokemon = PokemonModel(sequelize, DataTypes)
        
        const id = parseInt(req.params.id);
        const pokemonUpdated = await Pokemon.findByPk(id)
        if (pokemonUpdated === null){
            return res.status(404).send(`Pokemon avec ID ${id} introuvable`)
         }
        else {
            try {
                await pokemonUpdated.update(req.body)
            } catch (error) {

                return res.status(400).send(formatValidationErrors(error))
                // return res.status(400).send({ message: 'Validation error', errors: errors })
            }
        const message = `Le pokémon ${pokemonUpdated.name} a bien été modifié.`
        res.json(success(message, pokemonUpdated))
        }
    },
    
    deletePokemon: async (req, res) => {
        const Pokemon = PokemonModel(sequelize, DataTypes)
        
        const id = parseInt(req.params.id)
        const pokemon = await Pokemon.findByPk(id)
        console.log(pokemon)
        if (pokemon === null){
           return res.status(404).send(`Pokemon avec ID ${id} introuvable`)
        }
        else {
            await pokemon.destroy()
            const message = `Le pokemon ${id} a été supprimé.`
            console.log(pokemon,id)
            res.json(success(message,pokemon))
        }
      },

}