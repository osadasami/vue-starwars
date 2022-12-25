<script setup lang="ts">
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
    :get-data="() => service.getStarship(props.id)"
    v-slot="{ data }: any"
    :key="service.toString()"
  >
    <ItemDetails
      :item="data"
      :get-image-url="service.getStarshipImage"
      v-slot="{ item }: any"
    >
      <ItemDetailsRecord :label="'Model'" :value="item.model" />

      <ItemDetailsRecord :label="'Manufacturer'" :value="item.manufacturer" />

      <ItemDetailsRecord
        :label="'Cost In Credits'"
        :value="item.costInCredits"
      />

      <ItemDetailsRecord :label="'Crew'" :value="item.crew" />
      <ItemDetailsRecord :label="'Passengers'" :value="item.passengers" />

      <ItemDetailsRecord
        :label="'Cargo Capacity'"
        :value="item.cargoCapacity"
      />
    </ItemDetails>
  </WithData>
</template>
