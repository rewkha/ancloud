<template>
  <el-container>
    <el-aside width="200px">
      <div class="logo">AnCloud</div>
    </el-aside>
    <el-container>
      <el-header></el-header>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

export default {
  components: {
    AppLogo
  }
};

</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  .el-container {
    min-height: 100vh;
  }

  .logo {
    padding: 10px;
    line-height: 40px;
    box-sizing: border-box;
  }

</style>
