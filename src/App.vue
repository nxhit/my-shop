<template>
  <div id="app">
    <scrollFixedHeader :fixed.sync="fixed" :threshold="200">
      <app-header></app-header>
      <app-headermobile></app-headermobile>
    </scrollFixedHeader>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import HeaderMobile from "./components/HeaderMobile.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      fixed: false
    };
  },
  components: {
    "app-header": Header,
    "app-headermobile": HeaderMobile,
    "app-footer": Footer
  }
};
</script>
<style lang="scss"></style>
