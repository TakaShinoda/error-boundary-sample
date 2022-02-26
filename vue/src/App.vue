<script setup lang="ts">
import VErrorBoundary from 'vue-error-boundary'
import HelloWorld from './components/HelloWorld.vue'
import ErrorFallback from './components/ErrorFallback.vue'

const errorFallback = ErrorFallback
const handleError = (err: any) => {
  console.log(err.message)
}
</script>

<template>
  <VErrorBoundary :fall-back="errorFallback" :on-error="handleError">
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </VErrorBoundary>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
