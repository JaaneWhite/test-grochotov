<template>
<div class="cart-item">
  <div class="cart-item-image" :class="item.image"></div>
  <div class="cart-item-info">
    <div class="cart-item-title">{{item.name}}</div>
    <div class="cart-item-desc">{{item.cartText}}</div>
    <div class="cart-item-art">{{item.articul}}</div>
  </div>
  <div class="cart-item-count">
    <div class="count-block">
      <button class="count-btn down" @click="store.decItemCount(store.$state, item.id)">-</button>
      <div class="count-value">{{item.count}}</div>
      <button class="count-btn up" @click="store.addItemCount(store.$state, item.id)">+</button>
    </div>
    <div class="price-block" v-if="item.count > 1"> {{`${item.price} &#8381;/шт.`}} </div>
  </div>
  <div class="cart-item-price">
    {{`${item.price * item.count} &#8381;`}}
  </div>
  <div class="cart-item-del">
    <button class="del-btn" @click="store.deleteItem(store.$state, item.id)"></button>
  </div>
</div>
</template>

<script setup>
import {useCartStore} from "/stores/cartStore.ts";

const store = useCartStore()

</script>
<script>

export default {
  name: "CartItem",
  props: {
    item: {
      type: Object
    }
  },
}
</script>

<style scoped>
.cart-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 23px;

}

.cart-item-image {
  width: 100px;
  height: 100px;
  background-size: 100px;
  background-repeat: no-repeat;
}
.cart-item-image.rectangle_72 {
  background-image: url("/assets/goods/rectangle_72.png");

}
.cart-item-image.rectangle_74 {
  background-image: url("/assets/goods/rectangle_74.png");
}
.cart-item-image.rectangle_76 {
  background-image: url("/assets/goods/rectangle_76.png");
}
.cart-item-image.rectangle_78 {
  background-image: url("/assets/goods/rectangle_78.png");
}
.cart-item-info{
  display: flex;
  flex-direction: column;
  width: 40%;
  padding-left: 30px;
  padding-right: 30px;
}
.cart-item-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 6px;
}
.cart-item-desc {
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 6px;
}
.cart-item-art {
  font-size: 14px;
  line-height: 21px;
  color: #797B86;
  margin-bottom: 6px;

}

.cart-item-count {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.count-block {
  display: flex;
  flex-direction: row;

}

.count-btn {
  width: 34px;
  height: 34px;
  background-color: #F6F8FA;
  border: none;
}
.count-btn.down {
  border-radius: 4px 0 0 4px;
}
.count-btn.up {
  border-radius: 0 4px 0 4px;
}
.count-value {
  width: 34px;
  height: 34px;
  background-color: #F6F8FA;
  margin-left: 2px;
  margin-right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.price-block {
  font-size: 12px;
  line-height: 18px;
}
.cart-item-price {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

}
.cart-item-del {
  width: 12px;
}
.del-btn {
  width: 12px;
  height: 12px;
  border: none;
  background-color: transparent;
  background-image: url("/assets/icons/cross.png");
  background-size: 12px;
  background-position: center;
  background-repeat: no-repeat;
}

</style>