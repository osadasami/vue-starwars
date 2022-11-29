<script setup lang="ts">
import SwapiService from "@/services/swapi";
import { onMounted, reactive } from "vue";

const state = reactive({
  id: Math.floor(Math.random() * 10 + 2),
  name: null,
  population: null,
  rotationPeriod: null,
  diameter: null,
});

onMounted(async () => {
  const service = new SwapiService();
  const data = await service.getPlanet(state.id);

  state.name = data.name;
  state.population = data.population;
  state.rotationPeriod = data.rotation_period;
  state.diameter = data.diameter;
});
</script>

<template>
  <div class="random-planet jumbotron rounded">
    <img
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
  </div>
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
