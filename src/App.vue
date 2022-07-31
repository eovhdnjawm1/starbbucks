<template>
  <div class="w-full">
    <router-view />
  </div>
  <footer data-test="NavMenu" class="container fixed bottom-0">
    <NavMenu />
  </footer>
</template>

<script>
// import DrinkDetails from './pages/DrinkDetails.vue';
import NavMenu from '@/components/Base/NavMenu.vue';

export default {
  components: { NavMenu },
};
</script>

<style>
</style>
