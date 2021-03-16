import { ref, computed } from "vue";

export const data = ref([
  {
    itemName: "dog",
    cost: 0,
    futureCost: 0,
  },
]);

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

  const getItems = computed(() => data.value);

  return {
    addItem: addItem,
    removeItem: removeItem,
    getItems,
  };
}
