<template>
  <div class="page-container" style="background-color: white">
    <comp-header1 />
    <comp-register />
    <comp-footer />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import CompHeader1 from '../components/compHeader1.vue';
import CompRegister from '../components/compRegister.vue';
import CompFooter from '../components/compFooter.vue';

// TypeScript ile bileşenlerin tanımlanması
defineComponent({
  components: {
    CompHeader1,
    CompRegister,
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
