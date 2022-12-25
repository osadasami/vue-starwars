<script setup lang="ts">
import type Person from "@/types/Person";
import { ServiceKey } from "@/types/Symbols";
import { inject } from "vue";
import ItemDetails from "./ItemDetails.vue";
import ItemDetailsRecord from "./ItemDetailsRecord.vue";
import WithData from "./WithData.vue";

const service = inject(ServiceKey);

if (!service) {
  throw new Error(`Could not resolve ${ServiceKey}`);
}

const props = defineProps<{
  id: number;
}>();
</script>

<template>
  <WithData
    :get-data="() => service.getPerson(props.id)"
    v-slot="{ data }: { data: Person }"
    :key="service.toString()"
  >
    <ItemDetails
      :item="data"
      :get-image-url="service.getPersonImage"
      v-slot="{ item }: { item: any }"
    >
      <ItemDetailsRecord :label="'Gender'" :value="item.gender" />
      <ItemDetailsRecord :label="'Birth year'" :value="item.birthYear" />
      <ItemDetailsRecord :label="'Eye color'" :value="item.eyeColor" />
    </ItemDetails>
  </WithData>
</template>
