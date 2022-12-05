<script setup lang="ts">
import SwapiService from "@/services/swapi";
import ItemList from "./ItemList.vue";
import WithData from "./WithData.vue";

const swapiService = new SwapiService();
</script>

<template>
  <WithData :get-data="swapiService.getAllStarships" v-slot="{ data }: any">
    <ItemList :items="data" v-slot="{ item }: any">
      {{ item.name }} - ({{ item.model }}, {{ item.manufacturer }})
    </ItemList>
  </WithData>
</template>
