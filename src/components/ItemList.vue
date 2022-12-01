<script setup lang="ts">
import SwapiService from "@/services/swapi";
import { onMounted, reactive } from "vue";
import Error from "./Error.vue";
import Spinner from "./Spinner.vue";

const swapiService = new SwapiService();
const state = reactive<any>({
  people: [],
  selectedPerson: null,
  isLoading: false,
  isError: false,
  error: null,
});

onMounted(async () => {
  try {
    state.isLoading = true;
    state.isError = false;
    const data = await swapiService.getAllPeople();
    state.people = data;
  } catch (err: any) {
    state.isError = true;
    state.error = err;
  } finally {
    state.isLoading = false;
  }
});

function selectPerson(personName: string) {
  state.selectedPerson = personName;
}
</script>

<template>
  <Spinner v-if="state.isLoading" />
  <Error v-if="state.isError" />
  <template v-if="!state.isLoading && !state.isError">
    <ul class="item-list list-group">
      <li
        @click="selectPerson(person.name)"
        v-for="person in state.people"
        class="list-group-item"
        :class="{ 'bg-primary': person.name === state.selectedPerson }"
      >
        {{ person.name }}
      </li>
    </ul>
  </template>
</template>

<style>
.item-list .list-group-item {
  cursor: pointer;
}

.item-list .list-group-item:hover {
  background-color: #444;
}
</style>
