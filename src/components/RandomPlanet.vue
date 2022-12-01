<script setup lang="ts">
import Error from "@/components/Error.vue";
import Spinner from "@/components/Spinner.vue";
import SwapiService from "@/services/swapi";
import { onMounted, reactive } from "vue";

const state = reactive({
  id: null,
  name: null,
  population: null,
  rotationPeriod: null,
  diameter: null,
  isLoading: false,
  isError: false,
});

onMounted(async () => {
  updatePlanet();
  updatePlanetEvery(20000);
});

function updatePlanetEvery(ms: number) {
  try {
    setInterval(updatePlanet, ms);
  } catch (err) {
    console.log("err", err);
  }
}

function onLoadPlanet(data: any) {
  Object.assign(state, { ...data, isLoading: false, isError: false });
}

function onError(err: any) {
  Object.assign(state, { ...state, isLoading: false, isError: true });
  console.log("err", err);
}

async function updatePlanet() {
  const id = Math.floor(Math.random() * 10 + 2);
  Object.assign(state, { ...state, isLoading: true, isError: false, id });
  const service = new SwapiService();
  try {
    const data = await service.getPlanet(id);
    onLoadPlanet(data);
  } catch (err) {
    onError(err);
  }
}
</script>

<template>
  <div class="random-planet">
    <Spinner v-if="state.isLoading && !state.isError" />

    <Error v-if="state.isError" :icon="`/death-star.png`" />

    <template v-if="!state.isLoading && !state.isError">
      <img
        v-if="state.id"
        class="planet-image"
        :src="`https://starwars-visualguide.com/assets/img/planets/${state.id}.jpg`"
      />

      <div>
        <h4>{{ state.name }}</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="term">Population</span>
            <span>{{ state.population }}</span>
          </li>
          <li class="list-group-item">
            <span class="term">Rotation Period</span>
            <span>{{ state.rotationPeriod }}</span>
          </li>
          <li class="list-group-item">
            <span class="term">Diameter</span>
            <span>{{ state.diameter }}</span>
          </li>
        </ul>
      </div>
    </template>
  </div>
  <button @click="updatePlanet" class="btn btn-primary">
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
