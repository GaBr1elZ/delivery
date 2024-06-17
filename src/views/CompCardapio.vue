<template>
  <CompBanner :pagina-id="3"></CompBanner>
  <div class="container-principal">
    <div class="row-container">
      <h1 class="titulo">Pratos Principais</h1>
      <hr />
      <div class="container-card">
        <PratoPrincipal></PratoPrincipal>
      </div>
    </div>

    <div class="row-container">
      <h1 class="titulo">Sobremesas</h1>
      <hr />
      <div class="container-card">
        <CompSobremesas></CompSobremesas>
      </div>
    </div>

    <div class="row-container">
      <h1 class="titulo">Bebidas</h1>
      <hr />
      <div class="container-card">
        <CompBebidas></CompBebidas>
      </div>
    </div>
  </div>
</template>

<script>
import CompBanner from "../components/CompBanner.vue";
import PratoPrincipal from "../components/PratoPrincipal.vue";
import CompSobremesas from "../components/CompSobremesas.vue";
import CompBebidas from "../components/CompBebidas.vue";
export default {
  name: "CompCardapio",
  components: {
    CompBanner,
    PratoPrincipal,
    CompSobremesas,
    CompBebidas,
  },

  data() {
    return {};
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

.container-card {
  width: 100%;
  display: flex;
  height: auto;
  grid-gap: 35px 35px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
</style>
