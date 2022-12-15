<template>
  <div class="vct-nav">
    <el-row :gutter="15">
      <el-col :lg="12" :md="12" :sm="12" :xl="12" :xs="4">
        <div class="left-panel">
          <vct-fold />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "VctNav",
};
</script>

<style lang="scss" scoped>
.vct-nav {
  position: relative;
  height: $base-nav-height;
  padding-right: $base-padding;
  padding-left: $base-padding;
  overflow: hidden;
  user-select: none;
  background: $base-color-white;
  box-shadow: $base-box-shadow;
  .left-panel {
    display: flex;
    align-items: center;
    justify-items: center;
    height: $base-nav-height;
  }
}
</style>
