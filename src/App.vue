<script setup lang="ts">
import usePeopleStore from "@/stores/people";
import Header from "./components/Header.vue";
import ItemList from "./components/ItemList.vue";
import PersonDetails from "./components/PersonDetails.vue";
import RandomPlanet from "./components/RandomPlanet.vue";
import SwapiService from "./services/swapi";

const peopleStore = usePeopleStore();
const swapiService = new SwapiService();
</script>

<template>
  <div>
    <Header />

    <RandomPlanet />

    <div class="row mb2">
      <div class="col-md-6">
        <ItemList :get-data="swapiService.getAllPeople" v-slot="{ item }: any">
          {{ item.name }} - ({{ item.gender }}, {{ item.birthYear }})
        </ItemList>

        <ItemList :get-data="swapiService.getAllPlanets" v-slot="{ item }: any">
          {{ item.name }} - ({{ item.population }}, {{ item.rotationPriod }})
        </ItemList>

        <ItemList
          :get-data="swapiService.getAllStarships"
          v-slot="{ item }: any"
        >
          {{ item.name }} - ({{ item.model }}, {{ item.manufacturer }})
        </ItemList>
      </div>
      <div class="col-md-6">
        <PersonDetails />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
