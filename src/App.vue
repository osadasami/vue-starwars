<script setup lang="ts">
import Header from "@/components/Header.vue";
import ItemList from "@/components/ItemList.vue";
import PersonDetails from "@/components/PersonDetails.vue";
import RandomPlanet from "@/components/RandomPlanet.vue";
</script>

<template>
  <div>
    <Header />
    <RandomPlanet />

    <div className="row mb2">
      <div className="col-md-6">
        <ItemList />
      </div>
      <div className="col-md-6">
        <PersonDetails />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
