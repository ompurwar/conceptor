<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <main-panel></main-panel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainPanel from "../components/main-content/main-panel.vue";
export default Vue.extend({
  components: {
    MainPanel
  }
});
</script>

<style>
.container {
  margin: auto;
  width: 100vw;;
  min-height: 100vh;
  justify-content: center;
}
</style>
