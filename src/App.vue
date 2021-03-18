<template>
  <div>
    <TheModal></TheModal>
    <TheHeader></TheHeader>
    <div class="container is-flex is-justify-content-center is-flex-wrap-wrap">
      <div class=" is-secondary">
        <h1 class="title is-4">
          purchase analyzer & dissuasion calculator
        </h1>
      </div>
      <div class="columns">
        <ItemSection></ItemSection>
        <ChartSection></ChartSection>
      </div>
    </div>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import ItemSection from "./components/Items/ItemSection";
import ChartSection from "./components/Chart/ChartSection";
import TheModal from "./components/TheModal";

export default {
  name: "App",
  components: {
    TheModal,
    TheHeader,
    TheFooter,
    ItemSection,
    ChartSection,
  },
};
</script>

<style lang="sass">
@import '../public/sass/style.sass';

.is-secondary
  background-color:
  margin-bottom: 25px
#app
  position: relative;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
</style>
