<script>
export default {};
</script>
<template>
  <section>
    <img class="clip-svg" src="../assets/images/profile.png" alt="Harry Potter" />

    <svg width="0" height="0">
      <defs>
        <clipPath id="myClip">
          <circle cx="100" cy="100" r="40" />
          <circle cx="60" cy="60" r="40" />
        </clipPath>
      </defs>
    </svg>
  </section>
</template>
<style scoped>
section {
  height: 100vh;
  position: relative;
}

.clip-svg {
  clip-path: url(#myClip);
  height: 200px;
}
</style>