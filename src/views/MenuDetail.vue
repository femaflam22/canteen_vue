<template>
  <div class="menuDetail">
    <Nav />
    <div class="container">
      <div class="row mb-3">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <router-link class="breadcrumb-item text-muted" to="/"
                >Home</router-link
              >
              <router-link class="breadcrumb-item text-muted" to="/menu"
                >Menu</router-link
              >
              <li class="breadcrumb-item active text-info" aria-current="page">
                Data
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <img :src="'/img/' + product.image" alt="" />
        </div>
        <div class="col-md-6 mb-3">
          <h3>{{ product.name }}</h3>
          <hr />
          <p class="font">
            Harga : Rp. <strong>{{ product.price }}</strong>
          </p>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="qty">Jumlah Pesanan</label>
              <input
                v-model="ordered.quantity"
                type="number"
                class="form-control"
                id="qty"
              />
            </div>
            <div class="form-group">
              <label for="type">Jenis Pesanan</label>
              <select class="form-control" id="type" v-model="ordered.type">
                <option>Delivery</option>
                <option>Dine in</option>
              </select>
            </div>
            <div class="form-group">
              <label for="note">Keterangan</label>
              <textarea
                v-model="ordered.note"
                class="form-control"
                id="note"
                rows="2"
                placeholder="Seperti : pedas, manis, dll..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-ordered" @click="order">
              <b-icon-basket></b-icon-basket> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import axios from "axios";

export default {
  name: "MenuDetail",
  components: {
    Nav,
  },
  data() {
    return {
      product: {},
      ordered: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    order() {
      if (this.ordered.quantity) {
        this.ordered.pricePay = (this.product.price * this.ordered.quantity);
        this.ordered.products = this.product;
        axios
          .post("http://localhost:3000/baskets", this.ordered)
          .then(() => {
            this.$router.push({ path: "/basket" })
            this.$toast.success("Pesanan dimasukkan ke keranjang", {
              type: "success",
              position: "top",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Harus disertai jumlah pesanan", {
          type: "error",
          position: "top",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/all_product/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("failed: ", error));
  },
};
</script>

<style>
</style>