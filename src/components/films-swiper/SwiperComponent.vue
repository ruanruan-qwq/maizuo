<template>
    <div class="swiper" :class="name">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  props: {
    page: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    new Swiper('.' + this.name, {
      slidesPerView: this.page,
      spaceBetween: 30,
      freeMode: true
    })
  }
}
</script>
