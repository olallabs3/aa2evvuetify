<template>
  <form class="formularioLogin">
    <v-text-field :counter="25" label="Nombre usuario" id="nombreuser"></v-text-field>

    <v-text-field label="Contraseña" type="password"></v-text-field>

    <v-btn class="me-4" to="/perfil">Login</v-btn>
    <v-btn class="me-4" to="/inicio">Volver a la pantalla de inicio</v-btn>
    <v-text class="registrar">¿No tienes cuenta? Registrate aquí</v-text>
  </form>
</template>

<script>
// import store from "@/store/store";
// let nombre = document.getElementById("nombreuser").innerText();

// if (store.state.usuarios.filter) {

// }
 export default {};
</script>

<style>
.registrar {
  font-size: 10px;
  text-decoration: underline;
}

.formularioLogin {
  margin-top: 100px;
  margin-left: 400px;
  width: 700px;
}
</style>