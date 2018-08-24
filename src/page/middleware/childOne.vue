//子组件
<template>
	<div>
		<input type="text" v-model="oneVal"/>
	</div>
</template>

<script>
	 import Bus from './bus.js'
	export default {
		name: "childOne",
		data(){
			return {
				oneVal:''
			}
		},
		watch:{
			oneVal:function(nVal,oVal){
				this.oneVal = nVal;
				Bus.$emit('say',this.oneVal);
			}
		}
	}
</script>