import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "HelloWorld",
  props: {
    msg: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const count = ref(0);
    function inc() {
      count.value++;
    }
    const __returned__ = { count, inc };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";
const _withScopeId = (n) => (_pushScopeId("data-v-e17ea971"), n = n(), _popScopeId(), n);
const _hoisted_1 = { class: "card" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createElementVNode(
        "h1",
        null,
        _toDisplayString($props.msg),
        1
        /* TEXT */
      ),
      _createElementVNode("div", _hoisted_1, [
        _createElementVNode(
          "button",
          {
            type: "button",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.count++),
            onDblclick: _cache[1] || (_cache[1] = ($event) => $setup.count += 2)
          },
          " raw count is " + _toDisplayString($setup.count),
          33
          /* TEXT, NEED_HYDRATION */
        ),
        _createElementVNode(
          "button",
          {
            type: "button",
            onClick: $setup.inc
          },
          " inc count is " + _toDisplayString($setup.count),
          1
          /* TEXT */
        )
      ])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
import "/Users/icebreaker/Documents/GitHub/vite-vue3-ts-tailwindcss-template/src/components/HelloWorld.vue?vue&type=style&index=0&scoped=e17ea971&lang.css";
_sfc_main.__hmrId = "e17ea971";
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
export default /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e17ea971"], ["__file", "/Users/icebreaker/Documents/GitHub/vite-vue3-ts-tailwindcss-template/src/components/HelloWorld.vue"]]);