<template>
  <div>
    <header
      class="header has-background-primary is-flex is-flex-direction-column"
    >
      <img class="logo" src="@/assets/logo.png" alt="" />
    </header>
    <div class=" is-secondary">
      <h1 class=" title is-4">
        Purchase Analyser
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="sass">
@import '../../public/sass/style.sass';
.logo

  //margin: 40px 0px 20px 0px
.is-secondary
  background-color:
  margin-bottom: 25px
  display: flex
  justify-content: center

header
  box-shadow: $shadow;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 25px 0;
</style>
