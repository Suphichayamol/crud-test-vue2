<template>
  <div class="max-w-md mx-auto mt-16 w-96">
    <div class="bg-white shadow-lg p-6">
      <h4 class="text-center text-xl font-semibold mb-4 text-orange-500">
        Evenbus 1
      </h4>
      <TestEvenbus1 />
      <hr />
      <h4 class="text-center text-xl font-semibold mb-4 text-orange-500">
        Evenbus 2
      </h4>
      <TestEvenbus2 />
    </div>
  </div>
</template>
  
  <script>
import TestEvenbus1 from "./TestEvenbus1";
import TestEvenbus2 from "./TestEvenbus2";

export default {
  components: {
    TestEvenbus1,
    TestEvenbus2,
  },
};
</script>