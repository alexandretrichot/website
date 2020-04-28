<script>
export default {};
</script>
<template>
  <section class="footer">
    <div class="links">
      <a href="https://github.com/alexandretrichot/">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
    <div class="copyright">© 2020 Copyright | Alexandre Trichot</div>
  </section>
</template>
<style lang="scss" scoped>
.footer {
  margin: 2rem 0;

  .copyright {
	  margin-top: 1rem;
	  text-align: center;
  }

  .links {
	font-size: 2.5rem;
	text-align: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
}
</style>