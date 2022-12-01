<script setup lang="ts">
import usePepleStore from "@/stores/people";
import { onMounted } from "vue";
import Error from "./Error.vue";
import Spinner from "./Spinner.vue";

const peopleStore = usePepleStore();

onMounted(async () => {
  peopleStore.getPeople();
});

function selectPerson(person: any) {
  peopleStore.selectPerson(person);
}
</script>

<template>
  <Spinner v-if="peopleStore.isLoading" />
  <Error v-if="peopleStore.isError" />
  <template v-if="!peopleStore.isLoading && !peopleStore.isError">
    <ul class="item-list list-group">
      <li
        @click="selectPerson(person)"
        v-for="person in peopleStore.people"
        class="list-group-item"
        :class="{
          'bg-primary': person.id === peopleStore?.selectedPerson,
        }"
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
