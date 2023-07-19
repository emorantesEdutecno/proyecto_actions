import { createStore } from 'vuex'

export default createStore({
  state: {
    user_id:'325',
    name: 'Elfar',
    last_name: 'Morantes',
    products:[
      {
        id: 1,
        code:'435334656',
        product:'Funda de Papel',
        quantity:2,
        price:100,
        subtotal:200,
      },
      {
        id: 2,
        code:'345346446',
        product:'Bandeja de Cartón',
        quantity:2,
        price:200,
        subtotal:400,
      },
      {
        id: 3,
        code:'534534536',
        product:'Papel de Regalo',
        quantity:2,
        price:500,
        subtotal:1000,
      }],
      id_product_edit:null,
  },
  getters: {
    countProducts: state=>{
      return state.products.length;
    },

    totalProducts: state=>{
      return state.products.reduce( (acumulador, elementoActual)=>{
        return acumulador + (elementoActual.quantity * elementoActual.price);
    } , 0);
    },

    userName: state=>{
      return state.name+' '+state.last_name;
    },
    getProductById:(state)=>(id)=>{
      console.log('getter getProductById id: ', id);
      return state.products.find(product=> product.id === id);
    }

  },
  mutations: {
      REMOVE_PRODUCT:(state, id)=>{
        let index = state.products.findIndex( producto=>{producto.id === id});
        state.products.splice(index,1);
      },

      ADD_PRODUCT:(state,product)=>{
        product.id = Math.floor(Math.random()*1000 );
        state.products.push(product);
      },
      SET_ID_PRODUCT_ID:(state,id)=>{
        state.id_product_edit = id;
      },
      EDIT_PRODUCT: (state,product)=>{
        console.log('mutation EDIT_PRODUCT product', product);
        let index = state.products.findIndex(prod=>prod.id === product.id);
        console.log('mutation EDIT_PRODUCT index', index); 
        state.products.splice(index, 1, product);
        state.id_product_edit = null;
      },

  },
  actions: {
    removeProduct:(context, id)=>{
      context.commit('REMOVE_PRODUCT', id);
    },
    addProduct:({commit}, product)=>{
      commit('ADD_PRODUCT', product);
    },
    setIdProductId:({commit}, id)=>{
      console.log('Action setIdProductId: ', id);
      commit('SET_ID_PRODUCT_ID', id);
    },
    editProduct:(context, product)=>{
      context.commit('EDIT_PRODUCT', product);
    }
  },
  modules: {
  }
})
