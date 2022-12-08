<script setup lang="ts">
import Header from "@/components/Header.vue";
import RandomPlanet from "@/components/RandomPlanet.vue";
import { provide, ref } from "vue";
import PersonDetails from "./components/PersonDetails.vue";
import PersonList from "./components/PersonList.vue";
import PlanetDetails from "./components/PlanetDetails.vue";
import PlanetList from "./components/PlanetList.vue";
import StarshipDetails from "./components/StarshipDetails.vue";
import StarshipList from "./components/StarshipList.vue";
import SwapiService from "./services/swapi";
import SwapiServiceDammy from "./services/swapi-dummy";

const service: any = ref(new SwapiService());
provide("swapiService", service);

function changeService() {
  const NextService =
    service.value instanceof SwapiService ? SwapiServiceDammy : SwapiService;

  service.value = new NextService();

  console.log(`switch to ${NextService.name}`);
}
</script>

<template>
  <div>
    <Header :on-click="changeService" />

    <RandomPlanet />

    <div class="row mb2">
      <div class="col-md-6">
        <PersonList />
        <PlanetList />
        <StarshipList />
      </div>
      <div class="col-md-6">
        <PlanetDetails :id="4" />
        <PersonDetails :id="4" />
        <StarshipDetails :id="9" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
