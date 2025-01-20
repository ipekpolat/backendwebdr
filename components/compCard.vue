<template>
  <div id="app">
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        :class="['tab', { active: currentTab === tab.name }]"
        @click="currentTab = tab.name"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tab-panels">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        v-show="currentTab === tab.name"
        class="tab-panel"
      >
        <div class="products">
          <div
            class="product"
            v-for="(product, index) in products[tab.name]"
            :key="index"
          >
            <img :src="product.img" :alt="product.name" />
            <div class="product-info">
              <p class="product-name">{{ product.name }}</p>
              <p class="product-price">{{ product.price }}</p>
              <button class="add-to-cart">Sepete Ekle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentTab = ref("vitrin");
const tabs = [
  { name: "vitrin", label: "Vitrin" },
  { name: "kitap", label: "Kitap" },
  { name: "elektronik", label: "Elektronik" },
];

const products = {
  vitrin: [
    {
      name: "Bofigo Kamp Sandalyesi Rejisör - Yeşil",
      price: "259,90 TL",
      img: "https://i.dr.com.tr/cache/500x400-0/originals/0002063207003-1.jpg",
    },
    {
      name: "Kaptan Alex De Souza",
      price: "35,40 TL",
      img: "https://i.dr.com.tr/cache/500x400-0/originals/0002085777001-1.jpg",
    },
  ],
  kitap: [
    {
      name: "Zamanın Kızı",
      price: "70,00 TL",
      img: "https://i.dr.com.tr/cache/500x400-0/originals/0002063141001-1.jpg",
    },
    {
      name: "Apple USB C 20W Şarj Adaptörü MHJE3TU/A",
      price: "549,00 TL",
      img: "https://i.dr.com.tr/cache/500x400-0/originals/0001899768001-1.jpg",
    },
  ],
  elektronik: [
    {
      name: "Apple USB C 20W Şarj Adaptörü MHJE3TU/A",
      price: "549,00 TL",
      img: "https://i.dr.com.tr/cache/500x400-0/originals/0002060268001-1.jpg",
    },
  ],
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
}

.tabs {
  display: flex;
  border-bottom: 2px solid #ccc;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.tab.active {
  border-bottom: 2px solid #084793;
  color: #084793;
}

.tab-panels {
  padding: 20px;
}

.tab-panel {
  display: none;
}

.tab-panel[style*="display: block"] {
  display: block;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.product {
  width: 175px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}

.product img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.product-info {
  margin-top: 10px;
}

.product-name {
  font-size: 14px;
  font-weight: bold;
}

.product-price {
  color: #084793;
  margin: 5px 0;
}

.add-to-cart {
  background-color: #084793;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
}

.add-to-cart:hover {
  background-color: #063c6f;
}
</style>
