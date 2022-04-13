<template>
<v-container>
  <div class="Stripe">
    <div class="TextBox">
      <div class="TextParams">
        <h1>Repositories</h1>
      </div>
    </div>
  </div>
  <div class="page-con">
    <div class="space-con">
        <h2>Your Repositories</h2>
        <router-link to="/">
          <v-btn>Add a Repository</v-btn>
        </router-link>
      </div>
      <br />
      <hr />
      <br />
      <v-card class="repo-item" v-for="repo in repo_items" :key="repo.id">
        <h3>{{repo.name}}</h3>
        <p>{{repo.desc}}</p>
        <br>
        <div class="space-con">
          <p>{{repo.lang}}</p>
          <p>Viewers: {{repo.views}}</p>
          </div>
        </v-card>
      </div>
</v-container>
</template>

<script>

export default {
  name: "MainRepos",
  data: () => ({
    repo_items: [
      {
        id: 1,
        name: "Floppy Bird Game",
        desc: "A remake of the popular mobile game Flappy Bird",
        lang: "C",
        views: 10,
      },
      {
        id: 2,
        name: "Personal Website",
        desc: "Personal resume website",
        lang: "HTML",
        views: 35,
      },
      {
        id: 3,
        name: "Account System",
        desc: "Designed an account system to model an ATM",
        lang: "Java",
        views: 18,
      }
    ],
  }), 
};
</script>

<style scoped>
.repo-item{
  width: 55%;
  background-color: #eee;
  padding: 15px;
  margin-bottom: 20px;
}

</style>