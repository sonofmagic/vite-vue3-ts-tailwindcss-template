<script setup lang="ts">
const { msg = 'icebreaker', obj } = defineProps<{
  msg?: string
  obj?: Record<string, string>
}>()
console.log(msg, obj)
obj.a = 1
</script>

<template>
  <div>
    <h1> {{ msg }}</h1>
    <div class="foo">
      Hello World
    </div>
  </div>
</template>

<style>
.foo {
  @apply bg-red-50;
  background-color: blue;
}
</style>
