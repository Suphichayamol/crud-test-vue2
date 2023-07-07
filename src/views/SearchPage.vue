<template>
  <div>
    <HeaderApp />
    <div class="flex justify-center">
      <SideBar />
      <div class="col-span-6">
        <div class="bg-white shadow p-4 mt-3">
          <h4 class="text-center text-xl font-semibold mb-4 text-sky-400">
            Search
          </h4>

          <form class="flex mt-5" role="search">
            <input
              v-model="prefix"
              class="w-full border border-gray-300 rounded py-2 px-3 mr-2 focus:outline-none focus:border-blue-500"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </form>

          <table class="table-auto w-full mt-3">
            <thead>
              <tr>
                <th class="px-7 py-3">Name</th>
                <th class="px-7 py-3">Surname</th>
                <th class="px-7 py-3">Phone</th>
                <th class="px-7 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in filteredItems"
                :key="item.id"
                class="odd:bg-white even:bg-slate-50"
              >
                <td class="border px-4 py-2">{{ item.f_name }}</td>
                <td class="border px-4 py-2">{{ item.l_name }}</td>
                <td class="border px-4 py-2">{{ item.phone }}</td>
                <td class="border px-4 py-2">
                  <button
                    @click="removeItem(index)"
                    class="bg-red-500 hover:bg-red-300 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <p class="mt-4">Total Items: {{ totalItems }}</p>
        </div>
        <button
          @click="downloadCSV"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded mt-10"
        >
          Download CSV
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/sidebar/SideBar.vue";
import HeaderApp from "@/components/HeaderApp.vue";

import { mapState } from "vuex";
import { unparse as convertToCSV } from "papaparse";

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
    ...mapState(["items"]), // ระบุ state 'items' เข้ากับคอมโพเนนต์ Vue
  },
  mounted() {
    // Load items from localStorage on component mount
    this.items = JSON.parse(localStorage.getItem("items")) || [];
  },
  methods: {
    removeItem(index) {
      this.items.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    hasValidInput() {
      return this.f_name.trim() && this.l_name.trim() && this.phone.trim();
    },
    downloadCSV() {
      const csvData = convertToCSV(this.items);
      const blob = new Blob(["\ufeff" + csvData], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);

      // Create a link for downloading the CSV
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.csv';

      // Add the link to the DOM and click it to initiate the download
      document.body.appendChild(a);
      a.click();

      // Remove the link after the download is complete
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    },
  },
};
</script>

<style></style>
