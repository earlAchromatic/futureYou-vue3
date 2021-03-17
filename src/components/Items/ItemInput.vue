<template>
  <div class="box">
    <h1 class="title">Enter Items You Are Thinking of Buying</h1>
    <div class="level" v-if="errors.length">
        <p >
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(value, idx) in errors" :key="idx">{{ value }}</li>
        </ul>
      </p>
      </div>
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
          class=" input"
          type="text"
          placeholder="Item Cost"
          v-model.number="inputCost"
        />
      </div>
      <div class="column">
        <button class="button is-dark" @click="submitInput">
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
    const { addItem, removeItem, calculateFV, getItems } = itemData();
    const items = getItems;
    return { addItem, removeItem, calculateFV, items };
  },
  data: function() {
    var errors = [];
    var inputName = "";
    var inputCost ;
    return { inputName, inputCost, errors };
  },
  computed: {
    buildObject() {
      return {
        itemName: this.inputName,
        cost: this.inputCost,
        futureCost: this.calculateFV(this.inputCost),
      };
    },
  },
  methods: {
    submitInput(){
      //bug here - if user enters '30,000', the result is cut off after ',' leaving 30. fixes?
      //add force item name
      this.errors = [];
      if(typeof this.inputCost != 'number'){
        
        this.errors.push('Cost must be a number')
      }
      else{
        this.addItem(this.buildObject);
      }
      this.inputName = ""
      this.inputCost = ''
    }
  }
};
</script>

<style scoped lang="css">
.columns{
  align-items: center;
}
</style>
