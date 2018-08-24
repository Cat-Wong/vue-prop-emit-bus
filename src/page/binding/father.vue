//父组件
<template>
  <div>
    <input type="text" v-model="parentSelect"></input>
    <childDemo :value="parentSelect" @event="change"></childDemo>
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
    
    methods: {
      change: function(value){
        this.parentSelect = value;
      }
    },
    
    watch:{
    	value:function(newVal,oldVal){
    		 this.parentSelect = newVal;
    	}
    }
    
    
    
}
</script>