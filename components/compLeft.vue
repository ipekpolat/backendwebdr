<template>
  <div class="container">
    <div class="breadcrumbs">
      <a href="https://www.dr.com.tr/Kategori/kitap">Kitap</a>
      <span>/</span>
      <a href="https://www.dr.com.tr/Kategori/egitim-ve-sinav-kitaplari">Eğitim ve Sınav Kitapları</a>
      <span>/</span>
      <a href="https://www.dr.com.tr/kategori/universiteye-hazirlik/?Manufacturer[0]=Karek%C3%B6k%20E%C4%9Fitim%20Yay%C4%B1n&Manufacturer[1]=PRF%20Paraf%20Yay%C4%B1nlar%C4%B1&Manufacturer[2]=KR%20Akademi&Page=1">Üniversiteye Hazırlık</a>
    </div>

    <h6>Üniversiteye Hazırlık</h6>
    <small>2015 ürün listelenmektedir.</small>

    <h6>Tüm Kategoriler</h6>
    <div class="category-list">
      <div v-for="(category, index) in category1" :key="index" class="category">
        <div class="category-title">{{ category.category1Name }}</div>
        <div class="sub-category" v-for="(subCategory, subIndex) in category.category1SubTitles" :key="subIndex">
          {{ subCategory }}
        </div>
      </div>
    </div>

    <!-- Dropdown Filters -->
    <div v-for="(filter, filterIndex) in filters" :key="filterIndex" class="dropdown">
      <label>{{ filter.label }}</label>
      <input v-if="filter.type === 'search'" v-model="filter.value" placeholder="Ara" />
      <div v-else class="options">
        <div v-for="(option, optionIndex) in filter.options" :key="optionIndex" class="option">
          <label>
            <input type="checkbox" v-model="option.checked" />
            {{ option.label }}
          </label>
        </div>
      </div>
    </div>

    <!-- Price Range Inputs -->
    <div class="price-range">
      <input v-model="filterMin" placeholder="min" />
      <input v-model="filterMax" placeholder="max" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const category1 = ref([
  {
    category1Name: 'Kitap',
    category1SubTitles: [
      'Eğitim ve Sınav Kitapları',
      'Üniversiteye Hazırlık',
      'TYT Soru Bankası Kitapları',
      'AYT Soru Bankası Kitapları',
      'TYT - AYT Soru Bankası Kitapları',
      'TYT Deneme Sınavı - Yaprak Test',
      'AYT Deneme Sınavı - Yaprak Test',
      'AYT Konu Anlatım Kitapları',
      'TYT - AYT Konu Anlatım Kitapları',
      'TYT Konu Anlatım Kitapları',
      'TYT - AYT Deneme Sınavı Yaprak Test',
      'TYT Çıkmış Sorular',
      'AYT Çıkmış Sorular',
      'MSÜ',
      'TYT - AYT Çıkmış Sorular',
    ],
  },
]);

const filters = ref([
  {
    label: 'Yayınevi',
    type: 'checkbox',
    options: [
      { label: 'Karekök Eğitim Yayın', checked: false },
      { label: 'PRF Paraf Yayınları', checked: false },
      { label: 'KR Akademi', checked: false },
      { label: 'Marka Yayınları', checked: false },
      { label: 'Delta Kültür-Eğitim', checked: false },
      { label: 'Pelikan Yayınları', checked: false },
      { label: 'Yanıt Yayınları', checked: false },
      { label: 'Çap Yayınları', checked: false },
      { label: 'Tonguç Kampüs', checked: false },
      { label: 'Miray Yayınları', checked: false },
    ],
  },
  {
    label: 'Yazar',
    type: 'checkbox',
    options: [
      { label: 'Kolektif', checked: false },
      { label: 'Erkan Demir', checked: false },
      { label: 'Ahmet Sezgin', checked: false },
      { label: 'Fırat Osman Baykal', checked: false },
      { label: 'Barış Kapan', checked: false },
      { label: 'Ethem Hoca', checked: false },
      { label: 'Kemal Coşkun', checked: false },
      { label: 'Kenan Kara', checked: false },
      { label: 'Muhammet Uslu', checked: false },
      { label: 'Sml Hoca', checked: false },
    ],
  },
  {
    label: 'Medya Tipi',
    type: 'checkbox',
    options: [{ label: 'İnce Kapak (267)', checked: false }],
  },
  {
    label: 'Ürün Puanı',
    type: 'checkbox',
    options: [
      { label: '5 Yıldız', checked: false },
      { label: '4 Yıldız', checked: false },
      { label: '3 Yıldız', checked: false },
      { label: '2 Yıldız', checked: false },
      { label: '1 Yıldız', checked: false },
    ],
  },
  {
    label: 'Fiyat',
    type: 'range',
    value: '',
  },
]);

const filterMin = ref('');
const filterMax = ref('');
</script>

<style scoped>
.container {
  padding: 20px;
}

.breadcrumbs {
  font-size: 14px;
}

.category-list {
  display: flex;
  flex-direction: column;
}

.category-title {
  font-weight: bold;
}

.sub-category {
  margin-left: 20px;
}

.dropdown {
  margin-top: 10px;
}

.options {
  display: flex;
  flex-direction: column;
}

.price-range input {
  margin-right: 10px;
}
</style>
