<template>
  <div>
    <TheHeader></TheHeader>
    <div class="container">
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

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    ItemSection,
    ChartSection,
  },
};
</script>

<style>
#app {
  /* background: linear-gradient(
    141deg,
    rgba(255, 207, 80, 1) 12%,
    rgba(180, 55, 84, 1) 49%
  ); */
  position: relative;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
