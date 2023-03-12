<template>
  <div>
    <v-app-bar height="100px" color="red lighten-1 text-center" dense dark>
      <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <!-- <v-img :src="require('../assets/1000comics.png')"
        contain
        height="80"
        position="0"
        max-width="fit-content"
      /> -->

      <v-toolbar elevation="0" color="red lighten-1 text-center">
        <v-btn style="background-color: white; color:black" to="/inicio"><v-toolbar-item>Inicio</v-toolbar-item></v-btn>
        <v-spacer></v-spacer>
        <v-btn style="background-color: white; color:black"
          to="/productos"><v-toolbar-item>Juegos</v-toolbar-item></v-btn>
        <v-spacer></v-spacer>
        <!-- <v-btn style="background-color: brown;" to="/perfil"><v-toolbar-item>Noticias</v-toolbar-item></v-btn>
        <v-toolbar-title>Título soso</v-toolbar-title> -->
      </v-toolbar>

      <v-spacer></v-spacer>

      <v-btn icon>
        <!-- <svg-icon type="mdi" :path="path"></svg-icon> -->
      </v-btn>
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-btn icon to="/login">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in categoria" :key="n" @click="() => { }" to="/productos">
            <v-list-item-title to="/productos"> {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {

  data: () => ({

    categoria: [
      'Plataformas',
      'FPS',
      'Acción',
      'Estrategia',

    ],
    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: true,
    variant: 'absolute',
  }),
  computed: {
    localAttrs() {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs

    },
  },
}

</script>