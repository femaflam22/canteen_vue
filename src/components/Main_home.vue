<template>
  <div class="main-top">
    <div class="text">
      <h2>Jaga Pola Makan-mu, Tingkatkan Kemampuan-mu!</h2>
      <p class="pt-2">
        Selamat datang di situs resmi canteen Fema's Company. Kamu bisa memilih
        menu makanan untuk sarapan ataupun makan siangmu disini. Tetap jaga
        kesehatan untuk kinerja yang lebih maksimal!
      </p>
      <router-link class="btn btn-lg btn-purple" to="/menu"><b-icon-search class="mr-2"></b-icon-search>Cari Menu</router-link>
    </div>
    <div class="img">
      <img
        src="../assets/img/logo.png"
        alt="canteen"
        width="400"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style>
</style>