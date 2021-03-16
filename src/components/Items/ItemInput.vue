<template>
  <div class="box">
    <h1 class="title">Enter Items You Are Thinking of Buying</h1>
    <div class="columns">
      <div class="column is-half">
        <input
          class="input"
          type="text"
          placeholder="Item Name"
          v-model="inputName"
        />
      </div>
      <div class="column">
        <input
          class="column input"
          type="text"
          placeholder="Item Cost"
          v-model="inputCost"
        />
      </div>
      <div class="column">
        <button class="button is-dark" @click="addItem(buildObject)">
          Add Item
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { itemData } from "../../store.js";

export default {
  name: "ItemInput",
  setup() {
    const { addItem, removeItem, getItems } = itemData();
    const items = getItems;
    console.log(items);
    return { addItem, removeItem, items };
  },
  components: {},
  data: function() {
    var inputName = "";
    var inputCost = "";
    return { inputName, inputCost };
  },
  computed: {
    buildObject() {
      return {
        itemName: this.inputName,
        cost: this.inputCost,
        futureCost: 0,
      };
    },
  },
};
</script>

<style scoped lang="css"></style>
