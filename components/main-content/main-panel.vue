<template>
  <div class="mt-4" >
    <feed-card class="w-100 mb-3" v-for="feed in feeds" key="index" ></feed-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FeedCard from "./feed-card.vue";

export default Vue.extend({
  components: {
    FeedCard
  },
  data() {
      return {
        feeds: [1, 3, 4, 5]
      };
    }
});
</script>