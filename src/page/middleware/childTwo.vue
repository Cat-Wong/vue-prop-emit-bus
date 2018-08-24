//子组件
<template>
	<div>
		<input type="text" v-model="oneVal"/>
	</div>
</template>

<script>
	 import Bus from './bus.js'
	export default {
		name: "childTwo",
		data(){
			return {
				oneVal:''
			}
		},
		created() {
			var vm = this;
			Bus.$on('say', (arg)=> {
				vm.oneVal = arg;
			})
		}
	}
</script>