<script setup lang="ts">
import PlanetDetails from "@/components/PlanetDetails.vue";
import PlanetList from "@/components/PlanetList.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const selectedItemId: any = ref(null);
const id = computed(() => Number(route.params.id));

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
      <PlanetDetails v-if="id" :id="id" :key="id" />
    </div>
  </div>
</template>
