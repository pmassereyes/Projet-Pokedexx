<template>
  
    
    <h1>Bienvenue dans le Pokedex !</h1>
    
    <button class="open-btn" @click="openPokedex">Ouvrir le pokedex</button>
  
  
  
    <h2 v-if="pokemons.length">Voici la liste des pokemon mise à votre disposition:</h2>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        <img :src="pokemon.picture" :alt="pokemon.name" width="100" />
        <p>{{ "nom : "+pokemon.name }}</p>
        <p>{{ "hp : "+ pokemon.hp }}</p>
        <p>{{ "cp : "+ pokemon.cp }}</p>
        <button @click="selectedId = pokemon.id">Modifier le pokemon</button>
        <button @click="deletePokemon(pokemon.id)">Supprimer le Pokemon du pokedex</button>
        
        
  
  
        <div v-if="selectedId === pokemon.id">
          <input v-model="pokemon.name" placeholder="Nom" />
          <input v-model.number="pokemon.hp" placeholder="HP" />
          <input v-model.number="pokemon.cp" placeholder="CP" />
          <button @click="updatePokemon(pokemon)">Valider</button>
          <button @click="selectedId = null">Annuler</button>
        </div>

      </li>
    </ul>
  
    <button v-if="pokemons.length" @click="formCreate = true">Créer un nouveau Pokemon</button>
  
    <div v-if="formCreate===true">Créer un nouveau Pokémon><br>
  <input v-model="newPokemon.name" placeholder="Nom" />
  <input v-model.number="newPokemon.hp" placeholder="HP" />
  <input v-model.number="newPokemon.cp" placeholder="CP" />
  <input v-model="newPokemon.picture" placeholder="Image URL" />
  <input v-model="newPokemon.types" placeholder="Type"/>
  <button @click="createPokemon">Ajouter</button>
    </div>
  
  </template>
  
  
  
  <script setup>
  
  import { ref, onMounted } from 'vue'
  
  const pokemons = ref([])
  const selectedId = ref(null)
  const formCreate = ref(false)
  const newPokemon = ref({
    name: '',
    hp: 0,
    cp: 0,
    types: [],
    picture: ''
  })
  
  
  
  //onMounted(async () => {
  //})
  
  async function openPokedex() {
    const result = await fetch('http://localhost:3000/api/pokemons') 
    const data = await result.json()
    pokemons.value = data.data
  }
  
  async function deletePokemon (pokemonId) {
    console.log('DELETE', `http://localhost:3000/api/pokemons/${pokemonId}`)
    //const result = await fetch(`http://localhost:3000/api/pokemons/${pokemonId}`, { method: 'DELETE' }) 
    // trouver le pokemon supprimé dans le tableau
    const index = pokemons.value.findIndex(pokemon => pokemon.id === pokemonId)
    // le supprimer
    pokemons.value.splice(index,1)
  
  }
  
  async function updatePokemon(pokemon) {
    await fetch(`http://localhost:3000/api/pokemons/${pokemon.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pokemon)
    })
    selectedId.value = null
  }
  
  async function createPokemon() {
    console.log(newPokemon.value)
  
    const response = await fetch('http://localhost:3000/api/pokemons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPokemon.value)
    })
  
    const data = await response.json()
    console.log(data)
    pokemons.value.push(data.data)
    formCreate.value=false
    
  
  }
  
  </script>
  
  
  <style scoped>
  /* Centrage du titre */
  h1 {
    text-align: center;
    font-size: 2rem;
    margin: 20px 0;
    color: #3b3636;
    font-family: Bradley Hand, cursive;
  }
  
  /* Bouton principal */
  button {
    padding: 10px 15px;
    margin: 5px;
    border: none;
    color: #27282b;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .open-btn {
    display: block;
    margin: 20px auto;
    padding: 15px 30px;
    font-size: 1.2rem;
    background-color: #f0efe9; 
    border: none;
    border-radius: 8px;
    color: #2d2d2d;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .open-btn:hover {
    background-color: #f5b700;
  }
  
  
  button:hover {
    background-color: #f2b807;
  }
  
  /* Liste des pokémons */
  ul {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin: 20px;
  }
  
  /* Carte Pokémon */
  li {
    background-color: #f7f7f7;
    border: 2px solid #bcbcbc;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  }
  
  /* Image Pokémon */
  img {
    display: block;
    margin: 0 auto 10px auto;
    border-radius: 8px;
  }
  
  /* Inputs */
  input {
    margin: 5px 0;
    padding: 8px;
    width: 90%;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  /* Formulaire création */
  div[v-cloak], div[style*="formCreate"] {
    background-color: #e0e7ff;
    padding: 15px;
    margin: 20px auto;
    max-width: 400px;
    border-radius: 10px;
    border: 1px solid #3b4cca;
  }
  
  p {
    margin: 5px 0;
  }
  
  h2 {
    text-align: center;
    color: #000000;
    margin-top: 30px;
  }
  
  
  body, #app {
    background-color: #f0f8ff;
    font-family: 'Arial', sans-serif;
  }
  
  
  
  </style>
  