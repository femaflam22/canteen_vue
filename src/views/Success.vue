<template>
  <div class="success">
      <Nav />
      <div class="container">
          <div class="row justify-content-center mt-5 mb-5">
              <div class="col text-center">
                  <img src="../assets/img/order1.png" alt="success" width="300">
                  <h2>Berhasil!!</h2>
                  <h5>Pesanan berhasil dipesan.</h5>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
    name: 'Success',
    components: {
        Nav,
    }
}
</script>

<style>

</style>