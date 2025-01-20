<template>
  <div>
    <h1 class="text">D&R'ı Keşfet</h1>
    <div class="icon-container">
      <div v-for="(icon, index) in icons" :key="index" class="icon-wrapper">
        <img
          :src="icon.image"
          :alt="icon.alt"
          @click="goToLink(icon.link)"
          class="circle-icon"
        />
        <div class="caption">{{ icon.caption }}</div>
      </div>
    </div>

    <footer class="footer">
      <div class="categories">
        <div
          v-for="(categoryGroup, groupIndex) in categoryGroups"
          :key="groupIndex"
          class="category-group"
        >
          <div
            v-for="(category, categoryIndex) in categoryGroup"
            :key="categoryIndex"
            class="label-container"
          >
            <h3 class="footer-text-kategori" @click="goToLink(category.link)">
              {{ category.title }}
            </h3>
            <div
              v-for="(option, optionIndex) in category.options"
              :key="optionIndex"
              class="label-container"
            >
              <p class="footer-text-secenek" @click="goToLink(option.link)">
                {{ option.title }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="communication">
        <div>
          <i class="icon fa-solid fa-shop"></i>
          <span class="custom-text-style" @click="goToLink('/')">
            Mağazalar
          </span>
        </div>
        <div>
          <i class="icon fa-solid fa-headphones-simple"></i>
          <span class="custom-text-style">0850 266 37 37</span>
        </div>
        <div>
          <i class="icon fa-solid fa-box"></i>
          <span class="custom-text-style" @click="goToLink('/')">
            Sipariş Takip
          </span>
        </div>
        <div>
          <i class="icon fa-brands fa-whatsapp"></i>
          <span
            class="custom-text-style"
            @click="goToLink('/')"
          >
            WhatsApp
          </span>
        </div>
      </div>
      <div class="social-icons">
        <i class="fa-brands fa-twitter" @click="goToLink('https://twitter.com/DRDunyasi')"></i>
        <i class="fa-brands fa-facebook" @click="goToLink('https://www.facebook.com/DRdunyasi')"></i>
        <i class="fa-brands fa-instagram" @click="goToLink('https://www.instagram.com/dr_dunyasi')"></i>
        <i class="fa-brands fa-youtube" @click="goToLink('https://www.youtube.com/user/DRDunyasi')"></i>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const icons = ref([
  {
    image: "https://i.dr.com.tr/pimages/Content/Uploads/BannerFiles/dr/0621_d_u_x_148x148_haziran_elektronik_lp.webp",
    alt: "Icon 1",
    caption: "Elektronik",
    link: "/",
  },
  // Diğer ikonlar...
]);

const categoryGroups = ref([
  [
    {
      title: "Kitap",
      link: "/",
      options: [
        { title: "Edebiyat", link: "/" },
        { title: "Çocuk Kitapları", link: "/" },
      ],
    },
    // Diğer kategoriler...
  ],
]);

const goToLink = (link: string) => {
  window.open(link, "_blank");
};
</script>

<style>
.text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.icon-container {
  display: flex;
  gap: 1rem;
}

.circle-icon {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.footer {
  margin-top: 2rem;
  padding: 1rem;
  background: #f5f5f5;
}

.communication,
.social-icons {
  display: flex;
  gap: 1rem;
}

.icon {
  margin-right: 0.5rem;
}

.footer-text-kategori {
  font-weight: bold;
  cursor: pointer;
}

.footer-text-secenek {
  cursor: pointer;
}
</style>
