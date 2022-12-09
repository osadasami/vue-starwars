<script setup lang="ts">
import PlanetDetails from "@/components/PlanetDetails.vue";
import PlanetList from "@/components/PlanetList.vue";
import { ref } from "vue";

const selectedItemId: any = ref(null);

function onItemSelected(item: any) {
  selectedItemId.value = Number(item.id);
}
</script>

<template>
  <div class="row mb2">
    <div class="col-md-6">
      <PlanetList :on-item-selected="onItemSelected" />
    </div>
    <div class="col-md-6">
      <PlanetDetails
        v-if="selectedItemId"
        :id="selectedItemId"
        :key="selectedItemId"
      />
    </div>
  </div>
</template>
