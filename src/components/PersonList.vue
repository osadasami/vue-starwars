<script setup lang="ts">
import type Person from "@/types/Person";
import { ServiceKey } from "@/types/Symbols";
import { inject } from "vue";
import { RouterLink, useRoute } from "vue-router";
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
    :get-data="service.getAllPeople"
    v-slot="{ data }: { data: Person }"
    :key="service.toString()"
  >
    <ItemList :items="data" v-slot="{ item }: any">
      <RouterLink
        :to="{ name: 'people', params: { id: item.id } }"
        class="text-white"
      >
        {{ item.name }} - ({{ item.gender }}, {{ item.birthYear }})
      </RouterLink>
    </ItemList>
  </WithData>
</template>
