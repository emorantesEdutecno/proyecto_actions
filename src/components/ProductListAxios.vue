<template>
    <div id="ProductListAxios">
        <h1>Product List Axios Component</h1>
        <table border="1">
            <tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
            </tr>
            <tr v-for="producto in products_axios" :key="producto.id">
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
import { mapState, mapActions} from 'vuex';
export default{
    name:'ProductListAxios',
    data:function(){
        return{

        }
    },
    methods:{
        ...mapActions(['fetchProducts']),
    },
    computed:{
        ...mapState(['products_axios']),
    },
    watch:{},
    created(){
        this.fetchProducts();
    }
}
</script>

<style scoped>
#ProductListAxios{
    background-color:orchid;
}
</style>