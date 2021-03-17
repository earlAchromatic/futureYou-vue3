<template>
  <div>
    <TheModal></TheModal>
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

<style>
#app {
  /* background: linear-gradient(
    141deg,
    rgba(255, 207, 80, 1) 12%,
    rgba(180, 55, 84, 1) 49%
  ); */
  background: url(https://images.unsplash.com/photo-1615529328331-f8917597711f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  position: relative;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
