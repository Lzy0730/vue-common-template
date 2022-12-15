<template>
  <transition mode="out-in" name="fade-transform">
    <keep-alive :include="keepAliveNameList" :max="keepAliveMaxNum">
      <router-view :key="routerKey" />
    </keep-alive>
  </transition>
</template>

<script>
import { keepAliveMaxNum } from "@/config";
import { handleActivePath } from "@/utils/routes";

export default {
  name: "VctRouterView",
  data() {
    return {
      routerKey: null,
      keepAliveMaxNum,
      keepAliveNameList: [],
    };
  },
  watch: {
    $route: {
      handler() {
        this.routerKey = handleActivePath(this.$route, true);
      },
      immediate: true,
    },
  },
};
</script>
