<script setup lang="ts">
import { inject } from "vue";
import { RouterLink } from "vue-router";
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
      >
        {{ item.name }} - ({{ item.gender }}, {{ item.birthYear }})
      </RouterLink>
    </ItemList>
  </WithData>
</template>
