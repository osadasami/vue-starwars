<script setup lang="ts">
import PersonDetails from "@/components/PersonDetails.vue";
import PersonList from "@/components/PersonList.vue";
import { ref } from "vue";

const selectedItemId: any = ref(null);

function onItemSelected(item: any) {
  selectedItemId.value = Number(item.id);
}
</script>

<template>
  <div class="row mb2">
    <div class="col-md-6">
      <PersonList :on-item-selected="onItemSelected" />
    </div>
    <div class="col-md-6">
      <PersonDetails
        v-if="selectedItemId"
        :id="selectedItemId"
        :key="selectedItemId"
      />
    </div>
  </div>
</template>
