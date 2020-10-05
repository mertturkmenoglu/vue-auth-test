<template>
  <div class="container text-center align-middle mt-5">
    <button @click="logoutHandler" class="btn btn-outline-primary">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    logoutHandler() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
</style>