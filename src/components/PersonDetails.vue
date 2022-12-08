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
    :get-data="() => service.getPerson(props.id)"
    v-slot="{ data }: any"
    :key="service"
  >
    <ItemDetails
      :item="data"
      :get-image-url="service.getPersonImage"
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
