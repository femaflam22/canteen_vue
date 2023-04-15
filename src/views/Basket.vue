<template>
  <div class="basket">
    <Nav :updateOrder="basket" />
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
        <div class="col">
          <h2 class="mb-3">Keranjang</h2>
          <table class="table table-bordered">
            <thead class="thead-light">
              <tr class="text-center">
                <th scope="col">#</th>
                <th scope="col">Foto</th>
                <th scope="col">Menu</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Harga</th>
                <th scope="col">Total Harga</th>
                <th scope="col">Hapus</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(bk, index) in basket" :key="bk.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>
                  <img
                    :src="require(`@/assets/img/` + bk.products.image)"
                    alt="menu"
                    width="200"
                  />
                </td>
                <td>{{ bk.products.name }}</td>
                <td class="text-center"> {{ bk.quantity }}</td>
                <td>{{ bk.note ? bk.note : "-" }}</td>
                <td align="right">{{ bk.products.price }}</td>
                <td align="right">{{ bk.products.price * bk.quantity }}</td>
                <td align="center" class="text-danger">
                  <b-icon-trash @click="deleteOrder(bk.id)"></b-icon-trash>
                </td>
              </tr>

              <tr>
                <td colspan="3" align="right">
                  <strong
                    ><router-link class="btn btn-info" to="/menu"
                      >tambah pesanan</router-link
                    ></strong
                  >
                </td>
                <td colspan="3" align="right">
                  <strong>Total Bayar : </strong>
                </td>
                <td colspan="2" align="right">
                  <strong>Rp. {{ amountPaid }}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="name">Nama Lengkap : </label>
              <input
                v-model="checkout.name"
                type="text"
                class="form-control"
                id="name"
              />
            </div>
            <div class="form-group">
              <label for="room">Ruangan : </label>
              <input
                v-model="checkout.room"
                type="text"
                class="form-control"
                id="room"
              />
            </div>
            <button type="submit" class="btn btn-ordered" @click="buy">
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
  name: "Basket",
  components: {
    Nav,
  },
  data() {
    return {
      basket: [],
      checkout: {},
    };
  },
  methods: {
    setBasket(data) {
      this.basket = data;
    },
    deleteOrder(id) {
      axios
        .delete("http://localhost:3000/baskets/" + id)
        .then(() => {
          this.$toast.warning("Pesanan di hapus", {
            type: "warning",
            position: "top",
            duration: 3000,
            dismissible: true,
          });
          axios
            .get("http://localhost:3000/baskets")
            .then((response) => this.setBasket(response.data))
            .catch((error) => console.log("failed: ", error));
        })
        .catch((err) => console.log(err));
    },
    buy(){
      if(this.checkout.name && this.checkout.room){
        this.checkout.basket = this.basket;
        axios
          .post("http://localhost:3000/order", this.checkout)
          .then(() => {
            this.basket.map(function (item) {
              return axios
              .delete("http://localhost:3000/baskets/" + item.id)
              .catch((error) => console.log("failed: ", error));
            });

            this.$router.push({ path: "/success" })
            this.$toast.success("Terima kasih sudah memesan", {
              type: "success",
              position: "top",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      }else {
        this.$toast.error("Tolong lengkapi form terlebih dahulu", {
          type: "error",
          position: "top",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  computed: {
    amountPaid() {
      return this.basket.reduce(function (items, data) {
        return items + data.pricePay;
      }, 0);
    },
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/baskets")
      .then((response) => this.setBasket(response.data))
      .catch((error) => console.log("failed: ", error));
  },
};
</script>

<style>
</style>