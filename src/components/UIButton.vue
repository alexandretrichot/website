<script>
export default {};
</script>
<template>
  <button>
    <slot />
  </button>
</template>
<style scoped>
button {
	border: solid 2px white;
	border-radius: 6px;
	font-size: 20px;
	font-weight: bold;
	background: white;
	color: black;
	padding: 6px 12px;
	margin: 200px;
	transition: background .2s, color .2s;
	outline: none;
	cursor: pointer;
}

@media (hover: hover) {
	button:hover {
		background: transparent;
		color: white;
	}
}

</style>