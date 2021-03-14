<template>
  <div class="box">
    <h1 class="title">Enter Items You Are Thinking of Buying</h1>
    <div class="columns">
      <div class="column is-half">
        <input
          class="input"
          type="text"
          placeholder="Item Name"
          v-model="itemName"
        />
      </div>
      <div class="column">
        <input
          class="column input"
          type="text"
          placeholder="Item Cost"
          v-model="itemCost"
        />
      </div>
      <div class="column">
        <button class="button is-dark">
          Add Item
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ItemInput",
  components: {},
  data: function() {
    return {
      itemName: "",
      itemCost: 0,
    };
  },
};
</script>

<style scoped lang="css"></style>
