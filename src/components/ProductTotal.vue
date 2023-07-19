<template>
    <div id="ProductTotal">
        <h1> Product Total Component</h1>
        <p>Total: ${{ totalizacion }}</p>
    </div>
</template>

<script>
export default{
    name:'ProductTotal',
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{
        totalizacion:function(){
            return this.$store.state.products.reduce( (acumulador, elementoActual)=>{
                return acumulador + (elementoActual.quantity * elementoActual.price);
            } , 0);
        },
    },
    watch:{}
}
</script>

<style scoped>
#ProductTotal{
    background-color:mediumpurple;
}
</style>