import SwapiService from "@/services/swapi";
import { defineStore } from "pinia";

const usePeopleStore = defineStore("people", {
  state: () => ({
    people: [] as any,
    selectedPerson: null as any,
    isLoading: false,
    isError: false,
  }),
  actions: {
    async getPeople() {
      const swapiService = new SwapiService();

      try {
        this.isLoading = true;
        this.isError = false;
        const data = await swapiService.getAllPeople();
        this.people = data;
      } catch (err: any) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
    selectPerson(name: string) {
      this.selectedPerson = name;
    },
  },
});

export default usePeopleStore;
