<template>
  <div class="container-principal">
    <div class="container-1">
      <div @click="openCard('credito')" class="container-credito">
        <fa class="icons" icon="credit-card" />
        <h3>Cartão de Crédito</h3>
      </div>
      <div @click="openCard('debito')" class="container-debito">
        <fa class="icons" icon="credit-card" />
        <h3>Cartão de Débito</h3>
      </div>
      <div @click="openCard('dinheiro')" class="container-pix">
        <fa class="icons" icon="money-bill-wave" />
        <h3>Dinheiro na Entrega</h3>
      </div>
    </div>
    <div class="container-2">
      <div id="credito" class="card-credito"></div>
      <div id="debito" class="card-debito"></div>
      <div id="dinheiro" class="card-dinheiro"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openCard(cardType) {
      const cardElement = document.getElementById(cardType);

      if (cardElement) {
        const cardElements = this.$el.querySelectorAll(
          ".card-credito, .card-debito, .card-dinheiro"
        );

        for (const element of cardElements) {
          if (element.id === cardType) {
            element.style.display = "flex";
          } else {
            element.style.display = "none";
          }
        }
      }
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container-principal {
  width: 90%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-1 {
  width: 100%;
  height: 150px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  grid-gap: 15px;
}

.container-2 {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
}

.container-credito {
  width: 170px;
  height: 150px;
  background-color: #000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.container-debito {
  width: 170px;
  height: 150px;
  background-color: #000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.container-pix {
  width: 170px;
  height: 150px;
  background-color: #000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.card-credito {
  width: 540px;
  height: 150px;
  background-color: blueviolet;
  display: none;
}

.card-debito {
  width: 540px;
  height: 150px;
  background-color: rgb(178, 243, 0);
  display: none;
}

.card-dinheiro {
  width: 540px;
  height: 150px;
  background-color: rgb(187, 47, 4);
  display: none;
}
.icons {
  height: 3rem;
}
</style>
