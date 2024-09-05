<script setup lang="ts">
const { msg = 'icebreaker', obj } = defineProps<{
  msg?: string
  obj?: Record<string, string>
}>()
console.log(msg, obj)
obj.a = 1
</script>

<template>
  <div class="text-base">
    <h1> {{ msg }}</h1>
    <div>Hello World</div>
  </div>
</template>

<style scoped></style>
