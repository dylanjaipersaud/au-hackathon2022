<template>
    <v-container>
    <div class="Stripe">
      <div class="TextBox">
        <div class="TextParams">
          <h1>Add a New Question</h1>
        </div>
      </div>
    </div>
    <div class="page-con">
      <v-form class="fourm-con" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          label="Title"
          counter="100"
          class="input-opt"
          hint="Enter the a title"
          required
          persistent-hint
          prepend-icon="mdi-pencil"
          :rules="Rules"
          v-model="title"
        ></v-text-field>
        <v-textarea
          label="Description"
          counter="300"
          class="input-opt"
          hint="What is your question / topic?"
          required
          persistent-hint
          prepend-icon="mdi-pencil"
          :rules="Rules"
          v-model="description"
        ></v-textarea>
        <br />
        <div class="v-btn-list">
          <v-btn
            :disabled="!valid"
            color="success"
            class="v-btn-form"
            @click="validate"
          >
            Submit
          </v-btn>
          <v-btn color="warning" class="v-btn-form" @click="resetValidation">
            Reset Validation
          </v-btn>
        </div>
      </v-form>
    </div>
    </v-container>
</template>

<script>
export default {
    data: () => ({
      title: null,
      description: null,
     valid: true,
     Rules: [(v) => v != null || "This field is required"],
  }), 

    methods: {
        validate() {
      this.valid = this.$refs.form.validate();
      if (this.valid) {
        this.handleSubmit();
      }
      else
      {
        alert("An error has occured");
      }
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },
    handleSubmit(){
      alert("Question was posted");
      this.resetValidation();
    }
    }
}
</script>

<style scoped>
.input-opt {
  font-weight: normal;
  padding-top: 40px;
  /* margin-right: 40%; */
  width: 60%;
}
.fourm-main {
  background-color: #eee;
  padding: 20px;
  justify-content: center;
}
.fourm-con {
  width: 85vw;
  padding-left: 20px;
  margin-right: 50%;
  /* align-items: center; */
  justify-content: space-evenly;
}
@media (min-width: 1264px) {
  .fourm-con {
    width: 60vw;
  }
}
.v-btn-form {
  width: 25%;
  margin-right: 20px;
  margin-left: 20px;
  text-align: center;
  border-radius: 10px;
}
.v-btn-list {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>