<script setup>
import GoTop from './components/GoTop.vue';
import Loader from './components/Loader.vue';
import Toast from './components/Toast.vue';
import { useCommonStore } from '@/stores/useCommonStore';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const commonStore = useCommonStore();
const route = useRoute();

const navbarClass = computed(() => (route.path === '/' ? '' : 'border-bottom'));
</script>

<template>
  <Loader v-show="commonStore.isLoading" />
  <Toast />
  <NavBar :root-class="navbarClass" />
  <router-view v-slot="{ Component }">
    <!-- <keep-alive> -->
    <component :is="Component" />
    <!-- </keep-alive> -->
  </router-view>

  <GoTop />
</template>

<style lang="scss" scoped></style>
