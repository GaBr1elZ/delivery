<template>
  <NavBar></NavBar>

  <RouterView></RouterView>
  <CompFooter></CompFooter>
</template>

<script>
import NavBar from './components/NavBar.vue'
import CompFooter from './components/CompFooter.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    CompFooter,
  }
}
</script>

<style>
body{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
