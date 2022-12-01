<script setup lang="ts">
import Error from "@/components/Error.vue";
import Spinner from "@/components/Spinner.vue";
import usePlanetStore from "@/stores/planet";
import { onMounted } from "vue";

const planetStore = usePlanetStore();

onMounted(async () => {
  planetStore.getPlanet();
  setInterval(planetStore.getPlanet, 20000);
});
</script>

<template>
  <div class="random-planet">
    <Spinner v-if="planetStore.isLoading && !planetStore.isError" />

    <Error v-if="planetStore.isError" :icon="`/death-star.png`" />

    <template v-if="!planetStore.isLoading && !planetStore.isError">
      <img
        v-if="planetStore.id"
        class="planet-image"
        :src="`https://starwars-visualguide.com/assets/img/planets/${planetStore.id}.jpg`"
      />

      <div>
        <h4>{{ planetStore.name }}</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="term">Population</span>
            <span>{{ planetStore.population }}</span>
          </li>
          <li class="list-group-item">
            <span class="term">Rotation Period</span>
            <span>{{ planetStore.rotationPeriod }}</span>
          </li>
          <li class="list-group-item">
            <span class="term">Diameter</span>
            <span>{{ planetStore.diameter }}</span>
          </li>
        </ul>
      </div>
    </template>
  </div>
  <button @click="planetStore.getPlanet" class="btn btn-primary">
    Get random planet
  </button>
</template>

<style>
.random-planet {
  display: flex;
  padding: 1rem;
}

.random-planet .planet-image {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-right: 1rem;
}

.random-planet .list-group {
  margin: 1rem 0 0 1rem;
}

.random-planet .list-group-item {
  padding: 0.25rem;
}

.random-planet .list-group-item .term {
  margin-right: 0.5rem;
}
</style>
