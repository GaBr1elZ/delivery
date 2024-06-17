<template>
  <div class="container">
    <img src="/img/galeria-1.png" alt="">
    <img src="/img/galeria-2.png" alt="">
    <img src="/img/prato1.jpg" alt="">
    <img src="/img/prato2.jpg" alt="">
    <img src="/img/restaurante.png" alt="">
    <img src="/img/restaurante.jpg" alt="">
    <img src="/img/galeria-1.png" alt="">
    <img src="/img/galeria-3.png" alt="">
    <img src="/img/galeria-1.png" alt="">
    <img src="/img/galeria-2.png" alt="">
    <img src="/img/prato1.jpg" alt="">
    <img src="/img/prato2.jpg" alt="">
    <img src="/img/restaurante.png" alt="">
    <img src="/img/restaurante.jpg" alt="">
    <img src="/img/galeria-1.png" alt="">
    <img src="/img/galeria-2.png" alt="">
  </div>
</template>

<script>
export default {
  name: "CompGaleria",
  data() {
    return {
    };
  },
};
</script>

<style scoped>

img{
  width: 100%;
  height: auto;
  display: block;
  padding: 10px;
  box-sizing: border-box;
}
.container{
  column-count: 4;
  max-width: 1500px;
  margin: 0 auto;
  column-gap: 10px;
}

@media screen and (max-width: 1100px) {
  .container{
    column-count: 3;
  }   
}

@media screen and (max-width: 680px) {
  .container{
    column-count: 2;
  }   
}

@media screen and (max-width: 500px) {
  .container{
    column-count: 1;
  }   
}
</style>
