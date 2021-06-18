<template>
  <div :class="{ 'is-active': modalToggle }" class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button
          class="delete"
          aria-label="close"
          @click="modalToggle = !modalToggle"
        ></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TheModal",
  setup() {},
  data: function() {
    return {
      modalToggle: false,
    };
  },
};
</script>

<style scoped>
.modal-background {
  backdrop-filter: blur(5px);
}
</style>
