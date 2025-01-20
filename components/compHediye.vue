<template>
  <div class="hediyeKart" style="height: 500px">
    <div class="breadcrumbs-container">
      <div class="breadcrumb">
        <a href="https://www.dr.com.tr/" class="breadcrumb-link">Ana Sayfa</a>
      </div>
      <div class="breadcrumb">
        <a href="https://www.dr.com.tr/hediyekarti" class="breadcrumb-link active">Hediye Kartı</a>
      </div>
    </div>

    <div class="image-container">
      <img
        class="image"
        src="https://i.dr.com.tr/themes/prod/DRTheme//assets/dist/images/frontend/gift_v2-banner-v3-2.png"
        alt="Gift Banner"
      />
      <img
        class="image"
        src="https://i.dr.com.tr/themes/prod/DRTheme//assets/dist/images/frontend/ekitap_v2-banner-v3-2.png"
        alt="E-Book Gift Banner"
      />
    </div>

    <div class="button-container">
      <button
        :class="['hediye-btn', activeButton === 1 ? 'active' : '']"
        @click="handleButtonClick(1)"
      >
        Hediye Kartı Seç
      </button>
      <button
        :class="['hediye-btn', activeButton === 2 ? 'active' : '']"
        @click="handleButtonClick(2)"
      >
        E-Kitap Hediye Kartı Seç
      </button>
    </div>

    <div class="button-text">
      <p>
        Sevdiklerinize (www.dr.com.tr’de geçerli ) D&R Hediye Kartı armağan edin,
        D&R’ın <br />kitaptan film ve müziğe, elektronikten oyun ve hobiye kadar pek çok üründen <br />
        beğendiklerini kendileri seçsin.
      </p>
      <p>
        Okuma tutkunları için ideal hediye! Şimdi sevdiklerinize e-Kitap Hediye Kartıyla kitap <br />
        okuma keyfini cep telefonu ve tabletlerinde de yaşatabilirsiniz. İster
        otobüste seyahat <br />
        ederken, ister kahve molasında. Sevdiklerinize e-Kitap Hediye Kartı armağan ederek,<br />
        dilediği e-Kitap’ı okumasını sağlayabilirsiniz.
      </p>
    </div>

    <div class="btn-image-container">
      <template v-if="activeButton === 1">
        <div v-for="index in 6" :key="'container' + index" class="btn-image">
          <img
            :src="'https://i.dr.com.tr/themes/prod/DRTheme//assets/dist/images/frontend/dr-gift-view-blue-2.png'"
            :alt="'Gift ' + index"
            class="btn-image-img"
          />
          <button class="select-btn">Seç</button>
        </div>
      </template>

      <template v-else-if="activeButton === 2">
        <div v-for="index in 4" :key="'container' + index" class="btn-image">
          <img
            :src="'https://i.dr.com.tr/themes/prod/DRTheme//assets/dist/images/frontend/dr-gift-view-2.png'"
            :alt="'E-book Gift ' + index"
            class="btn-image-img"
          />
          <button class="select-btn">Seç</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeButton = ref<number | null>(null);

const handleButtonClick = (buttonNumber: number) => {
  activeButton.value = buttonNumber;
  if (buttonNumber === 1) {
    console.log('Sol');
  } else if (buttonNumber === 2) {
    console.log('Sağ');
  }
};
</script>

<style scoped>
.hediyeKart {
  background-color: #f9faff;
  height: 500px;
  padding: 10px;
}

.breadcrumbs-container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-left: 120px;
}

.breadcrumb-link {
  color: black;
  text-decoration: none;
}

.breadcrumb-link.active {
  font-weight: bold;
}

.image-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.image {
  max-width: 420px;
  max-height: 270px;
}

.button-container {
  display: flex;
  justify-content: space-around;
  margin: 30px 120px;
}

.hediye-btn {
  min-width: 200px;
  min-height: 30px;
  text-transform: capitalize;
  font-weight: 400;
}

.hediye-btn.active {
  background-color: #084793;
  color: white;
}

.hediye-btn:not(.active) {
  background-color: #e20714;
  color: white;
}

.button-text {
  display: flex;
  justify-content: space-around;
  margin: 40px 120px;
}

.button-text p {
  text-align: center;
}

.btn-image-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.btn-image-img {
  max-width: 100px;
  max-height: 100px;
}

.select-btn {
  margin-top: 10px;
  padding: 5px 15px;
  background-color: #084793;
  color: white;
  border: none;
  cursor: pointer;
}

.select-btn:hover {
  background-color: #0056b3;
}
</style>
