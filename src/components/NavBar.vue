<template>
    <div id="NavBar">
        <h1>NavBar Component</h1>
        <p>{{  username }}</p>
    </div>
</template>

<script>
export default{
    name:'NavBar',
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{
        username(){
            return this.$store.state.name + " " + this.$store.state.last_name;
        },
    },
    watch:{},
}
</script>

<style scoped>
#NavBar{
    background-color: chartreuse;
}
</style>