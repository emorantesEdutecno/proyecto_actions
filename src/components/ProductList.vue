<template>
    <div id="ProductList">
        <h1>Product List Component</h1>
        <table border="1">
            <tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
            </tr>
            <tr v-for="producto in productos" :key="producto.id">
                <td>{{producto.code}}</td>
                <td>{{producto.product}}</td>
                <td>{{producto.quantity}}</td>
                <td>{{producto.price}}</td>
                <td>{{ producto.subtotal }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default{
    name:'ProductList',
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{
        productos:function(){
            return this.$store.state.products;
        },

    },
    watch:{},
}
</script>

<style scoped>
#ProductList{
    background-color: darksalmon;
}
</style>