<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from "vue";
import PlanetDetails from "./PlanetDetails.vue";

const id: Ref<number> = ref(5);
let interval: any = null;

function getRandomPlanetId(): number {
  return Math.floor(Math.random() * 10 + 2);
}

function updateId() {
  id.value = getRandomPlanetId();
  console.log(id.value);
}

onMounted(async () => {
  interval = setInterval(updateId, 20000);
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
