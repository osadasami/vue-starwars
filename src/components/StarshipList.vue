<script setup lang="ts">
import { inject } from "vue";
import ItemList from "./ItemList.vue";
import WithData from "./WithData.vue";

const swapiService: any = inject("swapiService");
</script>

<template>
  <WithData :get-data="swapiService.getAllStarships" v-slot="{ data }: any">
    <ItemList :items="data" v-slot="{ item }: any">
      {{ item.name }} - ({{ item.model }}, {{ item.manufacturer }})
    </ItemList>
  </WithData>
</template>
