<template>
  <div>
    <HeaderApp />
    <div class="max-w-md mx-auto mt-16 w-96">
      <div class="bg-white shadow-lg p-6">
        <h4 class="text-center text-xl font-semibold mb-4 text-sky-400">
          SignUp
        </h4>

        <form @submit="Onsubmit" @reset="onReset">
          <div>
            <label for="name" class="text-sm">First Name</label>
            <div class="mt-1">
              <input
                id="name"
                type="text"
                v-model="form.user"
                placeholder="First Name"
                required
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div class="mt-4">
            <label for="email" class="text-sm">Email</label>
            <input
              id="email"
              type="email"
              v-model="form.mail"
              placeholder="Email"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            />
          </div>

          <div>
            <div class="mt-4">
              <label for="password" class="text-sm">Password</label>
              <div class="relative">
                <input
                  id="password"
                  :type="showPassword ? 'text' : 'password'"
                  v-model="form.password"
                  placeholder="Password"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                  :class="{
                    'border-red-500': errors.password,
                    'border-green-500': !errors.password,
                  }"
                />
                <span
                  v-if="!errors.password"
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-green-500"
                >
                  <i class="fas fa-check-circle"></i>
                </span>
                <span
                  v-if="errors.password"
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500"
                >
                  <i class="fas fa-exclamation-circle"></i>
                </span>
                <!-- แสดงไอคอนตา -->
                <span
                  class="absolute inset-y-0 right-6 flex items-center pr-3 cursor-pointer"
                  @click="showPassword = !showPassword"
                >
                  <i v-if="showPassword" class="fas fa-eye"></i>
                  <i v-else class="fas fa-eye-slash"></i>
                </span>
              </div>

              <!-- <span v-if="errors.password" class="text-red-500 text-sm mt-1">
    {{ errors.password }}
  </span> -->
              <div class="text-sm mt-1">
                <!-- ข้อความที่ไม่ผ่านเงื่อนไข -->
                <span
                  v-if="!validatePassword(form.password)"
                  class="text-red-500 text-sm mt-1"
                  >Include at least 1 lowercase character.</span
                >
                <span v-else class="text-green-500 text-sm mt-1"
                  >Include at least 1 lowercase character.</span
                >
                <br />
                <span
                  v-if="!vPass1(form.password)"
                  class="text-red-500 text-sm mt-1"
                  >Include at least 1 uppercase character.</span
                >
                <span v-else class="text-green-500 text-sm mt-1"
                  >Include at least 1 uppercase character.</span
                >
                <br />
                <span
                  v-if="!vPass2(form.password)"
                  class="text-red-500 text-sm mt-1"
                  >Include at least 1 number.</span
                >
                <span v-else class="text-green-500 text-sm mt-1"
                  >Include at least 1 number.</span
                >
                <br />
                <span
                  v-if="!vPass3(form.password)"
                  class="text-red-500 text-sm mt-1"
                  >1 special character in (!@#$%^&*.).</span
                >
                <span v-else class="text-green-500 text-sm mt-1"
                  >1 special character in (!@#$%^&*.).</span
                >
                <br />
                <span
                  v-if="!vPass4(form.password)"
                  class="text-red-500 text-sm mt-1"
                  >Password must have at least 8 characters.</span
                >
                <!-- ข้อความที่ผ่านเงื่อนไขทั้งหมด -->
                <span v-else class="text-green-500 text-sm mt-1"
                  >Password must have at least 8 characters</span
                >
              </div>

              <label for="confirmPassword" class="text-sm"
                >Confirm Password</label
              >
              <div class="relative">
                <input
                  id="confirmPassword"
                  :type="showConfirmPass ? 'text' : 'password'"
                  v-model="form.confirmPass"
                  placeholder="Confirm Password"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                  :class="{
                    'border-red-500': errors.confirmPass,
                    'border-green-500': !errors.confirmPass,
                  }"
                />
                <span
                  v-if="!errors.confirmPass"
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-green-500"
                >
                  <i class="fas fa-check-circle"></i>
                </span>
                <span
                  v-if="errors.confirmPass"
                  class="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500"
                >
                  <i class="fas fa-exclamation-circle"></i>
                </span>
                
                
                <!-- แสดงไอคอนตา -->
                <span
                  class="absolute inset-y-0 right-6 flex items-center pr-3 cursor-pointer"
                  @click="showConfirmPass = !showConfirmPass"
                >
                  <i v-if="showConfirmPass" class="far fa-eye"></i>
                  <i v-else class="far fa-eye-slash"></i>
                </span>
              </div>
              <div
                :class="{
                  'text-red-500': errors.confirmPass,
                  'text-green-500': !errors.confirmPass,
                }"
                class="text-sm mt-1"
              >
                <span
                  v-if="errors.confirmPass"
                  class="text-red-500 text-sm mt-1"
                >
                The password does not match.
                </span>
                <span v-else>
                  Confirm Password is valid.
                  <!-- เพิ่มข้อความที่คุณต้องการแสดง -->
                </span>
              </div>
            </div>
          </div>

          <div class="mt-4 grid justify-items-end">
            <button
              type="submit"
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              :disabled="hasErrors"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div class="mt-4 grid justify-items-end">
          <router-link to="/" class="text-blue-500">Back</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import HeaderApp from "@/components/HeaderApp.vue";

export default {
  name: "SignUp",
  components: { HeaderApp },
  data() {
    return {
      form: {
        user: "",
        l_name: "",
        mail: "",
        password: "",
        confirmPass: "",
      },
      errors: {
        password: true,
        confirmPass: true,
      },
      showPassword: false,
      showConfirmPass: false,
    };
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$router.push("/signup").catch(() => {});
      }
    });
  },
  methods: {
    Onsubmit(event) {
      event.preventDefault();
      if (this.errors.password || this.errors.confirmPass) {
        alert("Please fix the errors in the form before submitting.");
        return;
      }
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        this.form.mail,
        this.form.password,
        this.form.confirmPass
      )
        .then(async (userCredential) => {
          await updateProfile(userCredential.user, {
            displayName: this.form.mail,
          });
          this.$router.push("/").catch(() => {});
        })
        this.$store.dispatch("updateUser", {
        user: this.form.user,
        email: this.form.mail,
      });
        this.$router.push("/profile").catch((error) => {
          alert(error.message);
        });
    },
    onReset(event) {
      event.preventDefault();
      this.form.mail = "";
      this.form.password = "";
      this.form.confirmPass = "";
    },
    validatePassword(password) {
      const re = /^(?=.*[a-z])/;
      return re.test(password);
    },
    vPass1(password) {
      const r2 = /^(?=.*[A-Z])/;
      return r2.test(password);
    },
    vPass2(password) {
      const r3 = /^(?=.*[0-9])/;
      return r3.test(password);
    },
    vPass3(password) {
      const r4 = /^(?=.*[!@#$%^&*.])/;
      return r4.test(password);
    },
    vPass4(password) {
      const r5 = /^(?=.{8,})/;
      return r5.test(password);
    },
  },
  watch: {
    "form.password"(newValue) {
      let valid =
        this.validatePassword(newValue) &&
        this.vPass1(newValue) &&
        this.vPass2(newValue) &&
        this.vPass3(newValue) &&
        this.vPass4(newValue);
      this.errors.password = valid
        ? ""
        : "Password must have at least 8 characters.";
    },
    "form.confirmPass"(newValue) {
      if (newValue !== this.form.password) {
        this.errors.confirmPass = "The password does not match.";
      } else {
        this.errors.confirmPass = "";
      }
    },
  },
  computed: {
    hasErrors() {
      return !!this.errors.password || !!this.errors.confirmPass;
    },
  },
};
</script>

<style scoped>
@import "~@fortawesome/fontawesome-free/css/all.min.css";
</style>
