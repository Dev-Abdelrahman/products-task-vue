<template>
  <div class="home">
    Thanks, Payment done successfully
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ThanksView',

  mounted() {
    if(localStorage.getItem('pay_for')) {
      let orders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];

      let checkInLocalStorage = orders.filter(function(elem){
          if(elem.id != JSON.parse(localStorage.getItem('pay_for')).id) return elem.id;
      });

      localStorage.setItem('orders',JSON.stringify(checkInLocalStorage));
      localStorage.setItem('pay_for',null);
    }
  }
}
</script>
