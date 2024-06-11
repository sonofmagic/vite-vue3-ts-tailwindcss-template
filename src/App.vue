<script setup lang="ts">
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

function alawaysPending() {
  return new Promise(() => {

  })
}

async function asyncAlawaysPending() {
  return new Promise(() => {

  })
}

function returnNumber() {
  return 1
}
async function asyncReturnNumber() {
  return 1
}

async function asyncReturnNumber0() {
  return await 1
}

async function asyncReturnNumber1() {
  return await Promise.resolve(1)
}

onMounted(() => {
  console.log('--------------------')
  console.log(alawaysPending(), asyncAlawaysPending())
  console.log('--------------------')
  console.log(returnNumber(), asyncReturnNumber(), asyncReturnNumber0(), asyncReturnNumber1())
})

onMounted(async () => {
  console.log(await returnNumber(), await asyncReturnNumber(), await asyncReturnNumber0(), await asyncReturnNumber1())
})

function throwError() {
  throw new Error('throwError')
}

async function asyncThrowError() {
  throw new Error('asyncThrowError')
}

async function asyncRejectError() {
  return Promise.reject(new Error('asyncRejectError'))
}

onMounted(async () => {
  try {
    throwError()
  }
  catch (error) {
    console.log(error)
  }

  try {
    await asyncThrowError()
  }
  catch (error) {
    console.log(error)
  }

  try {
    await asyncRejectError()
  }
  catch (error) {
    console.log(error)
  }

  try {
    await asyncRejectError()
  }
  catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
