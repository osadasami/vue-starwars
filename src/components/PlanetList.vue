<script setup lang="ts">
import { ServiceKey } from "@/types/Symbols";
import { inject } from "vue";
import { useRoute } from "vue-router";
import ItemList from "./ItemList.vue";
import WithData from "./WithData.vue";

const route = useRoute();

const service = inject(ServiceKey);

if (!service) {
  throw new Error(`Could not resolve ${ServiceKey}`);
}
</script>

<template>
  <WithData
    v-if="service"
    :get-data="service.getAllPlanets"
    v-slot="{ data }: any"
    :key="(service as any)"
  >
    <ItemList :items="data" v-slot="{ item }: any">
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
