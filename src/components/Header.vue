<script>
export default {};
</script>
<template>
  <nav>
    <div class="left">
      <router-link class="link" to="/">Alexandre TRICHOT</router-link>
    </div>
    <div class="right">
      <router-link class="link" to="/portfolio">/projets</router-link>
      <!-- <router-link class="link" to="/about">/à propos</router-link> -->
      <router-link class="link" to="/contact">/contact</router-link>
    </div>
  </nav>
</template>
<style scoped>
nav {
  height: 50px;
  display: flex;
  justify-content: space-between;
}

.left,
.right {
  display: flex;
  align-items: center;
  margin: 0 6px;
}

.link {
  display: block;
  color: #ddd;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  margin: 6px 12px;
}
</style>