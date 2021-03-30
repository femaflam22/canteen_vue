<template>
  <div class="menu">
    <Nav />
    <h2 class="text-center pt-3 pb-3">Daftar Menu</h2>
    <hr class="mb-3" />
    <div class="input-group flex-nowrap pt-3 pb-3 pl-5 pr-5">
      <input
        v-model = "search"
        type="text"
        class="form-control"
        placeholder="Cari Makanan..."
        aria-label="Search"
        aria-describedby="addon-wrapping"
        @keyup="searchMenu"
      />
      <div class="input-group-prepend">
        <span class="input-group-text" id="addon-wrapping"><b-icon-search></b-icon-search></span>
      </div>
    </div>
    <div class="menus mb-5">
      <div class="cardMenu" v-for="pd in product" :key="pd.id">
        <Card :product="pd" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "Menu",
  components: {
    Nav,
    Card,
  },
  data() {
    return {
      product: [],
      search: '',
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    searchMenu() {
      axios
      .get("http://localhost:3000/all_product?q="+this.search)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("failed: ", error));
    }
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/all_product")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("failed: ", error));
  },
};
</script>

<style>
</style>