<template>
    <h1 class="title">Projet Pokedex</h1>
  
    <div class="container">

      <div class="section">
        <button class="button" @click="clickDescription">
          Pourquoi ce projet ?
        </button>
        <div v-if="description" class="divDescription">
          <p>Le projet Pokedex a vu le jour lors de mon stage chez Jack Agency pour m'initier aux langages utilisés dans l'entreprise.</p><br>
          <p>Je ne suis pas fan de Pokémon, mais cette mini application web m'a permis de m'entraîner et de mieux comprendre les applis web.</p>
          <p>Si vous voulez en savoir plus, cliquez sur le bouton "Langages utilisés" !</p>
        </div>
      </div>
  

      <div class="section">
        <button class="button" @click="clickLangages">
          Langages utilisés
        </button>
        <div v-if="langages" class="divLangages">
          <p>Pour construire cette application, j'ai utilisé du Node.js pour créer une API.</p>
          <p>J'ai ensuite codé l'interface avec Vue.js. Cela m'a permis de m'initier aux frameworks JavaScript et à la programmation de serveurs. </p>
        </div>
      </div>
      <div class="section">
  <button class="button" @click="clickRetour">Retour sur experience</button>
  
  <div v-if="retour" class="divRetour">
    <p>Ce projet m'a permis de découvrir le fonctionnement d'une API REST et de manipuler des fonctions asynchrones.</p>
    <p>J’ai aussi appris à structurer une application Vue.js, grace à des ref, v-model et des routeurs.</p>
    <p>Etant habitué au JAVA, ce fut compliqué de coder avec ces outils, mais très enrichissant.</p>
  </div>
</div>
</div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const description = ref(false)
  const langages = ref(false)
  const retour = ref(false)

function clickRetour() {
  retour.value = !retour.value
}

  
  function clickDescription() {
    description.value = !description.value
  }
  
  function clickLangages() {
    langages.value = !langages.value
  }
  </script>
  
  <style scoped>
  .title {
    text-align: center;
    font-size: 2rem;
    margin: 20px 0;
    color: #3b3636;
    font-family: Bradley Hand, cursive;
  }
  
  .container {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap; 
    margin-top: 40px;
  }
  
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
  }
  
  .button {
    font-size: 16px;
    padding: 1em 3.3em;
    cursor: pointer;
    transform: perspective(200px) rotateX(15deg);
    color: white;
    font-weight: 900;
    border: none;
    border-radius: 5px;
    background: linear-gradient(
      0deg,
      rgba(63, 94, 251, 1) 0%,
      rgba(70, 135, 252, 1) 100%
    );
    box-shadow: rgba(63, 94, 251, 0.2) 0px 40px 29px 0px;
    transition: all 0.3s;
    border-bottom: 2px solid rgba(70, 135, 252, 1);
  }
  
  .button:hover {
    transform: perspective(180px) rotateX(30deg) translateY(2px);
  }
  .button:active {
    transform: perspective(170px) rotateX(36deg) translateY(5px);
  }
  
  .divDescription,
  .divLangages {
    background-color: #f0f8ff;
    border-left: 5px solid #f5b700;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .divDescription p,
  .divLangages p {
    margin: 10px 0;
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }

  .divRetour {
  background-color: #f0f8ff;
  border-left: 5px solid #f5b700;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.divRetour p {
  margin: 10px 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

  </style>
  