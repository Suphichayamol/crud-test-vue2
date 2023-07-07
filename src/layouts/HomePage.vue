<!-- <template>
  <div>
    <HeaderApp />
  <div class="flex justify-center items-center h-screen">
    <div class="w-96">
      <div class="bg-white shadow-lg p-6">
        <form @submit="onSubmit" class="space-y-4">
          <h4 class="text-center text-xl font-semibold mb-4 text-sky-400">{{ $t('Login') }}</h4>
          <div>
            <label for="exampleFormControlInput1" class="block text-sm font-medium text-gray-700">{{ $t('User') }}:</label>
            <input
              type="email"
              :placeholder="$t('User')"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              id="exampleFormControlInput1"
              v-model="form.email"
              required
            />
          </div>
          <div>
            <label for="inputPassword5" class="block text-sm font-medium text-gray-700">{{ $t('Password') }}:</label>
            <input
              type="password"
              :placeholder="$t('Password')"
              class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              v-model="form.password"
            />
          </div>
          <div class="text-center">
            <button type="submit" class="w-full py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">{{ $t('SignIn') }}</button>
            <router-link to="/signup" class="block mt-2 text-sm font-medium text-blue-500 hover:text-blue-600">{{ $t('Sign Up') }}</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>



<script>
import HeaderApp from '@/components/HeaderApp.vue';

export default {
  components: { HeaderApp },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (this.form.email === 'y@gmail.com' && this.form.password === '123456') {
        console.log('Login successful');
        this.$router.push('/crud');
      } else {
        console.log('Login failed');
        alert('Email or Password not found');
      }
    },
  },
};
</script> -->

<template>
  <div>
    <HeaderApp />
    <div class="max-w-md mx-auto mt-16 w-96">
      <div class="bg-white shadow-lg p-6">
        <h4 class="text-center text-xl font-semibold mb-4 text-sky-500">
          {{ $t("Login") }}
        </h4>

        <form @submit="onSubmit">
          <div class="mt-4">
            <label for="email" class="text-sm">{{ $t("User") }}:</label>
            <input
              id="email"
              type="email"
              v-model="form.mail"
              :placeholder="$t('User')"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            />
          </div>
          <div class="mt-4">
            <label for="password" class="text-sm">{{ $t("Password") }}:</label>
            <input
              id="password"
              type="password"
              v-model="form.pass"
              :placeholder="$t('Password')"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            />
            <!-- <span class="invalid">Password should be at least 8 characters</span> -->
          </div>
          <div class="mt-4 grid justify-items-end">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {{ $t("Login") }}
            </button>
            <router-link
              to="/signup"
              class="block mt-2 text-sm font-medium text-blue-500 hover:text-blue-600"
              >{{ $t("Sign Up") }}</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import HeaderApp from "@/components/HeaderApp.vue";

export default {
  name: "HomePage",
  components: { HeaderApp },
  data() {
    return {
      form: {
        mail: "",
        pass: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.form.mail, this.form.pass)
        .then(() => {
          this.$router.push("/crud").catch(() => {});
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style></style>
