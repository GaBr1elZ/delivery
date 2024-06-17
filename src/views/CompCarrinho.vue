<template>
  <CompBanner :pagina-id="2"></CompBanner>
  <div class="container-principal">
    <h1 class="titulo">Carrinho</h1>
    <hr>
    <div class="row-container">
      <ItemsCart></ItemsCart>
    </div>
  </div>
</template>

<script>
import ItemsCart from '../components/ItemsCart.vue'
import CompBanner from '../components/CompBanner.vue'
export default {
  name: "ComCarrinho",
  components:{
    ItemsCart,
    CompBanner,
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
  min-height: 100vh;
  justify-content: center;
}

.titulo {
  margin-bottom: 2px;
  margin-left: 15px;
  margin-top: 50px;
}

hr {
  width: 80%;
  height: 3px;
  background-color: #000;
  border: none;
  margin-bottom: 100px;
}

.row-container {
  width: 745px;
  display: flex;
  flex-direction: column;
  min-height: 550px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
  border: solid 1px #c6c7c8;
  border-radius: 5px;
  position: relative;
}
</style>
