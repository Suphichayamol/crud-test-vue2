<template>
  <div>
      <HeaderApp />
  <div class="flex justify-center">
    <div class="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
      <SideBar />
      <div class="mt-4 flex justify-center">
        <div class="w-96 mt-10">
          <div class="bg-white shadow p-4">
            <h4 class="text-center text-xl font-semibold mb-4 text-sky-400">Information</h4>
            <form @submit.prevent="addItem">
              <div class="mb-6">
                <label for="f_name" class="block mb-2 text-gray-800">Name:</label>
                <input
                  class="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                  id="f_name"
                  ref="f_name"
                  v-model="f_name"
                  placeholder="Firstname"
                />
              </div>
              <div class="mb-6">
                <label for="l_name" class="block mb-2 text-gray-800">Surname:</label>
                <input
                  class="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                  id="l_name"
                  placeholder="Surname"
                  ref="l_name"
                  v-model="l_name"
                />
              </div>
              <div class="mb-6">
                <label for="phone" class="block mb-2 text-gray-800">Phone:</label>
                <input
                  class="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                  id="phone"
                  placeholder="Phone"
                  ref="phone"
                  v-model="phone"
                />
              </div>
              <div class="flex justify-end">
                <button class="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
import SideBar from "@/sidebar/SideBar.vue";
import HeaderApp from "@/components/HeaderApp.vue";
// import axios from "axios";

export default {
  components: { SideBar, HeaderApp },
  data() {
    return {
      f_name: "",
      l_name: "",
      phone: "",
      selected: "",
      prefix: "",
      items: [],
    };
  },
  watch: {
    selected(name) {
      [this.f_name, this.l_name, this.phone] = name.split(" ");
    },
  },
  computed: {
    totalItems() {
      return this.filteredItems.length;
    },
    filteredItems() {
      return this.items.filter((item) =>
        `${item.f_name} ${item.l_name} ${item.phone}`
          .toLowerCase()
          .includes(this.prefix.toLowerCase())
      );
    },
  },
  mounted() {
    // Load items from localStorage on component mount
    this.items = JSON.parse(localStorage.getItem("items")) || [];
  },
  methods: {
    addItem() {
      const data = {
        f_name: this.f_name,
        l_name: this.l_name,
        phone: this.phone,
      };
      const exists = this.items.some((item) => {
        return (
          item.f_name.toLowerCase() === data.f_name.toLowerCase() &&
          item.l_name.toLowerCase() === data.l_name.toLowerCase() &&
          item.phone.toLowerCase() === data.phone.toLowerCase()
        );
      });

      if (exists) {
        alert("already exists");
        return;
      }

      this.items.push(data);
      this.f_name = this.l_name = this.phone = "";
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    hasValidInput() {
      return this.f_name.trim() && this.l_name.trim() && this.phone.trim();
    },
  },
};

</script>

<style scoped>

</style>
