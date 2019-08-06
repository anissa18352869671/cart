<template>
  <div class="product">
    <router-link :to="'/product/'+info.id" class="product-main">
      <img :src="info.image" />
      <h4>{{info.name}}</h4>
      <div class="product-color" :style="{background:colors[info]}"></div>
      <div class="product-cost">￥{{info.cost}}</div>
      <div class="product-add-cart" @click.prevent="handleCart">加入购物车</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data() {
    return {
      colors: {
        白色: "#ffffff",
        金色: "#dac272",
        蓝色: "#233472",
        红色: "#f2352e"
      }
    };
  },
  methods: {
    handleCart() {
      this.$store.commit("addCart", this.info.id);
    }
  }
};
</script>