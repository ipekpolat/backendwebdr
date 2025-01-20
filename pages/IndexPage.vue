<template>
  <div class="page-container">
    <CompHeader1 />
    <CompHeader2 />

    <div class="carousel-container">
      <CompCarousel />
    </div>

    <div class="photo-container">
      <CompPhoto />
    </div>

    <div class="card-container">
      <CompCard />
    </div>

    <div class="photo-container">
      <CompPhoto />
    </div>

    <CompFooter />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import CompHeader1 from '../components/compHeader1.vue';
import CompCarousel from '../components/compCarousel.vue';
import CompFooter from '../components/compFooter.vue';
import CompHeader2 from '../components/compHeader2.vue';
import CompPhoto from '../components/compPhoto.vue';
import CompCard from '../components/compCard.vue';

// TypeScript ile bileşenlerin tanımlanması
defineComponent({
  components: {
    CompHeader1,
    CompCarousel,
    CompFooter,
    CompHeader2,
    CompPhoto,
    CompCard
  }
});
</script>

<style scoped>
.page-container {
  background-color: white;
  padding: 20px;
}

.carousel-container,
.photo-container,
.card-container {
  margin-left: 135px;
  margin-right: 135px;
}

.carousel-container,
.photo-container {
  margin-left: 150px;
  margin-right: 150px;
}

.card-container {
  margin-left: 135px;
  margin-right: 135px;
}
</style>
