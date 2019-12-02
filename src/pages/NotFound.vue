<script>
export default {};
</script>
<template>
  <div class="container">
    <div class="center">
      <h1>Ho ho, on s'est perdu ?</h1>
      <router-link class="button" to="/">Se reconnecter à la nature</router-link>
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