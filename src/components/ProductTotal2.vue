<template>
    <div id="ProductTotal2">
        <h1> Product Total2 Component</h1>
        <p>Total: ${{ totalProducts }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
    name:'ProductTotal2',
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{
            ...mapGetters(['totalProducts']),
        },
    watch:{}
}
</script>

<style scoped>
#ProductTotal2{
    background-color:darkgoldenrod;
}
</style>