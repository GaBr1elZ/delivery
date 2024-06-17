<template>
  <CompBanner :pagina-id="6"></CompBanner>
  <div class="container-principal">
    <div class="row-container">
      <h1 class="titulo">Status do Pedido</h1>
      <hr />
    </div>
    <div class="row-container">
      <StatusComponent></StatusComponent>
    </div>
    <div style="margin-top: 80px" class="row-container">
      <h1 class="titulo">Resumo do Pedido</h1>
      <hr />
    </div>

    <div class="row-container">
      <div class="container-resumo">
        <div class="container-pedido">
          <h1>Itens:</h1>
          <p>1x <span style="font-weight: bold;">Item 1</span></p>
          <p>1x Item 2</p>
          <p>1x Item 3</p>
        </div>
        <div class="container-endereco">
          <h1>Endereço:</h1>
          <p>Rua:</p>
          <p>Bairro:</p>
          <p>Complemento:</p>
        </div>
        <div class="container-pagamento">
          <h1>Pagamento:</h1>
          <p>Método:</p>
          <p>Taxa:</p>
          <p>Total:</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompBanner from "../components/CompBanner.vue";
import StatusComponent from "../components/StatusComponent.vue";
export default {
  name: "ControlePedidio",
  components: {
    CompBanner,
    StatusComponent,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
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

.container-resumo {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
}

.container-pedido {
  width: 33%;
  height: 300px;
  border-right: #000 3px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container-endereco {
  width: 33%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: #000 3px solid;
}

.container-pagamento{
  width: 33%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
