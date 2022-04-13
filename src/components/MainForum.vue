<template>
  <v-container>
    <div class="Stripe">
      <div class="TextBox">
        <div class="TextParams">
          <h1>Forums</h1>
        </div>
      </div>
    </div>
    <div class="page-con">
      <div class="space-con">
        <h2>Discussions</h2>
        <router-link to="/AddForum">
          <v-btn>Add a Question</v-btn>
        </router-link>
      </div>
      <br />
      <div class="space-con">
        <h3>Filter</h3>
        <div>
          <v-btn class="button-list">Newest</v-btn>
          <v-btn class="button-list">Unanswered</v-btn>
          <v-btn class="button-list">Closed</v-btn>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <v-card v-for="post in forum_items" :key="post.id" style="margin-bottom: 20px">
        <v-card-text class="forum-tile">
          <div class="forum-tile-left">
            Answers: {{ post.answers }}
            <br />
            Views: {{ post.views }}
          </div>

          <div class="forum-tile-right">
            <h3 class="forum-tile-right-item">{{ post.title }}</h3>
            <p class="forum-tile-right-item">{{ post.description }}</p>
              <div class="forum-tile-right-item" id="tags-list">
                <v-card
                  outlined
                  color="#3cb371"
                  v-for="tag in post.tags"
                  :key="tag.id"
                  class="tag-item"
                >
                  <b>{{ tag.title }}</b>
                </v-card>
              </div>
              <div>
                <i>Posted by: </i> {{ post.user }} <i> at </i>{{ post.time }}
              </div>
            </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MainForum",
  data: () => ({
    forum_items: [
      {
        id: 1,
        title: "What can you do with 'args[]' ?",
        description: "I've written it so many times and I have no idea what it does.",
        views: 15,
        answers: 7,
        user: "Dylan J.",
        time: "5:00PM",
        tags: [
          {
            id: 0,
            title: "Java",
          },
          {
            id: 1,
            title: "OOP",
          },
        ],
      },
      {
        id: 2,
        title: "What is a pointer?",
        description: "Pointers are hard to understand, can someone explain?",
        views: 10,
        answers: 4,
        user: "Dylan J.",
        time: "4:30PM",
        tags: [
          {
            id: 0,
            title: "C",
          },
          {
            id: 1,
            title: "Pointers",
          },
        ],
      },
      {
        id: 3,
        title: "Why is it so hard to center?",
        description: "Are there any tricks to centering a box in a page?",
        views: 10,
        answers: 7,
        user: "Dylan J.",
        time: "1:00PM",
        tags: [
          {
            id: 0,
            title: "HTML",
          },
          {
            id: 1,
            title: "CSS",
          },
          {
            id: 2,
            title: "JavaScript",
          },
        ],
      },
    ],
  }),
  methods: {},
};
</script>

<style scoped>
.tag-item {
  min-width: 20px;
  padding: 4px;
  margin-right: 10px;
  color: #eee;
}
</style>