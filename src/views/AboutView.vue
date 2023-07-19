<template>
  <div class="About">
    <h1>This is an about page</h1>

    <ProductCount></ProductCount>
    <ProductCount2></ProductCount2>
    <ProductNew v-if="id_product_edit == null" />
    <ProductEdit v-else />
    <ProductList2></ProductList2>
    <hr>
    <ProductList></ProductList>
    <ProductTotal></ProductTotal>
    <ProductTotal2></ProductTotal2>



  </div>
</template>

<script>
import ProductCount from '@/components/ProductCount.vue';
import ProductCount2 from '@/components/ProductCount2.vue';
import ProductList from '@/components/ProductList.vue';
import ProductNew from '@/components/ProductNew.vue';
import ProductTotal from '@/components/ProductTotal.vue';
import ProductTotal2 from '@/components/ProductTotal2.vue';
import ProductList2 from '@/components/ProductList2.vue';
import ProductEdit from '@/components/ProductEdit.vue';

import {mapState} from 'vuex';

export default{
  name:'About',
  components:{
    ProductCount,
    ProductCount2,
    ProductList ,
    ProductNew,
    ProductTotal,
    ProductTotal2,
    ProductList2,
    ProductEdit
  },
  data:function(){
    return{

    }
  },
  methods:{},
  computed:{
    ...mapState(['id_product_edit']),
  },
  watch:{},


}
</script>

<style scoped>
#About{
  background-color: chocolate;
}
</style>
