<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div
        class="carousel-slide"
        v-for="(item, index) in items"
        :key="index"
      >
        <img :src="item.imgSrc" alt="Carousel Image" />
      </div>
    </div>

    <!-- Navigation -->
    <div class="carousel-navigation">
      <button @click="prevSlide" class="nav-btn">‹</button>
      <button @click="nextSlide" class="nav-btn">›</button>
    </div>

    <!-- Indicators -->
    <div class="carousel-indicators">
      <span
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: currentIndex === index }"
        class="indicator"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentIndex = ref(0);

const items = [
  { imgSrc: 'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/anasayfa_1200x390-Aralik-Kitaplarda-Yogun-Kis-Indirimi.webp' },
  { imgSrc: 'https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/2024-ajandalar-anasayfa_1200x390.webp' },
  // Devam eden diğer resimler...
];

const totalSlides = items.length;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + totalSlides) % totalSlides;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 400px;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-navigation {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.nav-btn {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 10px 15px;
  cursor: pointer;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.7);
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.indicator {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.indicator.active {
  background: white;
}
</style>
