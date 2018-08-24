//父组件
<template>
  <div>
    <input type="text" v-model="parentSelect"></input>
    
    <childDemo :value.sync="parentSelect"></childDemo>
    
  </div>
</template>
//
<script>
import childDemo from './child.vue'
export default {
    name: 'parent',
    components:{
      childDemo
    },
    
    data() {
      return {
        parentSelect: '',
      }
    },
    watch: {
			parentSelect: function(newVal, oldVal) {
				console.log(this.parentSelect)
			}
			
		}
}
</script>