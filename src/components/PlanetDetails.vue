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
    :get-data="() => service.getPlanet(props.id)"
    v-slot="{ data }: any"
  >
    <ItemDetails
      :item="data"
      :get-image-url="service.getPlanetImage"
      v-slot="{ item }: any"
    >
      <ItemDetailsRecord
        :label="'Population'"
        :prop="'population'"
        :item="item"
      />

      <ItemDetailsRecord
        :label="'Rotation Period'"
        :prop="'rotationPeriod'"
        :item="item"
      />

      <ItemDetailsRecord :label="'Diameter'" :prop="'diameter'" :item="item" />
    </ItemDetails>
  </WithData>
</template>
