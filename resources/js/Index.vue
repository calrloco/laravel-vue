// responsabile di fare il render di tutti i nostri component
<template>
    <div class="index-component">
        <!-- //router link e dato dalla libreria di vue e serve a inserire i link del router
        :v-bind passi un ogetto function ad componente vue  -->
        <nav class="navbar bg-white border-bottom navbar-light">
            <router-link
                class="navbar-brand mr-auto"
                v-bind:to="{ name: 'home' }"
                >LaravelBnb</router-link
            >
            <!-- v bind shorthand -->
            <router-link class="btn nav-button" :to="{ name: 'second' }"
                >second</router-link
            >
        </nav>
        <div class="container mt-4 mb-4 pr-4 pl-4">
            <router-view></router-view>
        </div>
    </div>
</template>
