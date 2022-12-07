import { inject, provide } from "vue";
import SwapiService from "./swapi";

const swapiService = new SwapiService();

export const serviceContainers = {
  swapiService: swapiService,
};

export const ServiceContainerProvider = Symbol("serviceContainerProvider");

export function useServiceContainerProvider() {
  provide(ServiceContainerProvider, serviceContainers);
}

export function useServiceContainerContext(): any {
  return inject(ServiceContainerProvider);
}
