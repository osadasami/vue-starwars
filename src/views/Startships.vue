<script setup lang="ts">
import StarshipDetails from "@/components/StarshipDetails.vue";
import StarshipList from "@/components/StarshipList.vue";
import { ref } from "vue";

const selectedItemId: any = ref(null);

function onItemSelected(item: any) {
  selectedItemId.value = Number(item.id);
}
</script>

<template>
  <div class="row mb2">
    <div class="col-md-6">
      <StarshipList :on-item-selected="onItemSelected" />
    </div>
    <div class="col-md-6">
      <StarshipDetails
        v-if="selectedItemId"
        :id="selectedItemId"
        :key="selectedItemId"
      />
    </div>
  </div>
</template>
