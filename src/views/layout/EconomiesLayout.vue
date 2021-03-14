<template>
  <div class="min-h-screen">
    <economies-header />
    <div class="bg-gray-100">
      <div class="max-w-6xl m-auto py-16">
        <transition name="fade" class="ease-in duration-500">
          <router-view />
        </transition>
      </div>
    </div>
    <economies-footer />
  </div>
</template>

<script>
export default {
  name: "DossierLayout",
  components: {
    EconomiesHeader: () => import("Views/layout/EconomiesHeader.vue"),
    EconomiesFooter: () => import("Views/layout/EconomiesFooter.vue"),
  },
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
    };
  },
};
</script>
