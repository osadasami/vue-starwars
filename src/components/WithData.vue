<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from "vue";
import Error from "./Error.vue";
import Spinner from "./Spinner.vue";

const isLoading = ref(false);
const isError = ref(false);
const items: Ref<any> = ref([]);
const hasData = computed(
  () => !isLoading.value && !isError.value && items.value
);

const props = defineProps<{
  getData: () => {};
}>();

onMounted(async () => {
  try {
    isLoading.value = true;
    isError.value = false;

    items.value = await props.getData();
  } catch (err) {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <Spinner v-if="isLoading" />
  <Error v-if="isError" />
  <template v-if="hasData">
    <slot :items="items"></slot>
  </template>
</template>
