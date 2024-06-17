<template>
  <div v-for="prato in pratos" :key="prato.id" class="card-menu">
    <div class="container-img">
      <img class="img-prato" :src="prato.foto" alt="" />
    </div>
    <div class="container-texto">
      <h2>{{ prato.nome }}</h2>
      <p>{{ prato.descricao }}</p>
      <h3>R$ {{ prato.valor }}</h3>
    </div>

    <form @submit.prevent="createPedidos(prato.id)">
      <button @click="abrir" type="submit" class="btn-comp">
        <p>Adicionar</p>
        <fa class="icon" icon="cart-shopping" />
      </button>
      
    </form>
  </div>
  <div id="pop-up" class="popup">Pedido Adicionado ao Carrinho!</div>
</template>

<script>
export default {
  data() {
    return {
      pratos: [],
      valor: null,
      nome: null,
      descricao: null,
      id: null,
      foto: null,
    };
  },

  methods: {

    abrir(){
      document.getElementById('pop-up').style.display = "flex";
      
      setTimeout(() => {
        document.getElementById('pop-up').style.display = "none";
      }, 2500)
    },

    async getPratos() {
      const req = await fetch("http://localhost:3000/pratosPrin");
      const data = await req.json();

      this.pratos = data.prato;
      if (this.pratos.length > 0) {
        this.valor = this.pratos[0].valor;
        this.nome = this.pratos[0].nome;
        this.descricao = this.pratos[0].descricao;
        this.id = this.pratos[0].id;
        this.foto = this.pratos[0].id;
      }
    },

    async createPedidos(pratoId) {
      const pratoSelecionado = this.pratos.find(
        (prato) => prato.id === pratoId
      );

      const novoPedido = {
        id: pratoSelecionado.id,
        nome: pratoSelecionado.nome,
        descricao: pratoSelecionado.descricao,
        valor: pratoSelecionado.valor,
        foto: pratoSelecionado.foto,
      };

      const reqGet = await fetch("http://localhost:3000/pedidos");
      let pedidosAtuais = await reqGet.json();

      if (
        pedidosAtuais &&
        pedidosAtuais.prato &&
        Array.isArray(pedidosAtuais.prato)
      ) {
        pedidosAtuais.prato.push(novoPedido);
      } else {
        pedidosAtuais = {
          prato: [novoPedido],
        };
      }

      const dataJson = JSON.stringify(pedidosAtuais);

      const req = await fetch("http://localhost:3000/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      console.log(res);
    },
  },

  mounted() {
    this.getPratos();
  },
};
</script>

<style scoped>
.card-menu {
  width: 450px;
  max-height: 570px;
  border-radius: 5px;
  display: flex;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: center;
}

.container-img {
  width: 100%;
  height: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.container-texto {
  text-align: center;
  width: 100%;
  min-height: 170px;
}

.img-prato {
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
}

.btn-comp {
  width: 160px;
  height: 40px;
  border-radius: 50px;
  background-color: #000000;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  border: 2px solid #000000;
}

.btn-comp:hover {
  cursor: pointer;
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #000000;
  transition: 0.5s;
}

fa::before {
  color: #fff;
  height: 1.4rem;
}

fa::after {
  color: #000000;
  height: 1.4rem;
}

.popup{
  width: 300px;
  height: 80px;
  background-color: rgb(27, 109, 27);
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
