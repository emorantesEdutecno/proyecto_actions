<template>
    <div id="ProductEdit">
        <h1>Product Edit Component</h1>

        <div class="container">
                    <div class="title"><h2>Editar Producto</h2></div>
                    <div class="code">
                        <label for="">Código</label>
                        <input type="text" v-model="form.code">
                    </div>
                    <div class="product">
                        <label for="">Producto</label>
                        <input type="text" v-model="form.product">
                    </div>
                    <div class="quantity">
                        <label for="">Cantidad</label>
                        <input type="text" v-model="form.quantity">
                    </div>
                    <div class="price">
                        <label for="">Precio</label>
                        <input type="text" v-model="form.price">
                    </div>
                    <div class="add">
                            <button @click="edit">
                                <i class="fas fa-edit"></i>
                                Editar
                            </button>
                    </div>
        </div>


    </div>
</template>

<script>
import {mapGetters, mapState, mapActions} from 'vuex';
export default{
    name: 'ProductEdit',
    data:function(){
        return{
            form:{
                code:'',
                product:'',
                quantity:'',
                price:'',
                subtotal:'',
            }
        }
    },
    methods:{
        ...mapActions(['editProduct']),
        add:function(){
            if(this.form.code != ''
            && this.form.product !=''
            && this.form.quantity != ''
            && this.form.price != ''){
                let data = {...this.form};
                data.subtotal = this.form.quantity * this.form.price;
                console.log(data);
                this.$store.dispatch('addProduct', data);
                this.clean();
            }
        },
        edit:function(){
            if(this.form.code != ''
            && this.form.product !=''
            && this.form.quantity != ''
            && this.form.price != ''){

                this.form.subtotal = Number(this.form.quantity) * Number(this.form.price);
                console.log('ProductEdit edit this.form.subtotal', this.form.subtotal);

                let data = {...this.form, id : this.id_product_edit};
                this.editProduct(data);
                this.clean();
            }
        },
        clean:function(){
            this.form.code = '';
            this.form.product = '';
            this.form.quantity = '';
            this.form.price = '';
            this.form.subtotal = '';
        },
        setProduct: function(){
            let prod = this.getProductById(this.id_product_edit);
            console.log('ProductEdit setProduct prod: ', prod);
            this.form.code = prod.code;
            this.form.product = prod.product;
            this.form.quantity = prod.quantity;
            this.form.price = prod.price;

        },
    },
    computed:{
        ...mapState(['id_product_edit']),
        ...mapGetters(['getProductById']),
    },
    watch:{},
    mounted(){
        this.setProduct();
    },

    
}
</script>

<style scoped>
#ProductEdit{
    background-color:lawngreen;
}


.container{
 display:grid;
 grid-template-columns: repeat(5,1fr);
 text-align:start;
 padding:10px;
 width:500px;
 margin: 0 auto;
 background:rgb(66,163,9);
 margin-top:10px;
 }
 .title{
 grid-column:1/4;
 grid-row:1/2;
 }
 .code{
 grid-column:1/3;
 grid-row:2/3;
 }
 .product{
 grid-column:1/4;
 grid-row:3/4;
 }
 .quantity{
 grid-column:1/2;
 grid-row:4/5;
 }
 .price{
 grid-column:2/4;
 grid-row:4/5;
 }
 .add{
 grid-column:1/5;
 grid-row:5/6;
 margin:auto 0;

 }
 input{
 width: 90%;
 }
 h2{
 color:white;
}
 label{
 color:white;
 }

</style>