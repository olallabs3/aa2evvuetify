<template>
  <v-app>
    <v-main>
      <FooterPart/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import FooterPart from './components/FooterPart';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    FooterPart
  },

  data: () => ({
    //
  }),
};
</script>
