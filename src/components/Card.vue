<template>
    <div>
      <div class="img mb-3">
        <img :src="require(`@/assets/img/` + product.image)" alt="menu" />
      </div>
      <div class="title-menu text-center">
        <h3>{{product.name}}</h3>
        <p>Harga : {{product.price}}</p>
        <router-link href="#" class="btn btn-order" :to="'/menu/'+product.id"><b-icon-basket></b-icon-basket> Pesan</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: ['product']
};
</script>

<style>
</style>