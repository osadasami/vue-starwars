<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from "vue";
import PlanetDetails from "./PlanetDetails.vue";

const props = withDefaults(
  defineProps<{
    updateInterval: number;
  }>(),
  { updateInterval: 10000 }
);
const id: Ref<number> = ref(5);
let interval: number = 0;

function getRandomPlanetId(): number {
  return Math.floor(Math.random() * 10 + 2);
}

function updateId() {
  id.value = getRandomPlanetId();
  console.log(id.value);
}

onMounted(async () => {
  interval = setInterval(updateId, props.updateInterval);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="random-planet">
    <PlanetDetails :id="id" :key="id"></PlanetDetails>
  </div>

  <button @click="updateId" class="toggle-planet btn btn-primary btn-lg">
    Get random planet
  </button>
</template>

<style>
.toggle-planet {
  margin-bottom: 30px;
}
.random-planet {
  margin-bottom: 30px;
}
</style>
