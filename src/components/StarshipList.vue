<script setup lang="ts">
import { inject } from "vue";
import { useRoute } from "vue-router";
import ItemList from "./ItemList.vue";
import WithData from "./WithData.vue";

const route = useRoute();
const service: any = inject("swapiService");
</script>

<template>
  <WithData
    :get-data="service.getAllStarships"
    v-slot="{ data }: any"
    :key="service"
  >
    <ItemList :items="data" v-slot="{ item }: any">
      <RouterLink
        :to="{ name: 'starships', params: { id: item.id } }"
        class="text-white"
        :class="{ 'text-success': route.params.id === item.id }"
      >
        {{ item.name }} - ({{ item.model }}, {{ item.manufacturer }})
      </RouterLink>
    </ItemList>
  </WithData>
</template>
