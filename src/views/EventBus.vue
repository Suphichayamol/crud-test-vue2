<template>
  <div>
    <HeaderApp />
    <div>
        <SideBar />

        <div>
    <TestEven />
    <h1>TestEven</h1>
  </div>
  </div>
  </div>
</template>

<script>
import SideBar from "@/sidebar/SideBar.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import TestEven from "@/components/TestEven.vue";

  export default {

    components: {
        TestEven,
        SideBar,
        HeaderApp
    }
}
</script>

<style>

</style>