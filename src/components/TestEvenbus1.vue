<template>
  <div>
    <input
      type="text"
      v-model="msg"
      class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <div class="flex justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 mt-5 mb-5 rounded-md"
        @click="SendMsg"
      >
        Send msg
      </button>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../eventbus";
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    SendMsg() {
      EventBus.$emit("get-msg", this.msg);
    },
  },
};
</script>
