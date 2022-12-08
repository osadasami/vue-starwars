<script setup lang="ts">
const props = defineProps<{
  onClick: () => void;
}>();
</script>

<template>
  <div class="header d-flex">
    <h3>
      <a href="#"> Star DB </a>
    </h3>
    <ul class="d-flex">
      <li>
        <a href="#">People</a>
      </li>
      <li>
        <a href="#">Planets</a>
      </li>
      <li>
        <a href="#">Starships</a>
      </li>
    </ul>

    <button @click="props.onClick" class="btn btn-primary btn-sm">
      Change service
    </button>
  </div>
</template>

<style scoped>
.header {
  margin-top: 0.5rem;
  padding-left: 10px;
}

.header ul li {
  list-style: none;
  margin: 0;
  padding: 0.5rem 1rem;
  border-radius: 3px;
}

.header ul li:hover {
  background-color: #444;
}

.header a:hover {
  text-decoration: none;
}

.header h3 a {
  color: white;
}

.header h3 a:hover {
  color: #00bc8c;
}

.btn {
  margin-top: 3px;
  height: 2rem;
}
</style>
