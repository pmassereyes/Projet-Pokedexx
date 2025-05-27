<template>
  <div>
    <header class="header">
      <RouterLink to="/" class="lien">Pokedex</RouterLink>
      <RouterLink to="/hidden" class="lien">Description du projet</RouterLink>
    </header>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped>

.header {
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #f0f0f0;
  padding: 10px 0;
}

/* Style général du lien */
.lien {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* Style au survol */
.lien:hover {
  background-color: #ffd700;
  color: white;
}

</style>
