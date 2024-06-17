<template>
  <div v-for="(item, pratoId) in carrinho" :key="pratoId" class="items-cart">
    <div class="div-img">
      <img class="img-prato" :src="item.prato.foto" alt="" />
    </div>
    <div class="nome-prato">
      <h3 class="titulo-prato">{{ item.prato.nome }}</h3>
      <h6 class="id-prato">Id: {{ item.prato.id }}</h6>
    </div>
    <div class="valor">
      <div class="div-input-group">
        <button
          :disabled="item.qty <= 1"
          @click="remove(pratoId)"
          type="button"
          class="btn-rmv"
        >
          -
        </button>
        <input :value="item.qty" readonly class="input-qtd" type="number" />
        <button @click="add(pratoId)" type="button" class="btn-add">+</button>
      </div>
      <div class="preco">R${{ valorPrato(pratoId) }}</div>
      <div class="remover-item">
        <button @click="removerItem(pratoId)" class="btn-exl">
          <fa icon="xmark" />
        </button>
      </div>
    </div>
  </div>

  <div class="cart-final">
    <div class="div-continuar">
      <router-link :to="{ name: 'cardapio' }">
        <div class="continuar-comprando">Continuar Comprando</div>
      </router-link>
    </div>
    <div class="div-total">
      <div class="total">Total: R${{ total }}</div>
    </div>
    <div class="div-finalizar">
      <router-link :to="{ name: 'finalizar' }">
        <button @click="createPedidos()" class="btn-finalizar">
          Finalizar <fa class="icon" icon="check" /></button
      ></router-link>
    </div>
  </div>
  <div id="pop-up" class="popup">O Carrinho Esta Vazio!</div>
</template>

<script>
export default {
  name: "ItemsCart",
  data() {
    return {
      carrinho: {},
    };
  },

  methods: {
    abrir() {},

    add(pratoId) {
      this.carrinho[pratoId].qty++;
    },

    remove(pratoId) {
      if (this.carrinho[pratoId].qty <= 1) {
        return;
      }
      this.carrinho[pratoId].qty--;
    },

    valorPrato(pratoId) {
      const prato = this.carrinho[pratoId].prato;
      return prato.valor * this.carrinho[pratoId].qty;
    },

    async getPratos() {
      const req = await fetch("http://localhost:3000/pedidos");
      const data = await req.json();

      if (data.prato && data.prato.length > 0) {
        data.prato.forEach((prato) => {
          this.carrinho[prato.id] = { prato, qty: 1 };
        });
      } else {
        document.getElementById("pop-up").style.display = "flex";

        setTimeout(() => {
          document.getElementById("pop-up").style.display = "none";
        }, 2500);
      }
    },

    removerItem(pratoId) {
      delete this.carrinho[pratoId];
    },

    async createPedidos() {
      try {
        const pedidoFinalizado = Object.values(this.carrinho).map((item) => {
          return {
            pratoName: item.prato.nome,
            pratoId: item.prato.id,
            quantidade: item.qty,
            valorPrato: this.valorPrato(item.prato.id),
            valorTotal: this.total,
          };
        });

        const reqGet = await fetch("http://localhost:3000/pedidoFinalizado");
        let pedidosAtuais = await reqGet.json();

        if (
          pedidosAtuais &&
          pedidosAtuais.prato &&
          Array.isArray(pedidosAtuais.prato)
        ) {
          pedidosAtuais.prato.push(pedidoFinalizado);
        } else {
          pedidosAtuais = {
            prato: pedidoFinalizado,
          };
        }

        const dataJson = JSON.stringify(pedidosAtuais);

        const req = await fetch("http://localhost:3000/pedidoFinalizado", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataJson,
        });

        const res = await req.json();

        console.log(res);

        try {
          await fetch("http://localhost:3000/pedidos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });

          this.carrinho = {};
        } catch (error) {
          console.error("Erro ao finalizar pedido:", error);
        }
      } catch (error) {
        console.error("Erro ao finalizar pedido:", error);
      }
    },
  },

  computed: {
    total() {
      return Object.values(this.carrinho).reduce(
        (acc, item) => acc + this.valorPrato(item.prato.id),
        0
      );
    },
  },

  mounted() {
    this.getPratos();
  },
};
</script>

<style scoped>
.items-cart {
  width: 745px;
  min-height: 95px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #c6c7c8;
  grid-gap: 5px;
}

.div-img {
  width: 80px;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.img-prato {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 50%;
}

.nome-prato {
  width: 120px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.titulo-prato {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.id-prato {
  margin: 0;
  font-size: 12px;
  font-weight: bold;
}

.valor {
  width: 545px;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 20px;
}

.div-input-group {
  width: 150px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btn-rmv {
  width: 33px;
  height: 39px;
  background-color: #000;
  border: 2px solid #000;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #fff;
  font-size: 20px;
  transition: 0.5s;
}

.btn-rmv:hover {
  background-color: #fff;
  color: rgb(214, 31, 31);
  border: 2px solid rgb(214, 31, 31);
  cursor: pointer;
}

.btn-add {
  width: 33px;
  height: 39px;
  background-color: #000;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 2px solid #000;
  color: #fff;
  font-size: 20px;
  transition: 0.5s;
}

.btn-add:hover {
  background-color: #fff;
  color: rgb(27, 109, 27);
  border: 2px solid rgb(27, 109, 27);
  cursor: pointer;
}

.input-qtd {
  width: 53px;
  height: 39px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: #e9ecef;
  text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.preco {
  width: 100px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.remover-item {
  width: 100px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-exl {
  height: 39px;
  width: 53px;
  background-color: #000;
  color: #fff;
  border: 2px solid #000000;
  border-radius: 5px;
}

.btn-exl:hover {
  cursor: pointer;
  background-color: #fff;
  color: rgb(214, 31, 31);
  border: 2px solid rgb(214, 31, 31);
  transition: 0.5s;
}

.cart-final {
  width: 745px;
  height: 70px;
  background-color: #000;
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: row;
}

.div-continuar {
  width: 248px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.continuar-comprando {
  width: 200px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
}

.div-total {
  width: 248px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.total {
  width: 200px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
}

.div-finalizar {
  width: 248px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-finalizar {
  width: 200px;
  height: 39px;
  border-radius: 5px;
  border: 2px solid rgb(27, 109, 27);
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  background-color: rgb(27, 109, 27);
  transition: 0.5s;
}
.btn-finalizar:hover {
  cursor: pointer;
  background-color: #fff;
  color: rgb(27, 109, 27);
  border: solid 2px rgb(27, 109, 27);
}

.popup {
  width: 300px;
  height: 80px;
  background-color: rgb(214, 31, 31);
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
