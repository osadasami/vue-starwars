<script setup lang="ts">
import { inject } from "vue";
import ItemList from "./ItemList.vue";
import WithData from "./WithData.vue";

const service: any = inject("swapiService");
const props = withDefaults(
  defineProps<{
    onItemSelected: (item: any) => void;
  }>(),
  {
    onItemSelected: () => {},
  }
);
</script>

<template>
  <WithData
    :get-data="service.getAllStarships"
    v-slot="{ data }: any"
    :key="service"
  >
    <ItemList
      :items="data"
      v-slot="{ item }: any"
      :on-item-selected="props.onItemSelected"
    >
      {{ item.name }} - ({{ item.model }}, {{ item.manufacturer }})
    </ItemList>
  </WithData>
</template>
