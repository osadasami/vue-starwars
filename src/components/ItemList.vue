<script setup lang="ts">
const props = defineProps<{
  items: any;
}>();
</script>

<template>
  <ul class="item-list list-group">
    <li v-for="item in items" class="list-group-item">
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

.item-list .list-group-item {
  padding: 0;
}
.item-list .list-group-item a {
  display: block;
  padding: 1rem;
}
</style>
