<template>
  <section class="contact container mt-5">
    <h1 class="text-center">Información de contacto</h1>
    <form class="form-horizontal" role="form">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 m-auto">
          <div class="form-group">
            <label class="col-lg-2 control-label">Correo</label>
            <div class="col-lg-10">
              <p class="form-control-static">bast.caceresr@gmai.com</p>
            </div>
          </div>
          <hr class="separator separator--line" />
          <div class="form-group">
            <label class="col-lg-2 control-label">Teléfono(chile)</label>
            <div class="col-lg-10">
              <p class="form-control-static">(+56) 995230208</p>
            </div>
          </div>
          <hr class="separator separator--line" />
          <div class="form-group">
            <label class="col-lg-2 control-label">Ubicación</label>
            <div class="col-lg-10">
              <p class="form-control-static">Palmilla, Sexta región </p>
            </div>
          </div>
          <hr class="separator separator--line" />

          <div class="form-group text-center mt-5">
              <a class="list-inline-item text-light" href="https://www.linkedin.com/in/bastiancaceresr/" target="_blank">
                <font-awesome-icon class="fa-3x" :icon="['fab', 'linkedin']"/>
                <p>Linkedin</p>
              </a>
              <a class="list-inline-item text-light mx-1" href="https://github.com/bastian-caceres" target="_blank">
                <font-awesome-icon class="fa-3x" :icon="['fab', 'github']"/>
                <p>GitHub</p> 
              </a>   
              <a class="list-inline-item text-light" href="https://www.facebook.com/miguelbastian.caceresreyes" target="_blank">
                <font-awesome-icon class="fa-3x" :icon="['fab', 'facebook-square']"/>
                <p>Facebook</p>
              </a>
            </div>  
        </div>
      </div>  
    </form>

  </section>
</template>

<script>
export default {
    name: 'Contact',
}
</script>

<style>
.contact{
  height: 87vh;
  font-size: 30px;
}
</style>