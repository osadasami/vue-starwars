<script setup lang="ts">
import { inject } from "vue";
import ItemList from "./ItemList.vue";
import WithData from "./WithData.vue";

const service: any = inject("swapiService");
</script>

<template>
  <WithData
    :get-data="service.getAllPlanets"
    v-slot="{ data }: any"
    :key="service"
  >
    <ItemList :items="data" v-slot="{ item }: any">
      {{ item.name }} - ({{ item.population }}, {{ item.rotationPeriod }})
    </ItemList>
  </WithData>
</template>
