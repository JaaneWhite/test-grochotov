<template>
  <div class="swiper-title-block">
    <div class="swiper-title">Просмотренные товары</div>
    <div class="swiper-buttons">
      <button class="swiper-btn prev" @click="swiper.slidePrev(); store.currentSlideDown(store.$state)"></button>
      <div class="count-block">
        <span class="current">{{store.currentSlide}}</span>
        <span class="all"> / {{store.watchedItems.length}}</span>
      </div>
      <button class="swiper-btn next" @click="swiper.slideNext(); store.currentSlideUp(store.$state)"></button>

    </div>
  </div>

</template>

<script setup lang="ts">
const swiper = useSwiper()
import {useWatchedStore} from "~/stores/watchedStore";

const store = useWatchedStore()
</script>

<script lang="ts">
export default {
  name: "SwiperTitle",
  props: {
    slidesCount: {
      type: Number
    }
  },
  data() {
    return {
      currentSlide: 1
    }
  },



}
</script>

<style scoped>
.swiper-title-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 47px;

}
.swiper-title {
  font-size: 30px;
  line-height: 36px;
  font-weight: 600;
  margin-bottom: 10px;
}
.swiper-buttons {
  display: flex;
  margin-left: auto;
  margin-right: 0;
}
.swiper-btn {
  border: none;
  background-color: #90A2B5;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-size: 8px;
  background-position: center;
  background-repeat: no-repeat;

}
.prev {
  background-image: url("/assets/icons/arrow_left.svg");

}
.next {
  background-image: url("/assets/icons/arrow_right.svg");

}
.count-block {
  margin: auto 20px;
}
.current {
  font-size: 24px;
  line-height: 36px;
}
.all {
  font-size: 18px;
  line-height: 27px;
  color: #797B86;
}
</style>