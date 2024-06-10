import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { NodeTypes, createStructuralDirectiveTransform, traverseNode } from '@vue/compiler-core'
import type { TemplateChildNode } from '@vue/compiler-core'

// v-throttle
// NodeTypes.ATTRIBUTE
// NodeTypes.DIRECTIVE
const enhanceThrottle = createStructuralDirectiveTransform(/^(throttle)$/, (node, dir, context) => {
  console.log(node, dir, context)

  return () => {
    // if (!node.codegenNode) {
    //   traverseNode(node, context)
    // }
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        nodeTransforms: [
          enhanceThrottle,
        ],
      },
    },
  })],
})
