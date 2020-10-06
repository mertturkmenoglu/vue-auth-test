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

      <div class="container-fluid max-container">
        <div class="card app-border">
          <div class="container mb-5 w-75">
            <form class="text-left" @submit.prevent="registerHandler">
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
                <label>Username</label>
                <input
                  type="text"
                  v-model="username"
                  class="form-control app-border"
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  v-model="name"
                  class="form-control app-border"
                  placeholder="Name"
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
              <div v-show="registerLoading" class="pt-3 text-center">
                <div class="spinner-border text-warning mt-3" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div v-show="registerError" class="pt-3 container w-75">
                <div class="alert alert-danger" role="alert">
                  <span>Can't register</span>
                </div>
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-outline-primary mt-3 app-outline-button"
                >
                  Register
                </button>
              </div>
            </form>
            <div class="mt-3">
              Already a user?
              <router-link to="/login" class="ml-1">Login</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data: () => ({
    email: "",
    username: "",
    name: "",
    password: "",
  }),
  methods: {
    registerHandler() {
      if (
        !this.email.length ||
        !this.username.length ||
        !this.name.length ||
        !this.password.length ||
        this.password < 6
      ) {
        this.$store.state.error = "Can't register";
        return;
      }

      this.$store.dispatch("register", {
        email: this.email,
        username: this.username,
        name: this.name,
        password: this.password,
      });
    },
  },
  computed: {
    registerLoading() {
      const value = this.$store.state.status.registering;
      if (value) {
        return value;
      } else {
        return false;
      }
    },
    registerError() {
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
@media (min-width: 600px) {
  .max-container {
    width: 500px;
  }
}

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