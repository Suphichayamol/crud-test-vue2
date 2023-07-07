<template>
  <div class="flex">
    <SideBar>
      <div :style="{ marginLeft: sidebarWidth }"></div>
      <HeaderApp />
    </SideBar>
  </div>
</template>

<script>
import SideBar from "@/sidebar/SideBar.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import { sidebarWidth } from "@/sidebar/state";

export default {
  components: { SideBar, HeaderApp },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style scoped>
  .br-silde {
    display: grid;
    grid-template-columns: auto auto auto;
  }
</style>
