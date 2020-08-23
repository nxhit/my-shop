<template>
  <div id="app">
    <scroll-fixed-header :fixed.sync="fixed" :threshold="200">
      <app-header></app-header>
      <app-headermobile></app-headermobile>
    </scroll-fixed-header>
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import HeaderMobile from "./components/HeaderMobile.vue";
export default {
  data() {
    return {
      fixed: false
    };
  },
  components: {
    "app-header": Header,
    "app-headermobile": HeaderMobile
  }
};
</script>
<style lang="scss"></style>
