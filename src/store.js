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
    console.log(
      `interest rate: ${interestRate.value} and timeline: ${timeLine.value}`
    );
    let FV = cost * (1 + interestRate.value) ** timeLine.value;
    console.log(FV);
    return FV;
  }

  // const generateChartSeries = computed(() => {
  //   let series = [
  //     {
  //       name: "Cost Today",
  //       data: [],
  //     },
  //     {
  //       name: "Future Cost",
  //       data: [],
  //     },
  //   ];

  //   getItems.value.forEach((e) => {
  //     console.log(e.futureCost);
  //     series[0].data.push(e.cost);
  //     series[1].data.push(e.futureCost);
  //   });
  //   console.log(series);
  //   return series;
  // });

  const getItems = computed(() => data.value);
  const getInterest = computed(() => interestRate.value);
  const getTimeline = computed(() => timeLine.value);

  return {
    addItem,
    removeItem,
    calculateFV,
    updateInterest,
    updateTimeline,
    // generateChartSeries,
    getInterest,
    getTimeline,
    getItems,
  };
}
