<template>
<div class="container">
  <b-navbar toggleable="lg" variant="faded" type="light">
    <b-navbar-brand href="#"><b-icon-building class="mr-2"></b-icon-building>Fema's Company</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link class="nav-link" to="/">Home</router-link></b-nav-item>
        <b-nav-item><router-link class="nav-link" to="/menu">Menu</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item right>
          <!-- Using 'button-content' slot -->
          <router-link class="nav-link" to="/basket"
              >Keranjang<b-icon-basket class="ml-1"></b-icon-basket>
              <span class="badge badge-secondary ml-2">{{updateOrder ? updateOrder.length : qty_order.length }}</span></router-link
            >
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Nav",
  props: ['updateOrder'],
  data() {
    return{
      qty_order: []
    }
  },
  methods: {
    setQty(data){
      this.qty_order = data
    } 
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/baskets")
      .then((response) => this.setQty(response.data))
      .catch((error) => console.log("failed: ", error))
  },
};
</script>

<style>
</style>