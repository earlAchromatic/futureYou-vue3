import { ref, computed } from "vue";

// import {DataItem} from '../src/types/index'

export interface DataItem {
  itemName: string;
  cost: number;
  futureCost: number;
}

export type DataArr = DataItem[];

//this is outside of the export function so that only one 'state' object is ever in created and used across the project.
const data = ref<DataArr>([]);

const interestRate = ref(0.06); //out of 1 (%)
const timeLine = ref(30); //in years

export function itemData() {
  function addItem(item: DataItem): void {
    data.value.push(item);
  }

  function removeItem(item: DataItem): void {
    data.value.splice(
      data.value.findIndex((e) => e.itemName === item.itemName),
      1
    );
  }

  function updateInterest(newValue: number): void {
    let div = newValue / 100;
    interestRate.value = div;
    updateAllData();
  }

  function updateTimeline(newValue: number): void {
    timeLine.value = newValue;
    updateAllData();
  }

  function updateAllData(): void {
    data.value.forEach((e) => {
      e.futureCost = calculateFV(e.cost);
    });
  }

  function calculateFV(cost: number): number {
    let FV = cost * (1 + interestRate.value) ** timeLine.value;
    return FV;
  }

  const getItems = computed(() => data.value);
  const getInterest = computed(() => interestRate.value);
  const getTimeline = computed(() => timeLine.value);

  return {
    addItem,
    removeItem,
    calculateFV,
    updateInterest,
    updateTimeline,
    getInterest,
    getTimeline,
    getItems,
  };
}
