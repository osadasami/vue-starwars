import SwapiService from "@/services/swapi";
import { defineStore } from "pinia";

const usePlanetStore = defineStore("planet", {
  state: () =>
    ({
      id: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
      isLoading: false,
      isError: false,
    } as any),
  actions: {
    async getPlanet() {
      const id = Math.floor(Math.random() * 10 + 2);
      const service = new SwapiService();
      this.id = id;

      try {
        this.isLoading = true;
        this.isError = false;
        const data = await service.getPlanet(id);
        this.$patch({ ...data });
      } catch (err) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
});

export default usePlanetStore;
