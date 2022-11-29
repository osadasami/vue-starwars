<script setup lang="ts"></script>

<template>
  <ul class="item-list list-group">
    <li class="list-group-item">Luke Skywalker</li>
    <li class="list-group-item">Darth Vader</li>
    <li class="list-group-item">R2-D2</li>
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
