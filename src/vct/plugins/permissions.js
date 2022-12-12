import router from "@/router";
import store from "@/store";

router.beforeEach(async (to, from, next) => {
  // if (!loginMode) await store.dispatch("routes/setRoutes");
  next();
});
