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
      <v-card class="repo-item">
        <h3>Name</h3>
        <p>Desc</p>
        <br>
        <div class="space-con">
          <p>Lang</p>
          <p>Viewers</p>
          </div>
        </v-card>
      </div>
</v-container>
</template>

<script>

export default {
  name: "MainRepos",
};
</script>

<style scoped>
.repo-item{
  width: 55%;
  background-color: #eee;
  padding: 15px;
}

</style>