<template>
  <div class="row-carrinho">
    <div class="titulo-carrinho">
      <h2>Itens no Carrinho</h2>
    </div>
  </div>
  <div class="row-carrinho">
    <div v-for="prato in pratos" :key="prato.id" class="row-itens">
      <div class="nome-prato">
        <h3 class="prato">{{ prato.pratoName }}</h3>
        <h6 class="qty">x{{ prato.quantidade }}</h6>
      </div>
      <div class="valor-prato">
        <h4 class="valor">R${{ prato.valorPrato }}</h4>
      </div>
    </div>
  </div>
  <div v-for="prato in pratos" :key="prato.id" class="row-total">
    <div class="total">
      <h2>Total:</h2>
      <h3>R${{ prato.valorTotal }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pratos: [],
      nome: null,
    };
  },

  methods: {
    async getPratos() {
      const req = await fetch("http://localhost:3000/pedidoFinalizado");
      const data = await req.json();

      
      this.pratos = data.prato;
    },
  },

  mounted() {
    this.getPratos();
  },
};
</script>

<style scoped>
.titulo-carrinho {
  width: 100%;
  height: 60px;
  background-color: #000;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.row-total {
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  background-color: #000;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.total {
  width: 100%;
  height: 60px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
F .row-carrinho {
  width: 100%;
  height: 60px;
}
.row-itens {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #c6c7c8;
  display: flex;
  flex-direction: row;
}

.nome-prato {
  width: 50%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.valor-prato {
  width: 50%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.valor {
  margin-right: 10px;
}

.prato,
.qty {
  margin: 0;
  margin-left: 10px;
}
</style>
