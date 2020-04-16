<template>
  <div class="card feed-card shadow--hover-sm mb-4 bg-light-pink">
    <div class="card-body py-2">
      <div class="row">
        <div class="col font-11 text-light-gray">Module :</div>
      </div>
      <div class="row">
        <div class="col font-montserrat">
          <span class="font-weight-bold" v-text="this.concept.unit">02</span>
          <span class="text-pink mx-1">|</span>
          <nuxt-link :to="'/concept/'+this.concept.id">
            <span v-text="this.concept.title" class="font-dark font-weight-medium">Technical Analysis</span>
          </nuxt-link>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col font-montserrat">
          <div class="row mb-2">
            <div class="col font-montserrat font-12">
              <span class="text-light-gray">Level:</span>
              <span class="font-weight-medium">Begginer</span>
            </div>
            <div class="col font-montserrat text-right">
              <span class="text-light-gray font-12">Chapter:</span>
              <span class="font-weight-bold font-16" v-text="this.concept.chapter">03</span>
            </div>
          </div>
          <div class="row" hidden>
            <div class="col font-montserrat">
              <div class="progress" style="height:4px">
                <div
                  class="progress-bar bg-pink"
                  role="progressbar"
                  style="width: 25%;"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.font-dark{
  color: rgb(82, 82, 82);
}
.feed-card {
    align-content: normal;
    background: white;
    border-radius: 8px;
    /* min-height: 200px; */
    border: 1px solid rgb(255, 246, 246) !important;
    box-shadow: 0px 2px 5px rgb(213, 213, 213);
}
.bg-light-pink {
  background: rgb(255, 251, 251) !important ;
}
.bg-pink {
  background: pink !important ;
}
.text-pink {
  color: pink !important;
}
.text-light-gray {
  color: lightgray !important;
}
</style>

<script lang="ts">
import Vue from "vue";
import { concept } from "./../../model/concept.model";
export default Vue.extend({
  props: ["concept"]
});
</script>