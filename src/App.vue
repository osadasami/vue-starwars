<script setup lang="ts">
import ItemDetailsRecord from "@/components/ItemDetailsRecord.vue";
import usePeopleStore from "@/stores/people";
import Header from "./components/Header.vue";
import ItemDetails from "./components/ItemDetails.vue";
import ItemList from "./components/ItemList.vue";
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
        <ItemDetails
          :id="3"
          :get-data="swapiService.getPlanet"
          :get-image-url="swapiService.getPlanetImage"
          v-slot="{ item }: any"
        >
          <ItemDetailsRecord
            :label="'Population'"
            :prop="'population'"
            :item="item"
          />

          <ItemDetailsRecord
            :label="'Rotation Period'"
            :prop="'rotationPeriod'"
            :item="item"
          />

          <ItemDetailsRecord
            :label="'Diameter'"
            :prop="'diameter'"
            :item="item"
          />
        </ItemDetails>

        <ItemDetails
          :id="10"
          :get-data="swapiService.getStarship"
          :get-image-url="swapiService.getStarshipImage"
          v-slot="{ item }: any"
        >
          <ItemDetailsRecord :label="'Model'" :prop="'model'" :item="item" />

          <ItemDetailsRecord
            :label="'Manufacturer'"
            :prop="'manufacturer'"
            :item="item"
          />
          <ItemDetailsRecord :label="'Crew'" :prop="'crew'" :item="item" />
          <ItemDetailsRecord
            :label="'Passengers'"
            :prop="'passengers'"
            :item="item"
          />
        </ItemDetails>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
