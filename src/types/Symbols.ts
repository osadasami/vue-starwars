import type { InjectionKey, Ref } from "vue";
import type Service from "./Service";

export const ServiceKey: InjectionKey<Ref<Service>> = Symbol("Service");
