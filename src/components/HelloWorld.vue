<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

function inc() {
  count.value++
}

const buttonRef = ref<HTMLButtonElement>()

onMounted(() => {
  window.addEventListener('click', () => {
    console.log('---window--capture--false-------')
  })
  window.addEventListener('click', () => {
    console.log('---window--capture--true-------')
  }, true)
  document.addEventListener('click', () => {
    console.log('---document--capture--false-------')
  })
  document.addEventListener('click', () => {
    console.log('---document--capture--true-------')
  }, true)
  buttonRef.value?.addEventListener('click', () => {
    console.log('---button--capture--true-------')
  }, true)
  buttonRef.value?.addEventListener('click', () => {
    console.log('---button--capture--false-------')
  })
})

onBeforeUnmount(() => {

})
</script>

<template>
  <!-- onMounted -->
  <button ref="buttonRef" class="xxx">
    撒旦艰苦拉萨看来打开链接撒
  </button>
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
