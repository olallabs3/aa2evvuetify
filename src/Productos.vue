<template>
    <v-app>
      <v-main>
        <AppBar_Component/>
        <GridProductos/>
        <footerComponent/> 
        <!-- <FooterPart/> -->
      </v-main>
    </v-app>
  </template>
  
  <script>
  // import HelloWorld from './components/HelloWorld';
  // import FooterPart from './components/FooterPart';
  import AppBar_Component from './components/Vuetify/AppBar_Component';
  import footerComponent from './components/Vuetify/footerComponent';
  import GridProductos from './components/Vuetify/GridProductos.vue';
  // import FooterPart from './components/FooterPart';
  // import FooterPart from './components/FooterPart';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Productos',
  
    components: {
    // HelloWorld,
    footerComponent,
    AppBar_Component,
    GridProductos,
},
  
    data: () => ({
      //
    }),
  };
  </script>
  