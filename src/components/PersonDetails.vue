<script setup lang="ts">
import usePeopleStore from "@/stores/people";
import usePersonStore from "@/stores/person";
import Error from "./Error.vue";
import Spinner from "./Spinner.vue";

const personStore = usePersonStore();
const peopleStore = usePeopleStore();

peopleStore.$subscribe((_: any, state: any) => {
  if (!state.selectedPerson) return;
  personStore.getPerson(state.selectedPerson);
});
</script>

<template>
  <div class="person-details card">
    <Spinner v-if="personStore.isLoading && !personStore.isError" />

    <Error v-if="personStore.isError" :icon="`/death-star.png`" />

    <template v-if="personStore.person">
      <img
        class="person-image"
        :src="`https://starwars-visualguide.com/assets/img/characters/${personStore.person?.id}.jpg`"
      />

      <div class="card-body">
        <h4>{{ personStore.person?.name }}</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="term">Gender</span>
            <span>{{ personStore.person?.gender }}</span>
          </li>
          <li class="list-group-item">
            <span class="term">Birth Year</span>
            <span>{{ personStore.person?.birthYear }}</span>
          </li>
          <li class="list-group-item">
            <span class="term">Eye Color</span>
            <span>{{ personStore.person?.eyeColor }}</span>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<style>
.person-details {
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  padding: 1rem;
}

.person-details .person-image {
  width: 30%;
  height: 30%;
  border-radius: 10px;
}

.person-details .list-group-item {
  padding: 0.25rem;
}

.person-details .list-group-item .term {
  margin-right: 0.5rem;
}
</style>
