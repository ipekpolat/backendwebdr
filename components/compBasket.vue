<template>
  <div id="shopping-cart">
    <!-- Header -->
    <div class="basket__head">
      <div class="basket__head-menu">
        <button
          class="basket__head-menu-item"
          :class="{ active: activeTab === 'cart' }"
          @click="activeTab = 'cart'"
        >
          Sepetim
        </button>
        <button
          class="basket__head-menu-item"
          :class="{ active: activeTab === 'favorites' }"
          @click="activeTab = 'favorites'"
        >
          Favorilerim
        </button>
      </div>
    </div>

    <!-- Content -->
    <div v-if="activeTab === 'cart'" class="cart-container">
      <div v-if="cartItems.length === 0" class="empty-cart">
        <div class="emptyImg">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" fill="#E20714" fill-opacity="0.04" />
            <path d="M18.75 20.0001V27.5001H21.25V20.0001H18.75Z" fill="#E20714" />
            <path d="M13.75 20.0001V27.5001H16.25V20.0001H13.75Z" fill="#E20714" />
            <path d="M23.75 20.0001V27.5001H26.25V20.0001H23.75Z" fill="#E20714" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.0397 5.62952L19.2103 6.86986L14.5647 14.9997H25.4352L20.7897 6.86986L22.9603 5.62952L28.3148 14.9997H33.75L30 32.4998H10L6.25 14.9997H11.6853L17.0397 5.62952ZM12.021 29.9998L9.34246 17.4998H30.6575L27.979 29.9998H12.021Z"
              fill="#E20714"
            />
          </svg>
        </div>
        <h3>Alışveriş Sepetiniz Boş</h3>
        <p>Biraz gezinmeye ne dersiniz?</p>
        <a href="/" class="basket__empty-state-btn">Hemen Alışverişe Başla</a>
      </div>
      <div v-else>
        <ul>
          <li v-for="item in cartItems" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    </div>

    <div v-else-if="activeTab === 'favorites'" class="favorites-container">
      <div v-if="favorites.length === 0">
        <p>Favorileriniz Boş!</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="item in favorites" :key="item.id">{{ item.name }}</li>
        </ul>
      </div>
    </div>

    <!-- Bank Campaigns -->
    <div class="bank-campaigns">
      <h2>Banka Kampanyaları</h2>
      <div class="banks">
        <div
          v-for="bank in banks"
          :key="bank.name"
          class="installment__box"
        >
          <img :src="`/assets/${bank.logo}`" :alt="bank.name" />
          <p>{{ bank.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { db } from "@/firebase/firebase"; // Firestore bağlantısını içeren dosya
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

interface CartItem {
  id: string;
  name: string;
}

interface FavoriteItem {
  id: string;
  name: string;
}

interface Bank {
  name: string;
  logo: string;
}

export default defineComponent({
  name: "ShoppingCart",
  setup() {
    const activeTab = ref<"cart" | "favorites">("cart");
    const cartItems = ref<CartItem[]>([]);
    const favorites = ref<FavoriteItem[]>([]);
    const banks = ref<Bank[]>([]);
    const userId = "exampleUserId"; // Kullanıcı kimliği (kimlik doğrulama ile alınabilir)

    const fetchCartItems = async () => {
      const docRef = doc(db, "basket", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        cartItems.value = (data.items || []) as CartItem[];
      } else {
        await setDoc(docRef, { userId, items: [] });
      }
    };

    const addToCart = async (item: CartItem) => {
      const docRef = doc(db, "basket", userId);
      await updateDoc(docRef, {
        items: arrayUnion(item),
      });
      cartItems.value.push(item);
    };

    const removeFromCart = async (item: CartItem) => {
      const docRef = doc(db, "basket", userId);
      await updateDoc(docRef, {
        items: arrayRemove(item),
      });
      cartItems.value = cartItems.value.filter((i) => i.id !== item.id);
    };

    const fetchFavorites = () => {
      // Favoriler için veri çekme işlemi
    };

    const fetchBanks = () => {
      // Banka kampanyaları veri çekme işlemi
      banks.value = [
        { name: "Bank A", logo: "bank-a.png" },
        { name: "Bank B", logo: "bank-b.png" },
      ];
    };

    onMounted(() => {
      fetchCartItems();
      fetchFavorites();
      fetchBanks();
    });

    return {
      activeTab,
      cartItems,
      favorites,
      banks,
      addToCart,
      removeFromCart,
    };
  },
});
</script>

<style scoped>
.basket__head-menu {
  display: flex;
  gap: 10px;
}
.basket__head-menu-item {
  padding: 10px 20px;
  cursor: pointer;
}
.basket__head-menu-item.active {
  background-color: #e20714;
  color: white;
}
.empty-cart {
  text-align: center;
}
.banks {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.installment__box {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  width: 150px;
}
</style>
