<template>
  <v-app>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "App",
  components: {},
  created(){
    this.fetchGames();
  },
  methods:{
    ...mapActions(['fetchGames'])
  },
  data: () => ({
    data: []}),
  
/*   mounted() {
    fetch("https://localhost:7210/api/Videojuego")
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
        console.log(this.data); // para verificar que se ha obtenido los datos correctamente
      })
      .catch((error) => console.error(error));
  }, */
};
</script>