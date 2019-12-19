<script>
export default {
  props: ["error"],
  layout: "default"
};
</script>
<template>
  <div class="container">
    <div class="center">
      <h1 v-if="error.statusCode === 404">Page non trouvée</h1>
      <h1 v-else>Une erreur s'est produite</h1>
      <nuxt-link class="button" to="/">Revenir à l'accueil</nuxt-link>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.center {
  text-align: center;
}

h1 {
  color: #ffaf1a;
}

.button {
  border: solid #ffaf1a 2px;
  background: #200002;
  color: #ffaf1a;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  outline: none;
  transition: all 0.2s;
}

@media (hover: hover) {
  .button:hover {
    background: #ffaf1a;
    color: #200002;
  }
}
</style>