<template>
    <nav class="d-flex justify-content-between align-items-center">
        <a href="/">Products</a>
        <router-link to="/cart">
            <img src="../../assets/cart.png" alt="cart image" width="40" />
        </router-link>
    </nav>

</template>

<style scoped>
    nav {
        border-bottom: 1px solid #ebebeb;
        box-shadow: 2px 3px 4px 5px #f7f7f78a;
        padding: 2rem 3rem;
        margin-bottom: 4rem;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
        padding: 0.3rem 1rem;
    }

    nav a.router-link-exact-active:not(:last-child) {
        background-color: #42b983;
        color: white;
        border-radius: 5px;
    }
</style>