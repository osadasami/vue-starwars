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
    :get-data="() => swapiService.getPerson(props.id)"
    v-slot="{ data }: any"
  >
    <ItemDetails
      :item="data"
      :get-image-url="swapiService.getPersonImage"
      v-slot="{ item }: any"
    >
      <ItemDetailsRecord :label="'Gender'" :prop="'gender'" :item="item" />

      <ItemDetailsRecord
        :label="'Birth year'"
        :prop="'birthYear'"
        :item="item"
      />

      <ItemDetailsRecord :label="'Eye color'" :prop="'eyeColor'" :item="item" />
    </ItemDetails>
  </WithData>
</template>
