<template>
  <div class="page-container" style="background-color: white">
    <comp-header1 />
    <comp-header2 />
    <comp-basket />
    <comp-footer />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import CompHeader1 from '../components/compHeader1.vue';
import CompHeader2 from '../components/compHeader2.vue';
import CompBasket from '../components/compBasket.vue';
import CompFooter from '../components/compFooter.vue';

// TypeScript ile bileşenlerin tanımlanması
defineComponent({
  components: {
    CompHeader1,
    CompHeader2,
    CompBasket,
    CompFooter
  }
});
</script>

<style scoped>
.page-container {
  background-color: white;
  padding: 20px;
}
</style>
