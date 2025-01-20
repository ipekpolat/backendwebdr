import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/anasayfa", component: () => import("@/pages/index.vue") },
  ],
});

export default router;
