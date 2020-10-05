<template>
  <div class="container text-center align-middle mt-5">
    <h1 class="mt-5">{{ user.name }}</h1>
    <button @click="logoutHandler" class="btn btn-outline-primary mt-5">
      Logout
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomePage",
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    logoutHandler() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
</style>