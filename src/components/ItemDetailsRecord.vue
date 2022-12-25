<script setup lang="ts">
const props = defineProps<{
  label: string;
  value: string;
}>();
</script>

<template>
  <li class="list-group-item">
    <span class="term">{{ label }}</span>
    <span>{{ value }}</span>
  </li>
</template>
