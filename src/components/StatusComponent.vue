<template>
  <div class="container-status">
    <div class="status1">
      <div title="Em Produção" class="status11" :style="{ opacity: status11 }">
        <fa class="icon" icon="utensils" />
      </div>
      <span :style="{ opacity: status11 }">Pedido em Produção</span>
    </div>
    <div class="perc2">
      <div class="perc11" :style="{ width: perc22 }"></div>
    </div>
    <div class="status2">
      <div
        title="Pedido Saiu para Entrega"
        class="status11"
        :style="{ opacity: status22 }"
      >
        <fa class="icon" icon="motorcycle" />
      </div>
      <span :style="{ opacity: status22 }">Pedido Saiu para Entrega</span>
    </div>
    <div class="perc3">
      <div class="perc11" :style="{ width: perc33 }"></div>
    </div>
    <div class="status3">
      <div
        title="Pedido Entregue!"
        class="status11"
        :style="{ opacity: status33 }"
      >
        <fa class="icon" icon="check" />
      </div>
      <span :style="{ opacity: status33 }">Pedido Entregue</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusComponent",
  data() {
    return {
      perc22: "0px",
      perc33: "0px",
      status11: "0%",
      status22: "0%",
      status33: "0%",
    };
  },

  methods: {
    animateBar() {
      setTimeout(() => {
        this.status11 = "100%";
      }, 2000);

      setTimeout(() => {
        this.perc22 = "150px";
      }, 7000);

      setTimeout(() => {
        this.status22 = "100%";
      }, 9000);

      setTimeout(() => {
        this.perc33 = "150px";
      }, 10000);

      setTimeout(() => {
        this.status33 = "100%";
      }, 12000);
    },
  },

  mounted() {
    this.animateBar();
  },
};
</script>

<style scoped>
.container-status {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.perc1,
.perc2,
.perc3 {
  width: 150px;
  height: 10px;
  background-color: #c6c7c8;
}

.perc11,
.perc22,
.perc33 {
  height: 10px;
  background-color: rgb(27, 109, 27);
  transition: 2s ease;
}

.status1,
.status2,
.status3 {
  width: 70px;
  height: 70px;
  background-color: #c6c7c8;
  border-radius: 50%;
  margin: -1px;
  text-align: center;
  font-weight: bold;
}

.status11,
.status22,
.status33 {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgb(27, 109, 27);
  transition: 2s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.icon {
  height: 1.9;
}
</style>
