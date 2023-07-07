<template>
  <nav class="bg-black">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <a class="text-white text-xl" href="#">{{ $t('logo') }}</a>
      <div class="relative">
        <button
          class="flex items-center text-white focus:outline-none"
          @click="toggleDropdown"
        >
          {{ getCurrentLanguageLabel() }}
        </button>
        <ul
          v-if="isDropdownOpen"
          class="absolute mt-2 py-2 bg-white shadow-lg rounded-md"
        >
          <li>
            <a
              class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              href="#"
              @click="changeLanguage('th')"
            >
              {{ $t('thai') }}
            </a>
          </li>
          <li>
            <a
              class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              href="#"
              @click="changeLanguage('en')"
            >
              {{ $t('english') }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    getCurrentLanguageLabel() {
      return this.$i18n.locale === 'th' ? this.$t('thai') : this.$t('english');
    },
    changeLanguage(locale) {
      this.$root.$i18n.locale = locale;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>
