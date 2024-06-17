<template>
    <div class="container-principal">
      <div class="row-container">
        <h1 class="titulo">Finalizar Compra</h1>
        <hr />
        <div class="container-finalizar">
          <div class="container-endereco">
            <FormEndereco></FormEndereco>
          </div>
          <div class="container-carrinho">
            <ItensFinalizar></ItensFinalizar>
          </div>
        </div>
      </div>

      <div style="margin: 0" class="row-container">
        <h1 style="margin: 0" class="titulo">Método de Pagamento</h1>
        <hr />

        <MetodPay></MetodPay>
      </div>

      <button type="submit">teste</button>
    </div>
</template>

<script>
import ItensFinalizar from "../components/ItensFinalizar.vue";
import FormEndereco from "../components/FormEndereco.vue";
import MetodPay from "../components/MetodPay.vue";
export default {
  name: "CompFinalizar",

  components: {
    ItensFinalizar,
    FormEndereco,
    MetodPay,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.titulo {
  margin-bottom: 2px;
  margin-top: 50px;
}

hr {
  width: 90%;
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
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
}

.container-finalizar {
  width: 90%;
  height: 500px;
  display: flex;
  flex-direction: row;
  grid-gap: 25px;
}

.container-endereco {
  width: 60%;
  height: 500px;
}

.container-carrinho {
  width: 40%;
  height: 420px;
  border: 1px solid #c6c7c8;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
}
</style>
