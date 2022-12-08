<script setup lang="ts">
import { inject } from "vue";
import ItemDetails from "./ItemDetails.vue";
import ItemDetailsRecord from "./ItemDetailsRecord.vue";
import WithData from "./WithData.vue";

const service: any = inject("swapiService");

const props = defineProps<{
  id: number;
}>();
</script>

<template>
  <WithData
    :get-data="() => service.getStarship(props.id)"
    v-slot="{ data }: any"
    :key="service"
  >
    <ItemDetails
      :item="data"
      :get-image-url="service.getStarshipImage"
      v-slot="{ item }: any"
    >
      <ItemDetailsRecord :label="'Model'" :prop="'model'" :item="item" />

      <ItemDetailsRecord
        :label="'Manufacturer'"
        :prop="'manufacturer'"
        :item="item"
      />

      <ItemDetailsRecord
        :label="'Cost In Credits'"
        :prop="'costInCredits'"
        :item="item"
      />

      <ItemDetailsRecord :label="'Crew'" :prop="'crew'" :item="item" />
      <ItemDetailsRecord
        :label="'Passengers'"
        :prop="'passengers'"
        :item="item"
      />

      <ItemDetailsRecord
        :label="'Cargo Capacity'"
        :prop="'cargoCapacity'"
        :item="item"
      />
    </ItemDetails>
  </WithData>
</template>
