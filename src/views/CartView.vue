<template>
  <div class="cart">
    
    <div class="container">
      <div class="row">

          
          <template v-if="orders.length > 0">
            <div class="col-12" v-for="order in orders" v-bind:key="order">
                <VOrder :order="order"/>
            </div>
          </template>
          <template v-else>
            <p>There's No Orders Yet</p>
          </template>

          
      </div>
    </div>
    
  </div>
</template>

<script>

import VOrder from '@/components/VOrder.vue';


export default {
  name: 'CartView',
  components: { VOrder },
  data() {
    return {}
  },

  created() {
    this.orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
  }
}
</script>
