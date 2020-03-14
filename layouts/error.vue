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
<style lang="scss" scoped>
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
  color: $acColor;
}
</style>