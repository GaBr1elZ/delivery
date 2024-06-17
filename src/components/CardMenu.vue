<template>
  <div class="container-card">
    <CompPrato></CompPrato>
  </div>
</template>

<script>
import CompPrato from './CompPrato.vue'
export default {


  name: "CardMenu",
  components:{
    CompPrato,
  },

  data() {
    return {
    };
  },
};

</script>

<style scoped>
.container-card {
  width: 100%;
  display: flex;
  height: auto;
  grid-gap: 35px 35px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.card-menu {
  width: 450px;
  max-height: 550px;
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
  margin-top: 25px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
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
</style>
