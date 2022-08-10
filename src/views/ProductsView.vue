<template>
  <div class="products">
    
    <div class="container">
      <div class="row">

          <template v-if="products.length > 0">
            <div class="col-lg-4 col-md-6" v-for="product in products" v-bind:key="product">
              <VProduct :product="product"/>
            </div>
          </template>
          <template v-else>
            <p>There's No Records Yet</p>
          </template>
          


        
      </div>
    </div>
    
  </div>


  

</template>

<script>
import VProduct from '@/components/VProduct.vue';

export default {
  components: { VProduct },
  name: 'ProductsView',
  data() {
    return {
      products: []
    }
  },

  created() {
    fetch('http://localhost:8000/api/products')
      .then(response => response.json())
      .then(res => {
        this.products = res.data.products;
      })
  },

}
</script>