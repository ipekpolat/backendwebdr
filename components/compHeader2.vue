<template>
  <div class="category-container">
    <!-- Kategoriler Başlık Grubu -->
    <div class="category-header">
      <button
        v-for="category in categories"
        :key="category.label"
        class="category-btn"
        @click="selectCategory(category)"
      >
        {{ category.label }}
      </button>
    </div>

    <!-- Seçilen Kategori İçeriği -->
    <div v-if="selectedCategory" class="category-content">
      <div v-for="(section, index) in selectedCategory.sections" :key="index" class="category-section">
        <hr v-if="index > 0" />
        <div class="text-content">
          <!-- Resimler -->
          <div v-if="section.images" class="image-group">
            <img
              v-for="(image, imgIndex) in section.images"
              :key="imgIndex"
              :src="image"
              alt="Category Image"
              class="category-image"
            />
          </div>
          <!-- Metinler -->
          <div v-if="section.items" class="items-group">
            <div
              v-for="item in section.items"
              :key="typeof item === 'object' ? item.label : item"
              class="category-item"
            >
              <router-link v-if="typeof item === 'object'" :to="item.link">
                {{ item.label }}
              </router-link>
              <span v-else>{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Category {
  label: string;
  sections: {
    items?: ({ label: string; link: string } | string)[];
    images?: string[];
  }[];
}

const categories = ref<Category[]>([
  {
    label: "Kitaplar",
    sections: [
      {
        items: [
          "Yeni Çıkanlar",
          "Çok Satanlar",
          "Edebiyat",
          "Roman",
          "Kişisel Gelişim",
          "Çocuk ve Gençlik",
        ],
      },
      {
        images: [
          "https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/Sizin-Icin-Sectiklerimiz340x120-copy.jpg",
          "https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/ayin-yayinevi-kronik-340x120.webp",
        ],
      },
    ],
  },
  {
    label: "Elektronik",
    sections: [
      {
        items: [
          { label: "Elektronik 1", link: "/" },
          { label: "Elektronik 2", link: "/" },
        ],
      },
    ],
  },
]);

const selectedCategory = ref<Category | null>(null);

function selectCategory(category: Category) {
  selectedCategory.value = category;
}
</script>

<style scoped>
.category-container {
  font-family: Arial, sans-serif;
}

.category-header {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.category-btn {
  background-color: #084793;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
}

.category-btn:hover {
  background-color: #0661a6;
}

.category-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.category-section {
  display: flex;
  flex-direction: column;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.category-image {
  width: 150px;
  height: auto;
  border-radius: 4px;
}

.items-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.category-item {
  font-size: 14px;
}

.category-item a {
  color: #084793;
  text-decoration: none;
}

.category-item a:hover {
  text-decoration: underline;
}
</style>
