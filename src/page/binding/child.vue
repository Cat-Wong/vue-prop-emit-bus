//子组件
<template>
	<div>
		<input type="text" v-model="childVal" />
	</div>
</template>

<script>
	export default {
		name: "child",
		props: ["value"],
		data() {
			return {
				childVal: this.value
			}
		},
		watch: {
			'value': function(newVal, oldVal) {
				this.childVal = newVal;
			},
			
			childVal: function(newVal, oldVal) {
				this.$emit("update:value", newVal);
			}
			
		}

	}
</script>