<template>
  <div class="column is-half">
    <UsagePanel v-if="usageToggle"></UsagePanel>
    <ItemInput></ItemInput>
    <ItemList></ItemList>
  </div>
</template>

<script lang="ts">
import ItemInput from "./ItemInput.vue";
import ItemList from "./ItemList.vue";
import UsagePanel from "./UsagePanel.vue";

export default {
  name: "ItemSection",
  components: {
    ItemInput,
    ItemList,
    UsagePanel,
  },
  data: function() {
    return {
      usageToggle: true,
    };
  },
};
</script>

<style scoped lang="css"></style>
