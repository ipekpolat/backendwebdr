<template>
  <div class="page-container" style="background-color: white">
    <comp-header1 />
    <comp-header2 />
    <comp-sign />
    <comp-footer />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import CompHeader1 from '../components/compHeader1.vue';
import CompHeader2 from '../components/compHeader2.vue';
import CompSign from '../components/compSign.vue';
import CompFooter from '../components/compFooter.vue';

// TypeScript ile bileşenlerin tanımlanması
defineComponent({
  components: {
    CompHeader1,
    CompHeader2,
    CompSign,
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
