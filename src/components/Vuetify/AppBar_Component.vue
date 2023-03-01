<template>
  <div>
    <v-app-bar
      height="100px"
      color="red lighten-1 text-center"
      dense
      dark
    >
      <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
      <v-img :src="require('../assets/1000comics.png')"
        contain
        height="80"
        position="0"
        max-width="fit-content"
      />
      
      <v-toolbar
        elevation="0"
        color="red lighten-1 text-center"
      >
        <v-toolbar-item>Inicio</v-toolbar-item>
        <v-spacer></v-spacer>
        <v-toolbar-item>Comics</v-toolbar-item>
        <v-spacer></v-spacer>
        <v-toolbar-item>Figuras</v-toolbar-item>
        <v-spacer></v-spacer>
        <v-toolbar-item>Merchandising</v-toolbar-item>
        <v-spacer></v-spacer>
        <v-toolbar-item>Juegos</v-toolbar-item>
        <v-spacer></v-spacer>
        <v-toolbar-item>Noticias</v-toolbar-item>
      <!--<v-toolbar-title>Título soso</v-toolbar-title>-->
      </v-toolbar>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>