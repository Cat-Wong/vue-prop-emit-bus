//子组件
<template>
  <div>
    <input type="text"  v-model="value" :onchange="change(value)"/>
  </div>
</template>

<script>
export default{
    name: "child",
    props: ["value"],
    
    methods: {
      change: function(value) {
        this.$emit("event",value);
      }
    },
    
    watch:{
    	value:function(newVal,oldVal){
    		 this.$emit("event",newVal);
    	}
    }
    
}
</script>