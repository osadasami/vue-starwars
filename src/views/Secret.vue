<script setup lang="ts">
import type { Ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  isLoggedIn: Ref<boolean>;
}>();

const router = useRouter();

if (!props.isLoggedIn.value) {
  router.push({ name: "login" });
}
</script>

<template>
  <div v-if="!props.isLoggedIn.value">You should not see this</div>

  <div class="jumbotron">
    <h1 v-if="props.isLoggedIn.value">This page is full of secrets</h1>
  </div>
</template>

<style scoped></style>
