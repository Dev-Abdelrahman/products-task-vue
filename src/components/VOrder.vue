<template>
    <div class="order d-flex align-items-center shadow-sm p-5 mb-3" v-if="AddedToCart == true">

        <!-- order image -->
        <div class="order-image">
            <img class="order-picture" :src="order.image" width="150">
        </div>
        
        <!-- order date -->
        <div class="order-details flex-grow-1 text-start p-4">
            <h3>{{ order.name }} | <span>${{ order.price }}</span></h3>
            <p>{{ order.description }}</p>
        </div>

        <!-- order actions -->
        <div class="order-actions">
            <div>
              <stripe-checkout
                ref="checkoutRef"
                mode="payment"
                :pk="publishableKey"
                :line-items="lineItems"
                :success-url="successURL"
                :cancel-url="cancelURL"
                @loading="v => loading = v"
              />
              <button @click="pay" class="add-to-cart">Pay now!</button>
            </div>
            
        </div>
    </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  name: 'VOrder',
  props: {
    order: {}
  },

  components: {StripeCheckout},

  data() {
    // this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    this.publishableKey = 'pk_test_51LTz5yANAiagN9ILNkAs0BtiZzcc1iUHaiiBIbTNcWkynfeJbDejLYflbJpbNnI853YYvX9hgs8b8IF5VWjzUFfR00TsEP8D9s';

    return {
      AddedToCart: true,
      loading: false,
      lineItems: [
        {
          price: this.order.productID,
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:8080/thanks',
      cancelURL: 'http://localhost:8080/',
    }
    
  },

  methods: {
    pay () {
      // You will be redirected to Stripe's secure checkout page
      localStorage.setItem('pay_for',JSON.stringify(this.order));
      this.$refs.checkoutRef.redirectToCheckout();
    },
  }
}
</script>


<style scoped>

  .add-to-cart, .remove-from-cart {
    border: 0;
    min-width: 200px;
    padding: 10px;
    border-radius: 50px;
    margin: 10px;
    font-weight: bold;
    color: red
  }

  .add-to-cart{
    background: #3ea242;
    color: white
  }

</style>