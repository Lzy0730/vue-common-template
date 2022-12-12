<template>
  <div class="vct-app-main">
    <section>
      <router-view />
      <!-- <vab-router-view /> -->
    </section>
    <vct-footer />
  </div>
</template>

<script>
export default {
  name: "VctAppMain",
};
</script>
