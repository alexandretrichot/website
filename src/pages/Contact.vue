<script>
import UIButton from "../components/UIButton";

export default {
  components: {
    UIButton
  },
  methods: {
    sendmail: function() {
      let xhr = new XMLHttpRequest();

      let formData = new FormData();
	  formData.append("email", "corinne.trichot55@gmail.com");
	  formData.append("name", "Corinne Trichot");
	  formData.append("subject", "Hello !");
	  formData.append("text", "YO YO YO !!");

      xhr.open("POST", "api/sendmail", true);
      xhr.onload = (e) => {
        alert(xhr.response);
      };

      xhr.onerror = e => {
        alert("Un problème est survenu durant l'envoi au serveur.");
        console.err("error", e);
      };
	  xhr.send(formData);
	  console.log(xhr);
    }
  }
};
</script>
<template>
  <UIButton @click.native="sendmail">Send mail !</UIButton>
</template>
<style scoped>
</style>