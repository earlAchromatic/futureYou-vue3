<template>
  <header
    class="header has-background-primary is-flex is-flex-direction-column"
  >
    <img class="logo" src="@/assets/logo.png" alt="" />
  </header>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="sass">
@import '../../public/sass/style.sass';
.logo

  //margin: 40px 0px 20px 0px


header
  box-shadow: $shadow;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 25px 0;
</style>
