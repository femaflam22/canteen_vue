<template>
  <div class="prevBF">
    <div class="menus mb-5">
      <div class="cardMenu" v-for="lc in lunch" :key="lc.id">
        <Card :product="lc" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "PrevBF",
  components: {
    Card,
  },
  data() {
    return {
      lunch: [],
    };
  },
  methods: {
    setProduct(data) {
      this.lunch = data;
    },
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/lunch_prev")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("failed: ", error));
  },
};
</script>

<style>
</style>