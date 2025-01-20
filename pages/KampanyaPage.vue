<template>
  <div class="page-container">
    <CompHeader1 />
    <CompHeader2 />
    <CompCampaign />
    <CompFooter />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import CompHeader1 from '../components/compHeader1.vue';
import CompFooter from '../components/compFooter.vue';
import CompHeader2 from '../components/compHeader2.vue';
import CompCampaign from '../components/compCampaign.vue';

// Tanımlama ve bileşenlerin import edilmesi
defineComponent({
  components: {
    CompHeader1,
    CompFooter,
    CompHeader2,
    CompCampaign
  }
});
</script>

<style scoped>
.page-container {
  background-color: white;
  padding: 20px;
}
</style>
