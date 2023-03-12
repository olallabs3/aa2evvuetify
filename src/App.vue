<template>
  <v-app>
    <router-view :items="data">
    </router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    data: []}),
  
  mounted() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
        console.log(this.data); // para verificar que se ha obtenido los datos correctamente
      })
      .catch((error) => console.error(error));
  },
};
</script>