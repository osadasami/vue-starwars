<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import Error from "./Error.vue";
import Spinner from "./Spinner.vue";

const isLoading = ref(false);
const isError = ref(false);
const items: Ref<any> = ref([]);

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

function selectItem(item: any) {
  // props.onSelect(item);
}
</script>

<template>
  <Spinner v-if="isLoading" />
  <Error v-if="isError" />
  <template v-if="!isLoading && !isError">
    <ul class="item-list list-group">
      <li
        v-for="item in items"
        @click="selectItem(item)"
        class="list-group-item"
        :class="{
          // 'bg-primary': item.id === props?.selectedItem,
        }"
      >
        <slot :item="item"></slot>
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
