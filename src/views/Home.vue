<template>
  <div class="home">
    <Nav />
    <Main />

    <div class="menu-info">
      <div class="title">
        <h2>For Your Breakfast</h2>
      </div>
      <div class="more">
        <router-link class="btn btn-purple" to="/breakfast"
          ><b-icon-eye-fill class="mr-2"></b-icon-eye-fill>see all</router-link
        >
      </div>
    </div>

    <div class="menus mb-5">
      <div class="cardMenu" v-for="bf in breakfast" :key="bf.id">
        <Card :product="bf" />
      </div>
    </div>

    <div class="menu-info">
      <div class="title">
        <h2>For Your Lunch</h2>
      </div>
      <div class="more">
        <router-link class="btn btn-purple" to="/lunch"
          ><b-icon-eye-fill class="mr-2"></b-icon-eye-fill>see all</router-link
        >
      </div>
    </div>

    <PrevBF />

    <div class="menu-info">
      <div class="title">
        <h2>Drink</h2>
      </div>
      <div class="more">
        <router-link class="btn btn-purple" to="/drink"
          ><b-icon-eye-fill class="mr-2"></b-icon-eye-fill>see all</router-link
        >
      </div>
    </div>

    <PrevDK />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Main from "@/components/Main_home.vue";
import Card from "@/components/Card.vue";
import PrevBF from "@/components/PrevBF.vue";
import PrevDK from "@/components/PrevDK.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Nav,
    Main,
    Card,
    PrevBF,
    PrevDK
  },
  data() {
    return {
      breakfast: []
    };
  },
  methods: {
    setProduct(data) {
      this.breakfast = data;
    }
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/breakfast_prev")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("failed: ", error))
  },
};
</script>
