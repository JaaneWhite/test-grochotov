<template>
<div class="cart-item">
  <div class="cart-item-image" :class="item.image"></div>
  <div class="cart-item-info">
    <div class="cart-item-title">{{item.name}}</div>
    <div class="cart-item-desc">{{item.description}}</div>
    <div class="cart-item-art">{{item.articul}}</div>
  </div>
  <div class="cart-item-count">
    <div class="count-block">
      <button class="count-btn"></button>
      <div class="count-value">{{item.count}}</div>
      <button class="count-btn"></button>
    </div>
    <div class="price-block" v-if="item.count > 1"> {{`${item.price} &#8381;/шт.`}} </div>
  </div>
  <div class="cart-item-price">
    {{`${item.price * item.count} &#8381;`}}
  </div>
</div>
</template>

<script>

export default {
  name: "CartItem",
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>
.cart-item {
  width: 100%;
}
</style>