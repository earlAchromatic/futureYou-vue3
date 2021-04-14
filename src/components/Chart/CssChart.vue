<template>
  <div class="list">
    <div v-if="items.length === 0">
      please add some items
    </div>
    <div v-else>
      <table
        class="charts-css column multiple stacked data-spacing-5 show-labels"
      >
        <tbody>
          <tr v-for="(value, index) in items" :key="index">
            <th scope="row">{{ value.itemName }}</th>
            <td
              class="data flx-center"
              id="cost"
              v-bind:style="{
                '--size': value.cost / getMax(items),
              }"
            >
              <span class="flx-center"
                ><h1>$</h1>
                {{
                  value.cost.toLocaleString(undefined, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 2,
                  })
                }}</span
              >
            </td>
            <td
              class="data flx-center"
              id="futureCost"
              v-bind:style="{
                '--size': value.futureCost / getMax(items),
              }"
            >
              <span class="flx-center"
                ><h1>$</h1>
                {{
                  value.futureCost.toLocaleString(undefined, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 2,
                  })
                }}</span
              >
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
import { DataItem, itemData } from "../../store";

export default {
  name: "ItemList",

  setup() {
    const { removeItem, getItems, getInterest, getTimeline } = itemData();
    const items = getItems;

    const getMax = function(a: Array<DataItem>): number {
      let maxArr: Array<number> = [],
        maxVal: number;

      maxArr = a.map((e) => {
        return e.futureCost;
      });

      maxVal = Math.max(...maxArr);
      console.log(maxVal);
      return maxVal + 0.5 * maxVal;
    };

    return { removeItem, items, getInterest, getTimeline, getMax };
  },
};

//Add Sum column
//ability to edit fields from within the table?
//
</script>

<style scoped lang="sass">
@import '../../../public/sass/style.sass';

.flx-center
  display: flex
  justify-content: center
  flex-wrap: wrap

span.flx-center
  width: 100%

table
  height: 300px;

.list
  max-height: 400px;
  overflow: auto;
  margin: 10px;

.eraser:hover
  transform: scale(1.1);

table .data#cost
  background: $viridian-green;
</style>

<style>
/* https://github.com/vuejs/vuejs.org/issues/1150 styleguide opinions on 2 style tags 
  This approach allows the animation to work though for some reason it doesn't work in the 
  global sass style sheet.
*/
@keyframes gradient-animation {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}

table .data#futureCost {
  background-image: linear-gradient(
    45deg,
    #956fd3,
    #e76ec2,
    #ff7fa2,
    #ffa782,
    #ffd86f,
    #faf982
  );
  background-size: 600%;
  animation: gradient-animation 3s linear infinite alternate;
}
</style>
