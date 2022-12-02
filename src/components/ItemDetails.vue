<script setup lang="ts">
import { onMounted, reactive } from "vue";
import Error from "./Error.vue";
import Spinner from "./Spinner.vue";

const props = defineProps<{
  id: number;
  getData: Function;
  getImageUrl: Function;
}>();

const state = reactive({
  isLoading: false,
  isError: false,
  data: null,
} as any);

onMounted(async () => {
  try {
    state.isLoading = true;
    state.isError = false;
    state.data = await props.getData(props.id);
  } catch (err) {
    state.isError = true;
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <div class="person-details card">
    <Spinner v-if="state.isLoading && !state.isError" />

    <Error v-if="state.isError" :icon="`/death-star.png`" />

    <p v-if="!state.data && !state.isLoading && !state.isError">
      Nothing to show
    </p>

    <template v-if="state.data && !state.isLoading">
      <img class="person-image" :src="props.getImageUrl(state.data?.id)" />

      <div class="card-body">
        <h4>{{ state.data?.name }}</h4>
        <ul class="list-group list-group-flush">
          <slot :item="state.data"></slot>
        </ul>
      </div>
    </template>
  </div>
</template>

<style>
.person-details {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid #444;
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

.person-details button {
  margin-top: 5px;
}
</style>
