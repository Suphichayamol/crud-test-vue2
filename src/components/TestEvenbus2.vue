<template>
  <div>
    <h4 class="text-center text-xl font-semibold mb-4 text-indigo-500">
      {{ mymsg }}
    </h4>
  </div>
</template>
  
  <script>
import { EventBus } from "../eventbus";
export default {
  data() {
    return {
      mymsg: "This is EventBus2",
    };
  },
  mounted() {
    //listening for the custom event
    EventBus.$on("get-msg", (msg) => {
      this.mymsg = msg;
    });
  },
};
</script>