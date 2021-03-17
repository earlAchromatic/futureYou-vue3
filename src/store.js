import { ref, computed } from "vue";

//this is outside of the export function so that only one 'state' object is ever in created and used across the project.
const data = ref([
  // {
  //   itemName: "",
  //   cost: 0,
  //   futureCost: 0,
  // },
]);

const interestRate = ref(0.06); //out of 1 (%)
const timeLine = ref(30); //in years

export function itemData() {
  function addItem(item) {
    data.value.push(item);
  }

  function removeItem(item) {
    data.value.splice(
      data.value.findIndex((e) => e.itemName === item.itemName),
      1
    );
  }

  function updateInterest(newValue) {
    let div = newValue / 100;
    interestRate.value = div;
    updateAllData();
  }

  function updateTimeline(newValue) {
    timeLine.value = newValue;
    updateAllData();
  }

  function updateAllData() {
    data.value.forEach((e) => {
      e.futureCost = calculateFV(e.cost);
    });
  }

  function calculateFV(cost) {
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
