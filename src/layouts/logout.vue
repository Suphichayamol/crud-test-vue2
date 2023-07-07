<template>
    <button @click="signined = false" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-sm">
      Logout
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        signined: true,
      };
    },
  };
  </script>
  
  <style>
  
  </style>
  