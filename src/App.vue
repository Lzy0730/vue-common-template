<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { loginMode } from "@/config";
import { mapActions } from "vuex";
export default {
  created() {
    if (!loginMode) this.setRoutes();
  },
  methods: {
    ...mapActions({
      setRoutes: "routes/setRoutes",
    }),
  },
};
</script>

<style lang="scss"></style>
