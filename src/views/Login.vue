<script setup lang="ts">
import { watch, type Ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{ isLoggedIn: Ref<boolean>; onLogin: () => void }>();
const router = useRouter();

if (props.isLoggedIn.value) {
  router.push({ name: "secret" });
}

watch(props.isLoggedIn, (value: any) => {
  if (props.isLoggedIn.value) {
    router.push({ name: "secret" });
  }
});
</script>

<template>
  {{ props }}
  <div class="jumbotron">
    <p>Login to see secret page</p>
    <button @click="props.onLogin" class="btn btn-primary">Login</button>
  </div>
</template>
<style scoped></style>
