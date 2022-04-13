<template>
  <v-container>
    <div class="Stripe">
      <div class="TextBox">
        <div class="TextParams">
          <h1>CS <span> Student Hub </span></h1>
        </div>
      </div>
    </div>
    <div  id="head">
      <h2 class="page-con" style="color: black;">Adelphi CS Department News</h2>
      <v-layout style="margin-left: 50px; margin-right: 50px; overflow-x: scroll;">

        <div v-for="tiles in newsItems" :key="tiles.id" >
          <v-card class="text-xs-center ma-3" style="min-height: 300px; width: 300px; margin-right: 10px; margin-bottom: 10px; margin-left: 10px;">
            <v-responsive>
              <img 
                :src="tiles.image" 
                :alt="tiles.alt_image"
                height="100%"
                width="100%"
              />
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{tiles.info}}</div>
            </v-card-text>
            
          </v-card>
          
        </div>
        
      </v-layout>
      </div>
    <div class="page-con">
      <h1>Trending Forums</h1>
      <br>
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
/*
<div class="Trending-List">
      <div class="ForumTitle" v-for="forums in trendingForums" :key="forums.id">
        <v-card class="text-xs-center ma-12" style="background-color: #eee">
          <v-card-text class="pt-4">
            <h2>{{forums.title}}</h2>
          </v-card-text>
          <v-card-text>
            <div class="subheading">{{forums.info}}</div>
          </v-card-text>
          
        </v-card>
      </div>
    </div>
*/
export default {
  name: "Home",

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
    newsItems: [
      {
        id: 1,
        image:
          "https://analyticsindiamag.com/wp-content/uploads/2019/08/undraw_all_the_data_h4ki.png",
        alt_image: "image",
        info: "Learn more about data science with this weekend's webinar!",
      },
      {
        id: 2,
        image:
          "https://tryswivl.com/wp-content/uploads/2019/04/undraw_data_report_bi6l.png",
        alt_image: "image",
        info: "Schedule your time better - workshop",
      },
      {
        id: 3,
        image:
          "https://www.bounteous.com/sites/default/files/styles/default/public/insights/2019-10/previews/20191003_blog_scoping_a_data_science_project_in_a_smarter_way_website.png?itok=ZZNj3C_7",
        alt_image: "image",
        info: "Free coding camps!",
      },
      {
        id: 4,
        image:
          "https://s3-ap-south-1.amazonaws.com/blogmindler/bloglive/wp-content/uploads/2018/06/07124934/Data-Science-Career.png",
        alt_image: "image",
        info: "Learn how to code!",
      },
    ],

    // trendingForums: [
    //   {
    //     id: 1,
    //     title: "is soup a drink",
    //     info: "no because you don't drink it, you eat it... I think",
    //   },
    //   {
    //     id: 2,
    //     title: "is water wet",
    //     info: "for something to be wet, it must be covered in water, water is covered in water therefore water is wet",
    //   },
    //   {
    //     id: 3,
    //     title: "what came first, the chicken or the egg",
    //     info: "organisms developed the ability to lay eggs much after they came into existance, therefore the chicken came first",
    //   },
    //   {
    //     id: 4,
    //     title: "who is steve jobs?",
    //     info: "ligma balls, sugon deez nuts, joe mama",
    //   },
    // ],
  }),

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.news-list {
  display: flex;
  overflow-x: scroll;
  margin: 20px;
}
.news-tile {
  min-height: 300px;
  min-width: 300px;
  background-color: purple;
  margin: 20px;
}
#head {
  background-color: #ddd;
}
.tag-item {
  min-width: 20px;
  padding: 4px;
  margin-right: 10px;
  color: #eee;
}
</style>