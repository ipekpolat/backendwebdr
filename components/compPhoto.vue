<template>
  <div>
  <div class="toolbar" style="margin-bottom: 20px; border-radius: 5px">
    <div class="toolbar-content">
      <div class="label-container">
        <button @click="goToLink0('link')" class="btn-flat">
          iPhone 14 Pro 512 GB Siyah 69.999 TL!
        </button>
      </div>
      <div class="spacer"></div>
      <button @click="goToLink0('link')" class="btn-flat"> > </button>
    </div>
  </div>

  <div class="image-container-ust">
    <img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/Destek-yayinlari-secili-felsefe-biyografi-kitaplarinda-ozel-fiyatlar_398x195.jpg"
      alt="Image 1"
      @click="goToLink('image1')"
      class="image"
    />
    <img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/Turkuvaz-1-Alana-1-Bedava-Kampanyasi-398x195.jpg"
      alt="Image 2"
      @click="goToLink('image2')"
      class="image"
    />
    <img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/fddfdfsds3lu_398x195-3-.jpg"
      alt="Image 3"
      @click="goToLink('image3')"
      class="image"
    />
  </div>

  <div class="image-container-alt">
    <img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/lego-eylul-revizeli-3lu_398x195.webp"
      alt="Image 4"
      @click="goToLink('image4')"
      class="image"
    />
    <img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/prestij-kalem-3lu_banner_398x195.jpg"
      alt="Image 5"
      @click="goToLink('image5')"
      class="image"
    />
    <img
      src="https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/vatka-dr-aralik-398x195.webp"
      alt="Image 6"
      @click="goToLink('image6')"
      class="image"
    />
  </div>
</div>
</template>

<script setup lang="ts">
interface RowLink {
  [key: string]: string;
}

const rowLink: RowLink = {
  link: 'https://www.dr.com.tr/kataloglar_/apple-iphone/9132',
};

const imageLinks: Record<string, string> = {
  image1:
    'https://www.dr.com.tr/kataloglar_/destek-yayinlari-felsefe-ve-biyografi-kitaplari/9019?SortOrder=1&SortType=0&Page=1',
  image2:
    'https://www.dr.com.tr/kataloglar_/1-alana-1-bedava-kampanyasi/8921?SortOrder=1&SortType=0&Page=1',
  image3:
    'https://www.dr.com.tr/kataloglar_/romanlari-simdi-orijinal-dillerinde-kesfet/8941?Page=1&ShowNotForSale=true&SortOrder=1&SortType=0',
  image4: 'https://www.dr.com.tr/kataloglar_/lego-ng/6509',
  image5: 'https://www.dr.com.tr/kataloglar_/prestij-kalemler/7956',
  image6: 'https://www.dr.com.tr/marka/vatkalimon/m=10011168',
};

const goToLink0 = (link: string) => {
  window.location.href = rowLink[link];
};

const goToLink = (imageKey: string) => {
  window.location.href = imageLinks[imageKey];
};
</script>

<style scoped>
.toolbar {
  background-color: #fa0000;
  color: #ffffff;
  font-size: 14px;
  height: 50px;
  padding: 5px 10px 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toolbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.label-container {
  margin-left: 39%;
}

.spacer {
  flex-grow: 1;
}

.btn-flat {
  background: none;
  border: none;
  color: inherit;
  font-size: inherit;
  cursor: pointer;
}

.image-container-ust,
.image-container-alt {
  display: flex;
  flex-wrap: wrap;
}

.image {
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  max-width: 398px;
  width: 100%;
}
</style>
