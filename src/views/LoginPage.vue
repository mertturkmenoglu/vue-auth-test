<template>
  <div class="container">
    <div class="card text-center pt-5 mb-5 border-0">
      <img
        src="../assets/icon_primary.svg"
        class="rounded mx-auto pt-3"
        width="128"
        height="128"
      />
      <div class="lead py-3 app-name">
        <h1 class="app-name">Vevericka</h1>
      </div>

      <div class="container-fluid">
        <div class="card app-border">
          <div class="container mb-5 w-75">
            <form class="text-left" @submit.prevent="loginHandler">
              <div class="form-group mt-5">
                <label>Email address</label>
                <input
                  type="email"
                  v-model="email"
                  class="form-control app-border"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control app-border"
                  placeholder="Password"
                />
              </div>
              <div v-show="loginLoading" class="pt-3 text-center">
                <div class="spinner-border text-warning mt-3" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div v-show="loginError" class="pt-3 container w-75">
                <div class="alert alert-danger" role="alert">
                  <span>Can't login</span>
                </div>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-outline-primary mt-3 app-outline-button"
                >
                  Login
                </button>
              </div>
            </form>
            <div class="mt-3">
              New user?
              <router-link to="/register" class="ml-1">Register</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    loginHandler() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    loginLoading() {
      const value = this.$store.state.status.loggingIn;
      if (value) {
        return value;
      } else {
        return false;
      }
    },
    loginError() {
      const value = this.$store.state.error;
      if (value) {
        return value;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.app-name {
  color: #dd2c00;
}

.app-border {
  border-color: #dd2c00;
}

.app-outline-button {
  border-color: #dd2c00;
  color: #dd2c00;
}

.app-outline-button:hover {
  background-color: #dd2c00;
  color: #fff;
}
</style>