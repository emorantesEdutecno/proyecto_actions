<template>
    <div id="ProductCount">
        <h1>Product Count Component</h1>
        <h3>Productos: {{  conteo }}</h3>
    </div>
</template>

<script>
export default{
    name:'ProductCount',
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{
        conteo:function(){
            return this.$store.state.products.length;
        },
    },
    watch:{},

}
</script>

<style scoped>
#ProductCount{
    background-color: lightseagreen;
}
</style>