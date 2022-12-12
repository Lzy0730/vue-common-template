<template>
  <el-scrollbar
    class="vct-column-bar-container"
    :class="{
      'is-collapse': collapse,
      ['vct-column-bar-container-' + theme.columnStyle]: true,
    }"
  >
    <vct-logo />
    <el-tabs
      v-model="extra.first"
      tab-position="left"
      @tab-click="handleTabClick"
    >
      <template v-for="(route, index) in handleRoutes">
        <el-tab-pane :key="index + route.name" :name="route.name">
          <template slot="label">
            <div
              class="vct-column-grid"
              :class="{
                ['vct-column-grid-' + theme.columnStyle]: true,
              }"
              :title="route.meta.title"
            >
              <div>
                <vct-icon
                  v-if="route.meta.icon"
                  :icon="route.meta.icon"
                  :is-custom-svg="route.meta.isCustomSvg"
                />
                <span>
                  {{ route.meta.title }}
                </span>
              </div>
            </div>
          </template>
        </el-tab-pane>
      </template>
    </el-tabs>
    <el-menu
      :default-active="activeMenu"
      mode="vertical"
      :unique-opened="uniqueOpened"
    >
      <el-divider>
        {{ handleGroupTitle }}
      </el-divider>
      <template v-for="route in handlePartialRoutes">
        <!-- <vab-menu
          v-if="route.meta && !route.meta.hidden"
          :key="route.path"
          :item="route"
        /> -->
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import { openFirstMenu, uniqueOpened } from "@/config";
import { handleActivePath, handleMatched } from "@/utils/routes";
export default {
  name: "VctColumnBar",
  data() {
    return {
      activeMenu: "",
      uniqueOpened,
    };
  },
  computed: {
    ...mapGetters({
      extra: "settings/extra",
      theme: "settings/theme",
      routes: "routes/routes",
      activeName: "routes/activeName",
      collapse: "settings/collapse",
    }),
    handleRoutes() {
      return this.routes.filter(
        (route) => route.meta && route.meta.hidden !== true
      );
    },
    handleActiveMenu() {
      return this.routes.find((route) => route.name === this.extra.first);
    },
    handlePartialRoutes() {
      const activeMenu = this.handleActiveMenu;
      return activeMenu ? activeMenu.children : [];
    },
    handleGroupTitle() {
      const activeMenu = this.handleActiveMenu;
      return activeMenu ? activeMenu.meta.title : "";
    },
  },
  watch: {
    $route: {
      handler(route) {
        this.activeMenu = handleActivePath(route);
        console.log(route);
        const firstMenu = route.matched[0].name;
        if (this.extra.first !== firstMenu) {
          this.extra.first = firstMenu;
          this.handleTabClick(true);
        }
      },
      immediate: true,
    },
    activeName: {
      handler(val) {
        const matched = handleMatched(this.routes, val);
        this.extra.first = matched[0].name;
        this.activeMenu = matched[matched.length - 1].path;
      },
    },
  },
  methods: {
    handleTabClick(handler) {
      if (handler !== true && openFirstMenu) {
        const { redirect } = this.handleActiveMenu;
        this.$router.push(redirect ? redirect : this.handleActiveMenu);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin active {
  &:hover {
    color: $base-color-blue;
    background-color: $base-column-second-menu-background-active !important;

    i,
    svg {
      color: $base-color-blue;
    }
  }

  &.is-active {
    color: $base-color-blue;
    background-color: $base-column-second-menu-background-active !important;
  }
}

.vct-column-bar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: $base-left-menu-width;
  height: 100vh;
  overflow: hidden;
  background: $base-column-second-menu-background;
  box-shadow: $base-box-shadow;

  ::v-deep {
    * {
      transition: $base-transition;
    }
  }

  &-card {
    :deep() {
      .el-tabs + .el-menu {
        left: $base-left-menu-width-min;
        width: $base-left-menu-width - $base-left-menu-width-min;
        border: 0;
      }
    }
  }
  &-card {
    :deep() {
      .el-tabs {
        .el-tabs__item {
          padding: 5px !important;

          .vct-column-grid {
            width: $base-left-menu-width-min - 10 !important;
            height: $base-left-menu-width-min - 10 !important;
            border-radius: 5px;
          }

          &.is-active {
            background: transparent !important;

            .vct-column-grid {
              background: $base-color-blue;
            }
          }
        }
      }

      .el-tabs + .el-menu {
        left: $base-left-menu-width-min + 10;
        width: $base-left-menu-width - $base-left-menu-width-min - 20;
      }

      .el-submenu .el-submenu__title,
      .el-menu-item {
        min-width: 180px;
        border-radius: 5px;
      }
    }
  }
  .vct-column-grid {
    display: flex;
    align-items: center;
    width: $base-left-menu-width-min;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;

    &-card {
      justify-content: center;
      height: $base-left-menu-width-min;

      > div {
        svg {
          position: relative;
          top: 8px;
          display: block;
          width: $base-font-size-default + 4;
          height: $base-font-size-default + 4;
        }

        [class*="ri-"] {
          display: block;
          height: 20px;
        }
      }
    }
  }

  :deep() {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    .el-tabs {
      position: fixed;

      .el-tabs__header.is-left {
        margin-right: 0 !important;

        .el-tabs__nav-wrap.is-left {
          margin-right: 0 !important;
          background: $base-column-first-menu-background;

          .el-tabs__nav-scroll {
            height: 100%;
            overflow-y: auto;

            &::-webkit-scrollbar {
              width: 0px;
              height: 0px;
            }
          }
        }
      }

      .el-tabs__nav {
        height: calc(100vh - #{$base-logo-height});
        background: $base-column-first-menu-background;
      }

      .el-tabs__item {
        height: auto;
        padding: 0;
        color: $base-color-white;

        &.is-active {
          background: $base-color-blue;
        }
      }
    }

    .el-tabs__active-bar.is-left,
    .el-tabs--left .el-tabs__nav-wrap.is-left::after {
      display: none;
    }

    .el-menu {
      border: 0;

      .el-divider {
        margin: 0 0 $base-margin 0;
        background-color: #f6f6f6;

        &__text {
          color: $base-color-black;
        }
      }

      .el-menu-item,
      .el-submenu__title {
        height: $base-menu-item-height;
        overflow: hidden;
        line-height: $base-menu-item-height;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;

        @include active;
      }
    }
  }

  &.is-collapse {
    ::v-deep {
      width: 0;
    }
  }
}
</style>
