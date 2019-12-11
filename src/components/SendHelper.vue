<script>
import Sender from "./Sender";

export default {
  components: {
    Sender
  },
  data() {
    return {
      open: false
    };
  }
};
</script>
<template>
  <div>
    <transition name="fade" mode="out-in">
      <div key="1" v-if="open" class="send-helper">
        <img @click="open = !open" src="../assets/images/close-solid.svg" alt="sdf" />
        <Sender />
      </div>
	  <div key="2" v-else @click="open = !open" class="open-button">
        <img src="../assets/images/envelope-solid.svg" alt="Open Button" />
      </div>
    </transition>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0) translate(-100%, 100%);
}

.send-helper {
  overflow: hidden;
  margin: 12px;
  max-width: 600px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.open-button {
  background: black;
  overflow: hidden;
  border-radius: 6px;
  margin: 12px;
}

.open-button img {
  display: block;
  width: 30px;
  margin: 12px;
}

img {
  display: block;
  width: 20px;
  margin: 12px;
}
</style>