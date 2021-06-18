<template>
  <footer class="footer ">
    <div class="columns">
      <div class="column"></div>
      <a href="https://Hyperionweb.dev">
        <span class="column">©2021 Hyperion Web llc</span>
      </a>
      <div class="column"></div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "TheFooter"
};
</script>

<style scoped lang="sass">
.footer
  height: 25px;
  padding: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  .columns:last-child
    margin-bottom: 0


@media screen and (max-width: 800px)
  .footer
    position: initial
</style>
