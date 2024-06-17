<template>
  <CompBanner :pagina-id="1"></CompBanner>
  <div class="container-principal">
    <div class="row-container">
      <h1 class="titulo">Nossa História</h1>
      <hr />
      <div class="container-historia">
        <div class="container-texto">
          <h2>História</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            magni, corrupti ullam amet commodi consequatur aut, minima voluptas
            illo magnam modi nobis iste ducimus beatae voluptatum aliquid itaque
            labore. Praesentium.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            magni, corrupti ullam amet commodi consequatur aut, minima voluptas
            illo magnam modi nobis iste ducimus beatae voluptatum aliquid itaque
            labore. Praesentium.
          </p>
        </div>
        <div class="container-foto">
          <img class="img-chefe" src="/img/chefe-cozinha.jpg" alt="" />
        </div>
      </div>
    </div>

    <div class="row-container">
      <h1 class="titulo">Os Mais Pedidos</h1>
      <hr />
      <CardMenu></CardMenu>
    </div>

    <div class="row-container">
      <h1 class="titulo">Galeria</h1>
      <hr />
      <CompGaleria></CompGaleria>
    </div>
  </div>
</template>

<script>
import CompBanner from "../components/CompBanner.vue";
import CardMenu from "../components/CardMenu.vue";
import CompGaleria from "../components/CompGaleria.vue"

export default {
  name: "CompHome",
  components: {
    CompBanner,
    CardMenu,
    CompGaleria,
  },

  data() {
    return {};
  },

  created() {
    console.log(this.$route);
    console.log(this.$router);
  },

  methods: {},
};
</script>

<style scoped>
.container-principal {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.row-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.titulo {
  margin-bottom: 2px;
  margin-left: 15px;
  margin-top: 50px;
}

hr {
  width: 100%;
  height: 3px;
  background-color: #000;
  border: none;
  margin-bottom: 50px;
}

.container-historia {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.container-texto {
  max-width: 450px;
  height: auto;
  text-align: justify;
}

.container-foto {
  min-width: 450px;
  height: 450px;
}

.img-chefe {
  width: 100%;
  height: 100%;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.container-menu{
  width: 100%;
}
</style>
