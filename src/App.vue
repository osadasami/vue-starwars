<script setup lang="ts">
import Header from "@/components/Header.vue";
import { provide, ref, type Ref } from "vue";
import SwapiService from "./services/swapi";
import SwapiServiceDammy from "./services/swapi-dummy";

const service: Ref<SwapiService | SwapiServiceDammy> = ref(new SwapiService());

provide("swapiService", service);

function changeService() {
  const NextService =
    service.value instanceof SwapiServiceDammy
      ? SwapiService
      : SwapiServiceDammy;

  service.value = new NextService();

  console.log(`switch to ${NextService.name}`);
}
</script>

<template>
  <div>
    <Header :on-click="changeService" />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
