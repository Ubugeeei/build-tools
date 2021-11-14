(function(Vue) {
	"use strict";

	function _interopDefaultLegacy(e) {
		return e && typeof e === "object" && "default" in e
			? e
			: { default: e };
	}

	var Vue__default = /*#__PURE__*/ _interopDefaultLegacy(Vue);

	var script$1 = {
		data() {
			return {
				count: 0,
			};
		},
		methods: {
			onClick() {
				this.count++;
				this.$emit("click");
			},
		},
	};

	function render$1(_ctx, _cache, $props, $setup, $data, $options) {
		return (
			Vue.openBlock(),
			Vue.createElementBlock(
				"button",
				{
					onClick:
						_cache[0] ||
						(_cache[0] = (...args) =>
							$options.onClick && $options.onClick(...args)),
				},
				" ボタンを押してください(" +
					Vue.toDisplayString($data.count + 1) +
					"回目) ",
				1 /* TEXT */
			)
		);
	}

	script$1.render = render$1;
	script$1.__file = "src/components/Button.vue";

	var script = {
		name: "App",
		components: {
			Button: script$1,
		},
		methods: {
			onClick() {
				console.log("Button clicked!");
			},
		},
	};

	const _hoisted_1 = /*#__PURE__*/ Vue.createElementVNode(
		"p",
		null,
		"Hello, World!",
		-1 /* HOISTED */
	);

	function render(_ctx, _cache, $props, $setup, $data, $options) {
		const _component_Button = Vue.resolveComponent("Button");

		return (
			Vue.openBlock(),
			Vue.createElementBlock("div", null, [
				_hoisted_1,
				Vue.createVNode(
					_component_Button,
					{ onClick: $options.onClick },
					null,
					8 /* PROPS */,
					["onClick"]
				),
			])
		);
	}

	script.render = render;
	script.__file = "src/App.vue";

	new Vue__default["default"]({
		el: "#app", // アプリをマウントする要素(セレクタで指定)
		components: { App: script }, // Appというコンポーネントを使うよ、という宣言
		template: "<app/>", // el(今回は#app)の中に表示する内容
	});
	Vue__default["default"].component("App", script);
})(Vue);
//# sourceMappingURL=bundle.js.map
