<template>
  <div class="products-page">
    <h1>Ürünler</h1>

    <!-- Yeni Ürün Ekleme -->
    <div class="add-product">
      <input v-model="newProduct.name" placeholder="Ürün Adı" />
      <input v-model="newProduct.description" placeholder="Ürün Açıklaması" />
      <input v-model.number="newProduct.price" placeholder="Ürün Fiyatı" type="number" />
      <input v-model="newProduct.image" placeholder="Ürün Resmi URL" />
      <button @click="addNewProduct">Ürün Ekle</button>
    </div>

    <!-- Ürün Listesi -->
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" alt="Ürün Resmi" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>{{ product.price }} TL</p>
        <button @click="addToCart(product)">Sepete Ekle</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from "vuex";

// Ürün modelini tanımlayın
interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default {
  name: "ProductsPage",
  data() {
    return {
      newProduct: {
        name: "",
        description: "",
        price: 0,
        image: "",
      } as Product,
      cart: [] as Product[], // Sepet verisi
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["fetchProducts", "addProduct"]),
    async addNewProduct() {
      if (
        this.newProduct.name &&
        this.newProduct.description &&
        this.newProduct.price > 0 &&
        this.newProduct.image
      ) {
        await this.addProduct(this.newProduct);
        this.newProduct = { name: "", description: "", price: 0, image: "" };
      } else {
        alert("Lütfen tüm alanları doldurun.");
      }
    },
    addToCart(product: Product) {
      this.cart.push(product); // Ürünü sepete ekle
      alert(`${product.name} sepete eklendi!`);
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>


<style scoped>
.products-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.add-product {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-product input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
}

.add-product button {
  background-color: #084793;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-product button:hover {
  background-color: #063c6b;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

.product-card h2 {
  font-size: 18px;
  margin: 10px 0;
}

.product-card p {
  margin: 5px 0;
}

.product-card button {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.product-card button:hover {
  background-color: #218838;
}
</style>
