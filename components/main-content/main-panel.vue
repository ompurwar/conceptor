<template>
  <div class="mt-2">
    <div class="row">
      <div class="col-12 col-md-8 order-1 order-md-1">
        <div class="row mb-3">
          <div class="col">
            <span>Daily bytes</span>
          </div>
        </div>
        <feed-card class="w-100 mb-3" v-for="feed in feeds" :concept="feed" key="index" ></feed-card>
      </div>
      <div class="col-12 col-md order-0">
        <div class="card shadow-none border-0">
          <div class="card-body p-2">
            <img
              src="https://zerodha.com/varsity/wp-content/uploads/2019/11/M12C1.png"
              alt
              srcset
              class="img card-img-top"
            />
          </div>
        </div>
      </div>
    </div>
     <footer class="py-5" >
        <div class="row justify-content-center mb-2"  hidden>
          <div class="col-auto">
            <a href="https://www.linkedin.com/in/utkarsh-pandey-17106560/">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQF5MVUoexWXjg/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=N8JPOPD2IFV8N7niPEMycIfOc6-vNYQNlTaJKchqeIo"
                alt
                width="30px"
                height="30px"
                srcset
                class="rounded"
              />
            </a>
            <a href="https://www.linkedin.com/in/om-purwar-6ba4416a/">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQG0BXlfcwYwdg/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=ZFabVMIERRcN07HSefsMQjf1KJrolnNt41KhzHUyjhI"
                alt
                width="30px"
                height="30px"
                srcset
                class="rounded"
              />
            </a>
          </div>
        </div>
        <div class="row justify-content-center" hidden>
          <div class="text text-center font-10 font-montserrat">
            Mingled By -
            <a
              href="https://www.linkedin.com/in/utkarsh-pandey-17106560/"
            >Utkarsh Pandey</a>,
            <a href="https://www.linkedin.com/in/om-purwar-6ba4416a/">Om Purwar</a>
          </div>
        </div>
      
    </footer>
   
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FeedCard from "./feed-card.vue";
import {concept} from '../../model/concept.model';

export default Vue.extend({
  components: {
    FeedCard
  },
  data() {
    return {
      feeds: [new  concept("1",1,'Technical Analysis','1','1'),new  concept("1",2,'Fundamental Analysis','2','2'),new  concept("1",3,'Analysis','2','3')]
    };
  }
});
</script>