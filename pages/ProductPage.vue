<template>
  <div class="page-container" style="background-color: white">
    <CompProduct/>

  </div>
</template>

<script lang="ts" setup>

import { defineComponent } from 'vue';
import CompProduct from '../components/compProduct.vue';

// TypeScript ile bileşenlerin tanımlanması
defineComponent({
  components: {
    CompProduct,
  }
});
</script>

<style scoped>
.page-container {
  background-color: white;
  padding: 20px;
}
</style>
