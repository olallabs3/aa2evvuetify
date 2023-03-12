<template>
    <form class="formularioLogin">
        <v-text-field :counter="25" label="Nombre usuario" ></v-text-field>

        <v-text-field label="E-mail"></v-text-field>

        <v-text-field label="Contraseña" type="password"></v-text-field>

        <v-btn class="me-4" to="/perfil">
            Enviar
        </v-btn>
        <v-btn class="me-4" to="/inicio">
            Volver
        </v-btn>

    </form>
</template>

<script>


export default {

}
</script>

<style>
.formularioLogin {
    margin-top: 100px;
    margin-left: 400px;
    width: 700px;
}
</style>