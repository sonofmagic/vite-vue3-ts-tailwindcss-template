import { defineComponent as _defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "App",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { HelloWorld };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { createElementVNode as _createElementVNode, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";
import _imports_0 from "/vite.svg";
const _withScopeId = (n) => (_pushScopeId("data-v-7a7a37b1"), n = n(), _popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ _createElementVNode(
  "div",
  null,
  [
    /* @__PURE__ */ _createElementVNode("a", {
      href: "https://vitejs.dev",
      target: "_blank"
    }, [
      /* @__PURE__ */ _createElementVNode("img", {
        src: _imports_0,
        class: "logo",
        alt: "Vite logo"
      })
    ]),
    /* @__PURE__ */ _createElementVNode("a", {
      href: "https://vuejs.org/",
      target: "_blank"
    }, [
      /* @__PURE__ */ _createElementVNode("img", {
        src: "/src/assets/vue.svg",
        class: "logo vue",
        alt: "Vue logo"
      })
    ])
  ],
  -1
  /* HOISTED */
));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _hoisted_1,
      _createVNode($setup["HelloWorld"], { msg: "Vite + Vue" })
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
import "/Users/icebreaker/Documents/GitHub/vite-vue3-ts-tailwindcss-template/src/App.vue?vue&type=style&index=0&scoped=7a7a37b1&lang.css";
_sfc_main.__hmrId = "7a7a37b1";
typeof __VUE_HMR_RUNTIME__ !== "undefined" && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main);
import.meta.hot.accept((mod) => {
  if (!mod)
    return;
  const { default: updated, _rerender_only } = mod;
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render);
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated);
  }
});
import _export_sfc from "\\0plugin-vue:export-helper";
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7a7a37b1"], ["__file", "/Users/icebreaker/Documents/GitHub/vite-vue3-ts-tailwindcss-template/src/App.vue"]]);