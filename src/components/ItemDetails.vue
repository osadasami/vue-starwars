<script setup lang="ts">
import type ListItem from "@/types/ListItem";

const props = defineProps<{
  item: ListItem;
  getImageUrl: (id: number) => string;
}>();
</script>

<template>
  <div class="person-details card">
    <img class="person-image" :src="props.getImageUrl(item.id)" />

    <div class="card-body">
      <h4>{{ item.name }}</h4>
      <ul class="list-group list-group-flush">
        <slot :item="item"></slot>
      </ul>
    </div>
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
