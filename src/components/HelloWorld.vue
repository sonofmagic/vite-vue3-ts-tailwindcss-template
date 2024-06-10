<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

function inc() {
  count.value++
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button v-throttle type="button" @click="count++" @dblclick="count += 2">
      raw count is {{ count }}
    </button>
    <button v-throttle type="button" @click="inc">
      inc count is {{ count }}
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
