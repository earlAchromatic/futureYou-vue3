<template>
  <div class="list">
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
            <td>
              <a @click="removeItem(value)" class="icon"
                ><img
                  class="eraser"
                  src="../../assets/eraser-hand-drawn-tool.svg"
                  alt=""
              /></a>
            </td>
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
    return { removeItem, items, getInterest, getTimeline };
  },
};

//Add Sum column
//ability to edit fields from within the table?
//
</script>

<style scoped lang="css">
.list {
  max-height: 400px;
  overflow: auto;
  margin: 10px;
}
.eraser:hover {
  transform: scale(1.1);
}
</style>
