<template>
  <div class="box">
    <h1 class="title">Item List</h1>
    <div v-if="false">
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
            <td>{{ value.cost }}</td>
            <td>{{ value.futureCost }}</td>
            <td><button>remove item</button></td>
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
    const { addItem, removeItem, getItems } = itemData();
    const items = getItems;
    console.log(items);
    return { addItem, removeItem, items };
  },
  components: {},
  data: function() {
    return {};
  },
};
</script>

<style scoped lang="css"></style>
