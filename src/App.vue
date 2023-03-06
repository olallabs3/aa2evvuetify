<template>
  <v-app>
    <v-main>
      <AppBar_Component/>
      <CarousselComponent/>
      <footerComponent/> 
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import FooterPart from './components/FooterPart';
import AppBar_Component from './components/Vuetify/AppBar_Component';
import CarousselComponent from './components/Vuetify/CarousselComponent';
import footerComponent from './components/Vuetify/footerComponent';
// import FooterPart from './components/FooterPart';
// import FooterPart from './components/FooterPart';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    footerComponent,
    CarousselComponent,
    AppBar_Component,
},

  data: () => ({
    //
  }),
};
</script>
