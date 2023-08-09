<script setup>
import Main from './components/main.vue'
import SideMenu from './components/sideMenu.vue';
import Library from './components/library.vue';
</script>

<template>
  <div class="container m-0 p-0 flex ">
    <SideMenu/>
    <Library/>
  </div>
</template>

<style>
@import "./assets/css/style.css";
</style>
