<template>
  <ul class="nav" id="nav">
    <router-link class="items" :to="{ name: 'home' }">Home</router-link>
    <router-link class="items" :to="{ name: 'cardapio' }">Cardapio</router-link>
    <router-link class="items" :to="{ name: 'contato' }">Contato</router-link>
    <router-link
      class="items"
      :to="{ name: 'team', params: { member: 'gabriel' } }"
      >Equipe</router-link
    >
    <router-link class="items" :to="{ name: 'carrinho' }"
      ><fa class="icon" icon="cart-shopping"
    /></router-link>
  </ul>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      isActive: false,
      hasError: false,
    };
  },
};
</script>

<style scoped>
.nav {
  background-color: #000;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  width: 100%;
  margin: 0;
  padding: 0;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
}
.items {
  text-decoration: none;
  color: #fff;
  margin-top: 15px;
  background-color: #000000;
  display: flex;
  height: 60px;
  margin-top: 15px;
  width: 90px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 0;
}

.items:hover {
  background-color: #fff;
  color: #000;
  display: flex;
  height: 60px;
  margin-top: 15px;
  width: 90px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 0;
}

.router-link-exact-active {
  background-color: #fff;
  color: #000;
  display: flex;
  height: 60px;
  margin-top: 15px;
  width: 90px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 0;
}

.icon::before {
  color: #fff;
  height: 1.4rem;
  margin-top: 15px;
}

.icon::after {
  color: #000000;
  height: 1.4rem;
  margin-top: 15px;
}
</style>
