<script>
import Parallax from "../components/Parallax";
export default {
  components: {
    Parallax
  }
};
</script>
<template>
  <section>
    <Parallax class="background" :speed="2">
      <img class="backimg" src="../assets/images/profile.png" alt="Background image" />
    </Parallax>
	<div class="main">
		<h1>À propos!</h1>
		<h2>Qui suis-je ?</h2>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptatibus ad velit? Fuga assumenda ut nostrum molestiae ducimus odit debitis quos eum, cumque qui quas, laborum cum error sequi odio.</p>
		<hr />
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis assumenda, ipsum blanditiis earum corporis dicta odit. Blanditiis aliquam adipisci recusandae! Optio nemo voluptate, quae in delectus ipsa placeat harum!</p>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ipsa eveniet ut, deleniti ea ducimus itaque velit quos obcaecati, nisi necessitatibus mollitia corporis nesciunt laudantium magnam, assumenda accusantium molestiae quod.</p>
		<br/>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos exercitationem cupiditate labore quia odit obcaecati minus! Qui similique exercitationem animi tempora. Vero, saepe? Autem sed dolorum architecto voluptates excepturi.</p>
		<h2>Qui suis-je ?</h2>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptatibus ad velit? Fuga assumenda ut nostrum molestiae ducimus odit debitis quos eum, cumque qui quas, laborum cum error sequi odio.</p>
		<hr />
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis assumenda, ipsum blanditiis earum corporis dicta odit. Blanditiis aliquam adipisci recusandae! Optio nemo voluptate, quae in delectus ipsa placeat harum!</p>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ipsa eveniet ut, deleniti ea ducimus itaque velit quos obcaecati, nisi necessitatibus mollitia corporis nesciunt laudantium magnam, assumenda accusantium molestiae quod.</p>
		<br/>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos exercitationem cupiditate labore quia odit obcaecati minus! Qui similique exercitationem animi tempora. Vero, saepe? Autem sed dolorum architecto voluptates excepturi.</p>
		<h2>Qui suis-je ?</h2>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptatibus ad velit? Fuga assumenda ut nostrum molestiae ducimus odit debitis quos eum, cumque qui quas, laborum cum error sequi odio.</p>
		<hr />
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis assumenda, ipsum blanditiis earum corporis dicta odit. Blanditiis aliquam adipisci recusandae! Optio nemo voluptate, quae in delectus ipsa placeat harum!</p>
		<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam ipsa eveniet ut, deleniti ea ducimus itaque velit quos obcaecati, nisi necessitatibus mollitia corporis nesciunt laudantium magnam, assumenda accusantium molestiae quod.</p>
		<br/>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos exercitationem cupiditate labore quia odit obcaecati minus! Qui similique exercitationem animi tempora. Vero, saepe? Autem sed dolorum architecto voluptates excepturi.</p>
	</div>
  </section>
</template>
<style scoped>
section {
	position: relative;
}
.main {
	color: white;
	max-width: 40%;
	margin: 50px 15%;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.backimg {
  filter: grayscale(0.8) contrast(1.5) opacity(0.4);
  object-fit: cover;
  object-position: right;
  height: 100%;
  width: 100%;
}
</style>