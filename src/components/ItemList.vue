<script setup lang="ts">
const props = defineProps<{
  items: any;
}>();

function selectItem(item: any) {
  // props.onSelect(item);
}
</script>

<template>
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

<style>
.item-list .list-group-item {
  cursor: pointer;
}

.item-list .list-group-item:hover {
  background-color: #444;
}
</style>
