<script setup lang="ts">
import { inject } from "vue";
import { RouterLink, useRoute } from "vue-router";
import ItemList from "./ItemList.vue";
import WithData from "./WithData.vue";

const route = useRoute();
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
    :get-data="service.getAllPeople"
    v-slot="{ data }: any"
    :key="service"
  >
    <ItemList
      :items="data"
      v-slot="{ item }: any"
      :on-item-selected="props.onItemSelected"
    >
      <RouterLink
        :to="{ name: 'people', params: { id: item.id } }"
        class="text-white"
        :class="{ 'text-success': route.params.id === item.id }"
      >
        {{ item.name }} - ({{ item.gender }}, {{ item.birthYear }})
      </RouterLink>
    </ItemList>
  </WithData>
</template>
