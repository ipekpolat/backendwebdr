<template>
  <div class="campaign-page-frame mt-20">
    <div class="campaign-header text-center" style="margin-top: 20px">
      <h1 class="baslik">
        <span id="campaignTitleName">D&R Güncel Kampanyalar</span>
      </h1>
    </div>

    <div
      class="campaign-page-filter"
      style="text-align: left; padding-left: 145px; padding-top: 15px"
    >
      <button
        v-for="(category, index) in categories"
        :key="index"
        class="kampanya-btn"
        :class="{ active: activeCategory === category.id }"
        @click="setActiveCategory(category.id)"
      >
        {{ category.name }}
      </button>
    </div>

    <div class="campaign-img-list" style="margin-left: 105px; margin-top: 30px">
      <div class="row">
        <div
          v-for="(item, index) in displayedItems"
          :key="index"
          class="col-md-6"
        >
          <figure class="campaign-item">
            <a :title="item.title" :href="item.link" target="_blank">
              <img
                class="campaign-image"
                :src="item.imageSrc"
                :alt="item.alt"
              />
            </a>
          </figure>
        </div>
      </div>
    </div>

    <div class="pagination-container">
      <button
        v-for="page in maxPages"
        :key="page"
        :class="{ active: currentPage === page }"
        class="pagination-btn"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Category {
  id: number;
  name: string;
}

const activeCategory = ref(0);
const currentPage = ref(1);
const itemsPerPage = 4;

const categories: Category[] = [
  { id: 0, name: "Tüm Kategoriler" },
  { id: 4645, name: "Genel" },
  { id: 4646, name: "Kitap" },
  { id: 4650, name: "Müzik, Hediyelik" },
  { id: 4652, name: "Hobi & Oyuncak" },
  { id: 6448, name: "Kırtasiye" },
  { id: 8120, name: "Spor & Outdoor" },
  { id: 8121, name: "Anne Bebek" },
];

const campaignItems = [
  {
    title: "Turkuvaz Kitap 1 Alana 1 Bedava!",
    link: "/",
    imageSrc:
      "https://i.dr.com.tr/pimages/Content/Uploads/CampaignBanners/dr/Turkuvaz-1-Alana-1-Bedava-Kampanyasi-_950x360.jpg",
    alt: "",
  },
  {
    title: "Alfa Yayın Grubu Hediye Kitap Kampanyası-Antika Titanik",
    link: "/",
    imageSrc:
      "https://i.dr.com.tr/pimages/Content/Uploads/CampaignBanners/dr/sdfsfdsnfdkategori_950x360.jpg",
    alt: "",
  },
  // Diğer kampanyalar
];

const maxPages = computed(() =>
  Math.ceil(campaignItems.length / itemsPerPage)
);

const displayedItems = computed(() =>
  campaignItems.slice(
    (currentPage.value - 1) * itemsPerPage,
    currentPage.value * itemsPerPage
  )
);

const setActiveCategory = (categoryId: number) => {
  activeCategory.value = categoryId;
};

const changePage = (pageNumber: number) => {
  currentPage.value = pageNumber;
};
</script>

<style scoped>
.campaign-page-frame {
  padding-left: 20px;
  padding-right: 20px;
}

.baslik {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  color: #212529;
  text-align: center;
}

.kampanya-btn {
  background-color: white;
  color: #212529;
  height: 36px;
  text-align: right;
  border: 1px solid #e0e0e0;
  text-transform: capitalize;
  font-weight: 400;
  cursor: pointer;
}

.kampanya-btn.active {
  background-color: #007bff;
  color: white;
}

.campaign-image {
  height: 250px;
  width: 500px;
  border-radius: 10px;
  margin-bottom: 0;
}

.campaign-item:hover .campaign-image {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.pagination-container {
  justify-content: center;
  display: flex;
  margin-top: 20px;
}

.pagination-btn {
  background-color: white;
  border: 1px solid #e0e0e0;
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.pagination-btn.active {
  background-color: #007bff;
  color: white;
}
</style>
