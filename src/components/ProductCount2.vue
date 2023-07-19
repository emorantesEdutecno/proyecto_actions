<template>
    <div id="ProductCount2">
        <h1>Product Count2 Component</h1>
        <h3> Apellido: {{  last_name  }}</h3>
        <h3>Productos: {{  countProducts }}</h3>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
export default{
    name:'ProductCount2',
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{
        ...mapState(['last_name']),
        ...mapGetters(['countProducts']),
    },
    watch:{},

}
</script>

<style scoped>
#ProductCount2{
    background-color:darkgoldenrod;
}
</style>