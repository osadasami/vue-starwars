<script setup lang="ts">
import { inject } from "vue";
import ItemList from "./ItemList.vue";
import WithData from "./WithData.vue";

const swapiService: any = inject("swapiService");
</script>

<template>
  <WithData :get-data="swapiService.getAllPeople" v-slot="{ data }: any">
    <ItemList :items="data" v-slot="{ item }: any">
      {{ item.name }} - ({{ item.gender }}, {{ item.birthYear }})
    </ItemList>
  </WithData>
</template>
