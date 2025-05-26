const express = require('express')
const controllers = require('./pokemonsController')

const router = express.Router()

router.route('/api/pokemons/:id')
    .get(controllers.getPokemon)
    .put(controllers.updatePokemon)
    .delete(controllers.deletePokemon)

router.route('/api/pokemons')
    .get(controllers.getPokemonList)
    .post(controllers.createPokemon)

module.exports = router