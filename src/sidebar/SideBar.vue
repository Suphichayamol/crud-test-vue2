<template>
    <div class="sidebar" :class="{ 'w-[200px]' : !collapsed, 'w-[60px]' : collapsed }">
      <h1>
        <span v-if="collapsed">
          <div class="text-center">Menu</div>
        </span>
        <span v-else>
          Menu
        </span>
      </h1>
      <SideBarLink to="/crud" v-if="!collapsed">Crud</SideBarLink>
      <SideBarLink to="/search" v-if="!collapsed">ShowData</SideBarLink>
      <SideBarLink to="/chart" v-if="!collapsed" >DashBorad</SideBarLink>
      <SideBarLink to="/photo" v-if="!collapsed" >Photo</SideBarLink>
      <SideBarLink to="/event" v-if="!collapsed" >TestEventBus</SideBarLink>
      <SideBarLink to="/" v-if="!collapsed">Logout</SideBarLink>
      <span
        class="collapse-icon absolute bottom-0 text-white transition duration-200"
        :class="{ 'rotate-180' : collapsed }"
        @click="toggleSidebar"
      >
      
        <i class="fas fa-angle-double-left"></i>
      </span>
    </div>
  </template>
  
  <script>
  import SideBarLink from './SideBarLink'
  import { ref } from 'vue'
  
  export default {
    components: { SideBarLink },
    setup() {
      const collapsed = ref(false)
  
      const toggleSidebar = () => {
        collapsed.value = !collapsed.value
      }
  
      return {
        collapsed,
        toggleSidebar,
      }
    },
  }
  </script>
  
  <style>
  .sidebar {
    color: rgb(100, 100, 101);
    background-color: var(--sidebar-bg-color);
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
  
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .collapse-icon {
    position: absolute;
    bottom: 0;
    color: rgba(255, 255, 255, 0.7);
    transition: 0.2s linear;
    font-size: 2em; /* เพิ่มค่า font-size ตามต้องการ */
  }
  </style>
  
  <style>
  :root {
    --sidebar-bg-color: #212529;
    --sidebar-item-hover: #6438a1;
    --sidebar-item-active: #282767;
  }
  </style>
  