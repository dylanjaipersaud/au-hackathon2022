<template>
  <v-app>
    <NavBar/>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {NavBar},
  data: () => ({
    //
  }),
};
</script>

<style>
*{
  margin: 0%;
	padding: 0%;
	border: 0%;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>