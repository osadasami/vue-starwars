<script setup lang="ts">
import RandomPlanet from "@/components/RandomPlanet.vue";
</script>

<template>
  <RandomPlanet :update-interval="10000" />

  <div class="row mb2">
    <div class="col-md-6"></div>
    <div class="col-md-6"></div>
  </div>
</template>
