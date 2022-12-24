<script setup lang="ts">
import PersonDetails from "@/components/PersonDetails.vue";
import PersonList from "@/components/PersonList.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = computed(() => Number(route.params.id));
</script>

<template>
  <div class="row mb2">
    <div class="col-md-6">
      <PersonList />
    </div>
    <div class="col-md-6">
      <PersonDetails v-if="id" :id="id" :key="id" />
    </div>
  </div>
</template>
