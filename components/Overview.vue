<script>
export default {};
</script>
<template>
  <div class="overview">
    <section class="flex">
      <div class="side">
        <div class="box">
          <h2>Qui suis-je ?</h2>
          <p>
            Développeur web freelance. Passionné de code, de musique, de nature et de grands espaces. Mes compétences transversales dans le domaine du développement web et ma capacité d'adaptation me permettent de prendre en charge n'importe quel type de projet.
          </p>
        </div>
      </div>
      <div class="pic">
        <img src="~/assets/images/profile.png" alt="Alexandre profile picture" />
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.overview {
  overflow: hidden;
  background-color: $bgColor;

  .flex {
    margin: 4rem 2rem;
    display: flex;
    justify-content: space-between;

    .side {
      width: 50%;

      .box {
        margin: 5rem;
      }
    }

    .pic {
      margin: 3rem;
      width: 30%;

      img {
        pointer-events: none;
        user-select: none;
        display: block;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .flex {
      //display: block;
      margin: 0rem;

      .side .box {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .flex {
      display: block;
      margin: 4rem;

      .side {
        width: auto;

        .box {
          margin: 0;
        }
      }

      .pic {
        width: auto;
        max-width: 300px;
        margin: 4rem auto;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .flex {
      margin: 2rem;

      .pic {
        margin: 2rem auto;
      }
    }
  }
}
</style>