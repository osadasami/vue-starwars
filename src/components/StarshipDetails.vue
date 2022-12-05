<script setup lang="ts">
import SwapiService from "@/services/swapi";
import ItemDetails from "./ItemDetails.vue";
import ItemDetailsRecord from "./ItemDetailsRecord.vue";
import WithData from "./WithData.vue";

const swapiService = new SwapiService();

const props = defineProps<{
  id: number;
}>();
</script>

<template>
  <WithData
    :get-data="() => swapiService.getStarship(props.id)"
    v-slot="{ data }: any"
  >
    <ItemDetails
      :item="data"
      :get-image-url="swapiService.getStarshipImage"
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
