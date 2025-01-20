<template>
  <div class="page-container">
    <CompHeader1 />
    <CompHeader2 />
    <CompHediye />
    <CompFooter />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import CompHeader1 from '../components/compHeader1.vue';
import CompFooter from '../components/compFooter.vue';
import CompHeader2 from '../components/compHeader2.vue';
import CompHediye from '../components/compHediye.vue';

// TypeScript ile bileşenlerin tanımlanması
defineComponent({
  components: {
    CompHeader1,
    CompFooter,
    CompHeader2,
    CompHediye
  }
});
</script>

<style scoped>
.page-container {
  background-color: white;
  padding: 20px;
}
</style>
