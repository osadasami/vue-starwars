<script setup lang="ts">
import StarshipDetails from "@/components/StarshipDetails.vue";
import StarshipList from "@/components/StarshipList.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const selectedItemId: any = ref(null);
const route = useRoute();
const id = computed(() => Number(route.params.id));

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
      <StarshipDetails v-if="id" :id="id" :key="id" />
    </div>
  </div>
</template>
