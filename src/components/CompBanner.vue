<template>
  <div class="banner">
    <img class="img-banner" src="/img/restaurante.jpg" alt="" />
    <h1 class="txt-banner">{{ getTitleById(paginaId) }}</h1>
  </div>
</template>

<script>
export default {
  name: "CompBanner",
  props: {
    paginaId: Number,
  },
  data() {
    return {
      paginas: [
        { id: 1, title: "Home" },
        { id: 2, title: "Carrinho" },
        { id: 3, title: "Cardapio" },
        { id: 4, title: "Contato" },
        { id: 5, title: "Equipe" },
        { id: 6, title: "Status" },
      ],
    };
  },
  methods: {
    getTitleById(id) {
      const pagina = this.paginas.find((p) => p.id === id);
      return pagina ? pagina.title : "";
    },
  },
};
</script>

<style scoped>
.banner {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
}

.img-banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.txt-banner {
  color: #fff;
  font-size: 72px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: solid 3px #000;
  padding: 3px;
  position: absolute;
}
</style>
