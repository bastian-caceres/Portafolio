<template>
    <nav class="navbar navbar-expand-md navbar-dark">
        <div class="container-fluid">
            <!-- boton movil -->
            <button class="navbar-toggler m-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- barra grande -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav flex-row m-auto justify-content-center">
                    <li class="nav-item px-2">
                        <router-link class="nav-link" :to="{name: 'Home'}">Home</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link class="nav-link" :to="{name: 'About'}">About</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link class="nav-link" :to="{name: 'Portfolio'}">Portfolio</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link class="nav-link" :to="{name: 'PortfolioVdos'}">PortfolioV2</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link class="nav-link" :to="{name: 'Contact'}">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }    
</script>

<style>

</style>