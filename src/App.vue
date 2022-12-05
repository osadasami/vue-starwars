<script setup lang="ts">
import Header from "@/components/Header.vue";
import RandomPlanet from "@/components/RandomPlanet.vue";
import SwapiService from "@/services/swapi";
import usePeopleStore from "@/stores/people";
import PersonDetails from "./components/PersonDetails.vue";
import PersonList from "./components/PersonList.vue";
import PlanetDetails from "./components/PlanetDetails.vue";
import PlanetList from "./components/PlanetList.vue";
import StarshipDetails from "./components/StarshipDetails.vue";
import StarshipList from "./components/StarshipList.vue";

const peopleStore = usePeopleStore();
const swapiService = new SwapiService();
</script>

<template>
  <div>
    <Header />

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
