<template>
<div id="app">

  <v-app>
    <NavBar />
    <v-content class="main-con">
      <router-view></router-view>
    </v-content>
  </v-app>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
  data: () => ({
    //
  }),
};
</script>


<style>
#app {
  /* background-image: url("https://w0.peakpx.com/wallpaper/290/465/HD-wallpaper-green-abstract-waves-creative-abstract-art-green-wavy-background-abstract-waves-green-backgrounds-waves-textures-background-with-waves.jpg");
  background-repeat: no-repeat; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
a{
  text-decoration: none;
}
h1 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
div.container {
  width: 100%;
  margin: 0%;
  padding: 0%;
}
.main-con {
  width: 100%;
  height: 100%;
  position: relative;
  /* margin-top: 15px; */
  /* margin-left: 30px; */
  /* background-color: red; */
}
.Stripe {
  width: 100%;
  height: 100px;
  display: block;
  background-color: #eee;
  color: black;
  /* color: white; */
}

.TextBox {
  height: 100%;
  display: block;
  margin-left: 30px;
}

.page-con {
  margin: 30px 50px 20px 50px;
  height: 100%;
}

.TextParams {
  height: 100%;
  display: table;
  float: left;
}

.TextParams h1 {
  height: 100%;
  display: table-cell;
  vertical-align: middle;
  font-family: "Barlow Condensed";
}

.TextParams h1 span {
  font-weight: 500;
}


/* Forum CSS */
.space-con {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.button-list {
  margin-left: 10px;
}
.forum-tile {
  height: 100%;
  width: 100%;
  background-color: #eee;
  display: flex;
  padding: 20px;
}
.forum-tile-left {
  border-right: 3px solid #3cb371;
  /* padding-left: 10px; */
  padding-right: 15px;
}
.forum-tile-right {
  padding-left: 15px;
}
.forum-tile-right-item {
  padding-bottom: 5px;
}
#tags-list {
  display: flex;
}
.tag-item {
  min-width: 20px;
  padding: 4px;
  margin-right: 10px;
  color: #eee;
}
</style>
