<template>
    <div id="NavBar2">
        <h1>NavBar2 Component</h1>
        <p>Nombres con mapState {{  name }} {{ last_name }}</p>
        <p>Nombres con mapGetters {{ userName  }}</p>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default{
    name:'NavBar2',
    data:function(){
        return{

        }
    },
    methods:{},
    computed:{
        ...mapState(['name', 'last_name']),
        ...mapGetters(['userName']),
    },
    watch:{},
}
</script>

<style scoped>
#NavBar2{
    background-color: darkgoldenrod;
}
</style>