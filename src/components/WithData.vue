<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from "vue";
import Error from "./Error.vue";
import Spinner from "./Spinner.vue";

const isLoading = ref(false);
const isError = ref(false);
const data: Ref<any> = ref(null);
const hasData = computed(
  () => !isLoading.value && !isError.value && data.value
);

const props = defineProps<{
  getData: () => {};
}>();

onMounted(async () => {
  try {
    isLoading.value = true;
    isError.value = false;

    data.value = await props.getData();
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
    <slot :data="data"></slot>
  </template>
</template>
