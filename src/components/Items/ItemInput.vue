<template>
<article class="message is-primary">
  <div class="message-header">
    <p>enter some items you are thinking of buying:</p>
  </div>
  <div class="message-body">
    <div class="level" v-if="errors.length">
        <p >
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(value, idx) in errors" :key="idx">{{ value }}</li>
        </ul>
      </p>
      </div>
    <div class=" columns inputs">
      <div class="column is-two-fifths">
        <input
          class="input box"
          type="text"
          placeholder="Item Name"
          v-model="inputName"
        />
      </div>
      <div class="column">
        <input
          class="input box"
          type="text"
          placeholder="Item Cost"
          v-model.number="inputCost"
        />
      </div>
      <div class="column">
        <button class="box button is-secondary" @click="submitInput">
          Add Item
        </button>
      </div>
    </div>
  </div>
</article>

</template>

<script lang="ts">
import { DataItem, itemData } from "../../store";
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ItemInput",
  setup() {
    const { addItem, removeItem, calculateFV, getItems } = itemData();
    const items = getItems;
    return { addItem, removeItem, calculateFV, items };
  },
  data: function() {
    var errors: Array<string> = [];
    var inputName: string = "";
    var inputCost: number | string = '' ;
    return { inputName, inputCost, errors };
  },
  computed: {
    buildObject(): DataItem {
      return {
        itemName: this.inputName,
        cost: parseFloat(this.inputCost),
        futureCost: this.calculateFV(parseFloat(this.inputCost)),
      };
    },
  },
  methods: {
    submitInput(): void{
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
});
</script>

<style scoped lang="sass">
@import '../../../public/sass/style.sass';

article
  box-shadow: $secondary-shadow
  margin: 10px
.columns
  align-items: center;

.is-secondary
  background-color: $secondary
  border: none
  color: $link

</style>
