<template>
  <div class="swiper-block">
    <div class="swiper-content">
      <Swiper
          :slides-per-view="4"
          :loop="true"
          :effect="'creative'"
          :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
      >
        <swiper-title :slides-count="store.watchedItems.length" />
        <SwiperSlide v-for="(slide, index) in store.watchedItems" :key="(index)">
          <div class="slide-card">
            <div class="slide-image">
              <img class="sl-img" :src="`/goods/${slide.image}.png`" :alt="slide.shortName">
            </div>
            <div class="slide-title">{{slide.shortName}}</div>
            <div class="slide-text">{{slide.cartText}}</div>
            <div class="slide-ru-price">{{slide.minPrice}} &#8381; - {{slide.maxPrice}} &#8381;</div>
            <div class="slide-eur-price">{{slide.minPrice / store.euroRate}} &#8364; - {{slide.maxPrice / store.euroRate}} &#8364;</div>
            <button class="slide-btn">Подробнее</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>



  </div>

</template>
<script setup>

import {useWatchedStore} from "/stores/watchedStore";

const store = useWatchedStore()
const swiper = useSwiper()
//import { register } from 'swiper/element/bundle';
//register();




</script>
<script>
export default {
  name: "WatchedSwiper",

}
</script>

<style>
.swiper-block {
  width: 100%;
  margin-top: 95px;
}
.swiper {
  display: flex;
  flex-direction: column-reverse;

}
.swiper-content {
  width: 100%;
}
.swiper-slide {
  padding-left: 20px;
}
.slide-card {
  background-color: #F6F8FA;
  padding: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 560px;
}
.slide-image {
  display: flex;
  width: 250px;
  height: 250px;
  justify-content: center;
  margin: 25px auto;
}
.sl-img {
  width: 100%;
}
.slide-title {
  font-size: 22px;
  line-height: 26px;
  font-weight: 700;
  margin-bottom: 10px;
}
.slide-text {
  font-size: 14px;
  line-height: 20px;
}
.slide-ru-price {
  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
  margin-top: auto;
}
.slide-eur-price {
  color: #797B86;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
}
.slide-btn {
  border: none;
  background-color: #0069B4;
  color: white;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  height: 52px;
  border-radius: 4px;
}
</style>