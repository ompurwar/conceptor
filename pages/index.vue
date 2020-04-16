<template>
  <div class="container">
    <div class="row">
      <div class="col">
            <topnav></topnav>
        <main-panel></main-panel>
        <!-- <BottomNav></BottomNav> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BottomNav from "../components/bottomnav.vue";
import Topnav from "../components/topnav.vue";
import MainPanel from "../components/main-content/main-panel.vue";
export default Vue.extend({
  components: {
    MainPanel,
    BottomNav,
    Topnav
  }
});
</script>

<style>
.container {
  margin: auto;
  width: 100vw;
  min-height: 100vh;
  justify-content: center;
}
</style>
