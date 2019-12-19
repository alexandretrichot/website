<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      error: "",
      onSend: false,
      finish: false
    };
  },
  methods: {
    sendmail: function() {
      if (
        this.name != "" &&
        this.email != "" &&
        this.subject != "" &&
        this.message != ""
      ) {
        if (this.email.includes("@") && this.email.includes(".")) {
          this.onSend = true;
          this.error = "";

          let xhr = new XMLHttpRequest();
          let formData = new FormData();
          formData.append("name", this.name);
          formData.append("email", this.email);
          formData.append("subject", this.subject);
          formData.append("text", this.message);

          xhr.open("POST", "api/sendmail", true);
          xhr.onload = e => {
            this.onSend = false;
            alert(xhr.response);
          };

          xhr.onerror = e => {
            this.onSend = false;
            this.error = "Un problème est survenu durant l'envoi au serveur.";
            console.err("error", e);
          };
          xhr.send(formData);
        } else {
          this.error = "L'adresse email n'est pas valide";
        }
      } else {
        this.error = "Tout les champs ne sont pas remplis";
      }
    }
  }
};
</script>
<template>
  <div class="sender">
    <input type="text" placeholder="Nom Prénom" v-model="name" required />
    <input type="email" placeholder="Email" v-model="email" required />
    <input type="text" placeholder="Sujet" v-model="subject" required />
    <textarea rows="8" placeholder="Message" v-model="message" required />
    <p class="error">{{ error }}</p>
    <button @click="sendmail">Envoyer !</button>
  </div>
</template>
<style scoped>
.error {
  margin: 12px;
  color: red;
}

input[type="text"],
input[type="email"],
textarea {
  border: solid white 2px;
  background: transparent;
  /*background: rgba(0, 0, 0, 0.7);*/
  border-radius: 6px;
  font-size: 20px;
  padding: 12px;
  margin: 12px;
  outline: none;
  color: white;
  display: block;
  width: calc(100% - 24px);
  transition: transform 0.2s;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  transform: scale(1.05) rotate(0.5deg);
}

button {
  border: solid 2px white;
  border-radius: 6px;
  font-size: 20px;
  font-weight: bold;
  background: white;
  color: black;
  padding: 6px 12px;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  outline: none;
  cursor: pointer;
  margin: 12px;
  display: block;
}

@media (hover: hover) {
  button:hover {
    background: transparent;
    color: white;
    transform: scale(1.1) rotate(2deg);
  }
}
</style>