<template>
    <div class="product my-2 py-5">

        <!-- product image -->
        <div class="product-head d-flex justify-content-between align-items-center">
          <img class='product-picture' :src='product.image' />
        </div>

        <!-- product data -->
        <div class="product-body px-4">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <span>${{ product.price }}</span>
        </div>

        <!-- product actions -->
        <div class="product-footer">
          <button class="add-to-cart" @click="addToCart(product)" v-show="!AddedToCart">Add to cart</button>
          <button class="remove-from-cart" @click="removeFromCart(product.id)" v-show="AddedToCart">Remove from cart |</button>
          <router-link class="checkout" to="/cart" v-show="AddedToCart"> Checkout</router-link>
        </div>

    </div>
</template>

<script>
export default {
  name: 'VProduct',
  props: {
    product: {}
  },

  data() {
    return {
      AddedToCart: false
    }
  },
  methods: {
    addToCart(product) {

      if (!this.IsAddedToCart(product.id)) {
        let orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
      
        orders.push(product);

        localStorage.setItem('orders',JSON.stringify(orders));

        this.AddedToCart = true;
      }
      
    },
    
    removeFromCart(id) {

      let orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

      let checkInLocalStorage = orders.filter(function(elem){
          if(elem.id != id) return elem.id;
      });

      localStorage.setItem('orders',JSON.stringify(checkInLocalStorage));

      this.AddedToCart = false;

    },

    IsAddedToCart(id) {

      let orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

      let checkInLocalStorage = orders.filter(function(elem){
          if(elem.id == id) return elem.id;
      });

      if(checkInLocalStorage.length > 0)
          return true;
      
      return false;
    }
  },

  mounted() {
    this.AddedToCart = this.IsAddedToCart(this.product.id) ?   true : false;
  }
}
</script>


<style scoped>

  .product {
    background: #fafafa;
    border: 1px solid #ebebeb69;
  }

  .product .product-picture {
    max-width: 100%;
    margin: 0 auto
  }

  .add-to-cart, .remove-from-cart {
    border: 0;
    min-width: 60%;
    padding: 10px;
    border-radius: 50px;
    margin: 10px;
  }

  .remove-from-cart {
    background: transparent;
    border: 0;
    width: auto;
    min-width: auto;
    padding: 10px 0;
    margin: 10px 0;
  }

  .checkout {
    color: green
  }

</style>