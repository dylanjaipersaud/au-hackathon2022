<template>
  <div>
    <v-navigation-drawer app height="100%" color="#3cb371" v-model="drawer">
      <v-list >
          <a href="https://www.adelphi.edu">
        <v-list-item class="nav-logo">
          
            <v-img
              src="../assets/adelphi-logo.png"
              alt="Adelphi University"
              max-width="150"
              contain
            />
          
        </v-list-item>
        </a>
        <div>
          <v-list-item
            dense
            link
            v-for="item in nav_items"
            :key="item.title"
            router
            :to="item.route"
            class="nav-item"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <div class="end-items">End</div>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      v-if = "$vuetify.breakpoint.mdAndDown"
      app
      color="#3cb371"
      class="hidden-lg-and-up"
      flat
      @click="drawer = !drawer"
    >
    <v-app-bar-nav-icon class="ml-5"></v-app-bar-nav-icon>
      <div>
         <a href="https://www.adelphi.edu">
        <v-img
          src="../assets/adelphi-logo.png"
          alt="Adelphi University"
          class="shrink mr-2"
          max-width="160"
          contain
        />
        </a>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
      drawer: false,
    nav_items: [
      {
        title: "Home",
        icon: "mdi-home",
        route: "/",
      },
      {
        title: "Fourms",
        icon: "mdi-form-select",
        route: "/",
      },
      {
        title: "Repository",
        icon: "mdi-application-brackets-outline",
        route: "/",
      },
      {
        title: "Explore",
        icon: "mdi-web",
        route: "/",
      },
    ],
  }),
};
</script>

<style scoped>
.nav-logo {
  width: 100%;
  /* display: flex;
    justify-content: right; */
  background-color: #e4e4ef;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-bottom: 30px;
  box-shadow: 0px 3px 5px #ccc ;
}
.nav-item {
  width: 100%;
  /* display: flex;
    justify-content: right; */
  background-color: #e4e4ef;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-bottom: 5px;
  box-shadow: 0px 3px 5px #ccc ;
}
.end-items{
    margin-top: 90%;
}
</style>