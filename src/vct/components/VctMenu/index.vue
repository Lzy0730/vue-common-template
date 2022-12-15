<template>
  <component
    :is="menuComponent"
    v-if="item.meta && !item.meta.hidden"
    :item-or-menu="item"
  >
    <template v-if="item.children && item.children.length">
      <vct-menu
        v-for="route in item.children"
        :key="route.path"
        :item="route"
      />
    </template>
  </component>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "VctMenu",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      menuComponent: "VctMenuItem",
    };
  },
  computed: {
    ...mapGetters({
      collapse: "settings/collapse",
    }),
  },
  created() {
    if (
      this.item.children &&
      this.item.children.some((route) => {
        return route.meta && route.meta.hidden !== true;
      })
    )
      this.menuComponent = "VctSubmenu";
  },
};
</script>
