<template>
  <article v-show="show" class="message is-info">
    <div class="message-header">
      <p>How to Use this Tool</p>
      <button class="delete" aria-label="delete" @click="show = !show"></button>
    </div>
    <div class="message-body is-flex columns">
      <div class="column is-two-thirds">
        The premise behind this tool is to help you think of your future self
        when you are making a purchase. When we look at the opportunity cost of
        an item, instead of just the list price, we give our future self a
        fighting financial chance.
      </div>

      <a class="column box is-large">
        <img src="@/assets/professor-teaching.svg" alt="" />
        <!-- <span>Watch me!</span> -->
      </a>
    </div>
  </article>
</template>

<script lang="ts">
export default {
  name: "UsagePanel",
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped lang="sass">
@import '../../../public/sass/style.sass';

article
  box-shadow: $secondary-shadow
  margin: 10px
</style>
