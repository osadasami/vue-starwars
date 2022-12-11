<script setup lang="ts">
import { inject } from "vue";
import { useRoute } from "vue-router";
import ItemList from "./ItemList.vue";
import WithData from "./WithData.vue";

const service: any = inject("swapiService");
const route = useRoute();

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
    :get-data="service.getAllPlanets"
    v-slot="{ data }: any"
    :key="service"
  >
    <ItemList
      :items="data"
      v-slot="{ item }: any"
      :on-item-selected="props.onItemSelected"
    >
      <RouterLink
        :to="{ name: 'planets', params: { id: item.id } }"
        class="text-white"
        :class="{ 'text-success': route.params.id === item.id }"
      >
        {{ item.name }} - ({{ item.population }}, {{ item.rotationPeriod }})
      </RouterLink>
    </ItemList>
  </WithData>
</template>
