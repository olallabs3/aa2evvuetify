<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col v-for="(item) in games" :key="item.id" cols="12" sm="3">
        <v-sheet class="pa-2 ma-2">
          <v-card class="mx-auto" max-width="200" min-height="525">
            <v-btn block color="red">
              EN STOCK
              <v-icon>mdi-cart</v-icon>
            </v-btn>
            <div>
              <v-card-title style="font-size: 17px;">Nombre: {{ item.titulo }}</v-card-title>

              <v-card-title style="font-size: 12px;">Unidades: {{ item.unidades }}</v-card-title>

              <v-btn class="btn" onclick="trolleo()">Comprar</v-btn>
            </div>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>


<style>
.btn {
  margin-left: 25%;
}
</style>

<script>
import store from "@/store/store";
import { mapState, mapActions } from "vuex";
export default {
  trolleo(){
      window.open("https://youtu.be/dQw4w9WgXcQ")
  },

  methods: {
    ...mapActions([store.dispatch("fetchGames")]),
  },
  computed: {
    user() {
      return this.games;
    },
    ...mapState(["games"]),
  },
};
</script>