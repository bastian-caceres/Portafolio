<template>
  <section class="container sobremi text-center mt-2">
    <div class="row"> 
      <!-- texto -->
      <div class="col-md-6">
        <h3 class="font-weight-bold">Sobre Mi</h3>
        <p class="my-3">
          !Hola¡ Soy Bastián Cáceres, soy programador de profesión, y elegí este camino ya que desde pequeño me llamaba la atención  la tecnología.
        </p>
        <p class="my-3">
          Soy una persona alegre y carismática, con muchas ganas de aprender mas de lo que ya se. <br>
          Y como siempre digo nada es imposible, solo cuenta un poco más.
        </p>
        
        <h3 class="font-weight-bold">Objetivo</h3>
        <p class="my-3">
          Poder encontrar una empresa en la cual pueda desarrollarme profesionalmente, con un ambiente de trabajo grato, 
          poder cumplir con sus requisitos y aportar en el crecimiento de esta.
        </p>       
      </div>

      <!-- foto-experiencia -->
      <div class="col-md-6">
        <img src="../assets/img/foto_perfil2.jpg" alt="">
        <!-- <div class="bb"></div> -->
        <h4 class="mt-4">Experiencia</h4>
        <div title="Desarrollador Front-End" data-toggle="popover" data-trigger="hover" data-content="desde 2019-2021" data-placement="bottom">
          <a><font-awesome-icon class="fa-3x my-3 mx-1" icon="desktop"/></a>
          <a><font-awesome-icon class="fa-3x my-3 mx-1" icon="laptop-code"/></a>
          <a><font-awesome-icon class="fa-3x my-3 mx-1" icon="desktop"/></a>
        </div>
      </div>

      <!-- skills -->
      <div class="col-md-12 p-5">        
        <h3 class="titulo">Conocimientos</h3>
        <div class="row">

          <div class="col">
            <div class="container">                  
              <div class="skill">
                <p><font-awesome-icon :icon="['fab', 'html5']"/> HTML5</p>
              </div>
              <div class="skill">
                <p><font-awesome-icon :icon="['fab', 'bootstrap']"/> Bootstrap 4</p>
              </div>
              <div class="skill">
                <p><font-awesome-icon :icon="['fab', 'css3']"/> CSS 3</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="container">
              <div class="skill">
                <p><font-awesome-icon :icon="['fab', 'vuejs']"/> Vue 2</p>
              </div>
              <div class="skill">
                <p><font-awesome-icon :icon="['fab', 'js']"/> JavaScript</p>
              </div>                 
              <div class="skill">
                <p><font-awesome-icon :icon="['fab', 'sass']"/> Sass</p>
              </div>
            </div>
          </div>

        </div>            
      </div>

    </div>  
  </section>
</template>

<script>
  // popover
  window.$(document).ready(function(){
    window.$('[data-toggle="popover"]').popover();   
  });
  
  export default {
    name: 'About',
  }
</script>

<style>
  /* fonts */
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  .sobremi{
    font-family: 'Courier Prime', monospace;
  }

  .skill{
    font-size: 30px;
    font-weight: 700;
    color: #fff;
}
</style>