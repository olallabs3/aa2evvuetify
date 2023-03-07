<template>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          v-for="n in 16"
          :key="n"
          cols="4"
          sm="2"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <v-img
              :src="PorDecidirTodavía"
              aspect-ratio="1"
              cover>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
      data(){
  
      }
  }
  </script>
  
  <style>
  
  </style>