<script setup lang="ts">
const props = defineProps<{
  label: string;
  prop: string;
  item: any;
}>();
</script>

<template>
  <li class="list-group-item">
    <span class="term">{{ props.label }}</span>
    <span>{{ props.item[props.prop] }}</span>
  </li>
</template>
