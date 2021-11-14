<template>
	<button @click="onClick">
		ボタンを押してください({{ count + 1 }}回目)
	</button>
</template>

<script>
export default {
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
</script>

<style lang="css">
button {
  height: 50px;
  width: 250px;
}
</style>
