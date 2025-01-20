import Vue from "vue";
import Vuex from "vuex";
import { db } from "@/firebase/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

Vue.use(Vuex);

// Ürün modelini tanımlayın
interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      user: null as null | object, // Kullanıcı verisi
      products: [] as Product[], // Ürün listesi
    }),
    mutations: {
      setUser(state, user: object) {
        state.user = user;
      },
      setProducts(state, products: Product[]) {
        state.products = products;
      },
      addProduct(state, product: Product) {
        state.products.push(product);
      },
    },
    actions: {
      async fetchProducts({ commit }) {
        try {
          const querySnapshot = await getDocs(collection(db, "products"));
          const products: Product[] = [];
          querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() } as Product);
          });
          commit("setProducts", products);
        } catch (error) {
          console.error("Ürünler yüklenirken hata:", error);
        }
      },
      async addProduct({ commit }, product: Product) {
        try {
          const docRef = await addDoc(collection(db, "products"), product);
          commit("addProduct", { id: docRef.id, ...product });
        } catch (error) {
          console.error("Ürün eklenirken hata:", error);
        }
      },
    },
  });
};

export default createStore;
