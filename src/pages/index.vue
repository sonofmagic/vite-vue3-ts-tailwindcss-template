<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

const obj = ref({})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline custom-div">
      Hello world!
    </h1>
    <HelloWorld msg="Vite + Vue" :obj="obj" />
  </div>
</template>

<style scoped></style>
