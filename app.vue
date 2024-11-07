<template>
  <div class="page-content">
    <div class="cart-page-header">
      <div class="cart-info-block">
        <img class="cart-icon" src="assets/icons/cart.png" alt="cart">
        <div class="cart-info">
          <span class="cart-info-title">Ваша корзина</span>
          <span class="cart-info-count">{{store.totalCountString}}</span>
          <span class="cart-info-price">{{store.totalPrice}} &#8381;</span>
        </div>

      </div>
      </div>
    <div class="breadcrumbs">
      <div class="bc-item">Главная</div>
      <div class="bc-div"><img class="bc-div-icon" src="assets/icons/bc-div.png" alt="bc-div"></div>
      <div class="bc-item active">Корзина</div>
    </div>

    <div class="cart-row">
      <div class="cart-title-row">
          <h1>Ваша корзина</h1>
        <div class="cart-title-count">{{store.totalCountString}}</div>
        <button class="clear-cart-btn" @click="store.clearCart(store.$state)">Очистить корзину</button>
      </div>
      <div class="cart-items-block">
        <div class="cart-list">
          <cart-item v-for="(item, index) in store.cartItems" :key="index" :item="item" />
        </div>

        <div class="install-block">
          <button class="custom-checkbox" :class="{checked: store.needInstall}" @click="store.invertNeedInstall(store.$state)"></button>
          <img class="install-image" alt="install" src="assets/icons/install_image.png">
          <div class="install-text">
            <div class="install-text-title">Установка</div>
            <div class="install-text-comment">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</div>
          </div>
        </div>
      </div>
      <div class="total-block">
        <div class="total-block-content  bg-gray">
          <div class="total-title">Итого</div>
          <div class="total-info-row">
            <div class="total-info-title">Сумма заказа</div>
            <div class="total-info-value">{{store.totalPrice}} &#8381;</div>
          </div>
          <div class="total-info-row">
            <div class="total-info-title">Количество</div>
            <div class="total-info-value">{{store.totalCount}} шт.</div>
          </div>
          <div class="total-info-row">
            <div class="total-info-title">Установка</div>
            <div class="total-info-value">{{store.needInstall ? 'Да' : 'Нет'}}</div>
          </div>
          <div class="total-info-price">
            <div class="total-info-price-title">Стоимость товаров</div>
            <div class="total-info-price-value">{{store.totalPrice}} &#8381;</div>
          </div>
          <button class="cart-btn order-btn" @click="submit">Оформить заказ</button>
          <button class="cart-btn buy-btn">Купить в 1 клик</button>
        </div>

      </div>
    </div>
    <div class="swiper-row">
      <watched-swiper />
    </div>
  </div>
</template>

<script setup>
import {useCartStore} from "/stores/cartStore.ts";


const store = useCartStore()

const { api } = await useFetch('/api/test')

async function submit(){
  let formData = new FormData();

  formData.append('cart', store.$state);


  await $fetch( '/api/test', {
    method: 'POST',
    body: formData
  } );
  alert('Заказ отправлен')
}

</script>