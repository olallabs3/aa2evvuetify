<template>
  <v-app>
    <v-main>
      <AppBar_Component/>
      <!-- <CarousselComponent/> -->
      <!-- <CarousselPrueba/> -->
      <PerfilUsuario/>
      <!-- <Card_Component/> -->
      <footerComponent/> 
    </v-main>
  </v-app>
</template>

<script>

import AppBar_Component from './components/Vuetify/AppBar_Component';
// import Card_Component from './components/Vuetify/Card_Component.vue';
// import CarousselPrueba from './components/Vuetify/CarousselPrueba.vue'
// import CarousselComponent from './components/Vuetify/CarousselComponent';
import footerComponent from './components/Vuetify/footerComponent';
import PerfilUsuario from './components/Vuetify/PerfilUsuario';
// import GridProductos from './components/Vuetify/GridProductos';


export default {
  name: 'App',

  components: {
    // HelloWorld,
    footerComponent,
    // CarousselPrueba,
    // CarousselComponent,
    AppBar_Component,
    // GridProductos,
    // Card_Component,
    PerfilUsuario,
},

  data: () => ({
    //
  }),
};
</script>
