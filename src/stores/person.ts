import SwapiService from "@/services/swapi";
import { defineStore } from "pinia";

const usePersonStore = defineStore("person", {
  state: () =>
    ({
      person: null,
      isLoading: null,
      isError: null,
    } as any),
  actions: {
    async getPerson(id: number) {
      const swapiService = new SwapiService();

      try {
        this.isError = false;
        this.isLoading = true;
        const person = await swapiService.getPerson(id);
        this.person = person;
      } catch (err) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
});

export default usePersonStore;
