<script setup lang="ts">
import SwapiService from "@/services/swapi";
import ItemList from "./ItemList.vue";
import WithData from "./WithData.vue";

const swapiService = new SwapiService();
</script>

<template>
  <WithData :get-data="swapiService.getAllPlanets" v-slot="{ data }: any">
    <ItemList :items="data" v-slot="{ item }: any">
      {{ item.name }} - ({{ item.population }}, {{ item.rotationPeriod }})
    </ItemList>
  </WithData>
</template>
