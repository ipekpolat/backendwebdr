<template>
  <div class="header-container">
    <header>
      <img
        class="header-image"
        src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/D-R_header-dr100120241156.webp"
        alt="Header Fotoğrafı"
      />

      <nav class="top-header-button">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          class="header-btn"
          :class="{ 'special-button': button.label === '+90 (850) 266 3737' }"
          @click="goToLink(button.link)"
        >
          {{ button.label }}
        </button>
      </nav>

      <div class="container">
        <img
          src="https://upload.wikimedia.org/wikipedia/tr/5/52/D%26R_logo.jpg"
          alt="D&R Logo"
          class="logo"
        />

        <div class="search-bar">
          <input
            type="text"
            v-model="filter"
            class="search-input"
            placeholder="Kitap, Elektronik, Oyuncak, Kırtasiyede Ürün, Kategori ve Marka Ara"
          />
          <button class="search-btn">Ara</button>
        </div>

        <button class="header-btn" @click="goToLink('/')">Favori Listem</button>
        <button class="header-btn" @click="goToLink('/KampanyaPage/')">Kampanyalar</button>

        <div class="dropdown">
          <button class="header-btn">Giriş Yap</button>
          <div class="dropdown-content">
            <a @click="goToLink('/SignPage/')">Giriş Yap</a>
            <a @click="goToLink('/registerPage/')">Üye Ol</a>
          </div>
        </div>

        <button class="header-btn" @click="goToLink('/BasketPage')">
          Sepetim
          <span class="cart-icon">🛒</span>
        </button>
        <div v-if="showCartPopup" class="cart-popup">
          <p>Alışveriş Sepetiniz Henüz Boş</p>
          <p>Sepetinize 250,00 TL’lik ürün ekleyin,</p>
          <p>Kargo Ücretsiz kampanyasından yararlanın.</p>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Button {
  label: string;
  link: string;
}

const buttons = ref<Button[]>([
  {
    label: "Yurt Dışından Kitap",
    link: "/",
  },
  { label: "Hediye Kartı", link: "/HediyePage/" },
  { label: "Markalar", link: "/" },
  { label: "Yayın evleri", link: "/" },
  { label: "Yazarlar", link: "/" },
  {
    label: "Mağaza etkinlikleri",
    link: "/",
  },
  { label: "Mağazalar", link: "/" },
  { label: "Sipariş takip", link: "/" },
  { label: "+90 (850) 266 3737", link: "/" },
  {
    label: "whatsapp",
    link: "/",
  },
]);

const filter = ref("");
const showCartPopup = ref(false);

const goToLink = (link: string) => {
  window.open(link, "_blank");
};

const toggleCartPopup = () => {
  showCartPopup.value = !showCartPopup.value;
};
</script>

<style scoped>
.header-container {
  background-color: #fff;
}

.header-image {
  width: 100%;
  height: 60px;
  object-fit: cover;
}

.top-header-button {
  display: flex;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  justify-content: center;
  flex-wrap: wrap;
}

.header-btn {
  background-color: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: black;
}

.header-btn:hover {
  color: blue;
}

.special-button {
  margin-left: 120px;
}

.container {
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
}

.logo {
  height: 60px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-input {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 300px;
}

.search-btn {
  background-color: #084793;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.cart-popup {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
