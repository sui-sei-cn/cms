<script setup>
import { useUserStore } from '@/stores'
const userStore = useUserStore()
</script>

<template>
  <router-view></router-view>
  <div></div>
  <p>{{ userStore.token }}</p>
  <el-button @click="userStore.setToken(123)" type="primary">Primary</el-button>
  <el-button @click="userStore.removeToken()" type="success">Success</el-button>
</template>

<style scoped></style>
