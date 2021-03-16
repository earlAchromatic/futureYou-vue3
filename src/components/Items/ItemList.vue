<template>
  <div class="box">
    <h1 class="title">{{ getInterest }}</h1>
    <h1 class="title">{{ getTimeline }}</h1>
    <div v-if="items.length === 0">
      please add some items
    </div>
    <div v-else>
      <table class="table is-fullwidth">
        <thead>
          <th>Item</th>
          <th>Cost Today</th>
          <th>Cost to Future You</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="(value, index) in items" :key="index">
            <td>{{ value.itemName }}</td>
            <td>
              {{
                value.cost.toLocaleString(undefined, {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 2,
                })
              }}
            </td>
            <td>
              {{
                value.futureCost.toLocaleString(undefined, {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 2,
                })
              }}
            </td>
            <td><button @click="removeItem(value)">remove item</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { itemData } from "../../store.js";

export default {
  name: "ItemList",
  setup() {
    const { removeItem, getItems, getInterest, getTimeline } = itemData();
    const items = getItems;
    console.log(items);
    return { removeItem, items, getInterest, getTimeline };
  },
  data: function() {
    return {};
  },
};
</script>

<style scoped lang="css">
.box {
  max-height: 400px;
  overflow: auto;
}
</style>
