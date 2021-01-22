<template>
  <div id="app">    
    <NavBar/>
      <!-- efecto estrellas -->
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>  
  import NavBar from '@/components/NavBar.vue'
  import Footer from '@/components/Footer.vue'
  export default {
  name: 'App',
  components: {
      NavBar,
      Footer
    },
  }
</script>

<style> 
  /* fonts del titulo principal */
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');

  /* font navbar */
  @import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,700");

  /* css de efecto de estrellas */
  @import url('assets/css/EfectoEstrellas.css');

  /* css efecto carrousel */
  @import url('assets/css/EfectoCarrousel.css');

  /* css efecto card */
  @import url('assets/css/EfectosCard.css');

  /* efecto hr */
  @import url('assets/css/EfectoHr.css');

  /* media Query */
  @import url('assets/css/MediaQuery.css');
  
  /* exporta fonts localmente */
  @font-face {
    font-family: "ONEDAY";
    src: url('../src/assets/fonts/ONEDAY.otf');
  }

  /* principal */
  #app {
    color: #fff;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;
  }

</style>
