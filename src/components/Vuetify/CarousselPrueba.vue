<template>
  <v-card>
    <div style="display: flex">
      <u>
        <p class="titulos">Últimos lanzamientos</p>
      </u>
      <v-card elevation="0" max-width="500" max-height="400" class="100% carrouselg">
        <v-carousel fill class="carrousel" hide-delimiters>
          <v-carousel-item>
            <v-btn
              to="/productos"
              class="imagen"
              style="height: 400px; background-image: url(https://i.pinimg.com/564x/9b/63/e9/9b63e97f6f13d2073668f923258f808c.jpg);"
            ></v-btn>
          </v-carousel-item>
          <v-carousel-item>
            <v-btn
              to="/productos"
              class="imagen"
              style="height: 400px; background-image: url(https://i.pinimg.com/564x/39/a7/ae/39a7aec6fdf9c48f3e91c124cd85e641.jpg);"
            ></v-btn>
          </v-carousel-item>
          <v-carousel-item>
            <v-btn
              to="/productos"
              class="imagen"
              style="height: 400px; background-image: url(https://i.pinimg.com/564x/ab/5c/d2/ab5cd247274e8a30a47f798ea342cd0c.jpg);"
            ></v-btn>
          </v-carousel-item>
        </v-carousel>
      </v-card>
      <br />
      <u>
        <p class="titulos">Proximos lanzamientos</p>
      </u>
      <v-card elevation="0" max-width="500" max-height="400" class="100% carrouselg">
        <v-carousel fill class="carrousel" hide-delimiters>
          <v-carousel-item>
            <v-btn
              to="/productos"
              class="imagen"
              style="height: 400px; background-image: url(https://i.pinimg.com/736x/80/6d/10/806d104861d80358d1b4f6f02d40c642.jpg);"
            ></v-btn>
          </v-carousel-item>
          <v-carousel-item>
            <v-btn
              to="/productos"
              class="imagen"
              style="height: 400px; background-image: url(https://i.pinimg.com/564x/fd/b1/7d/fdb17d67075f41ba4998546746eed45f.jpg);"
            ></v-btn>
          </v-carousel-item>
          <v-carousel-item>
            <v-btn
              to="/productos"
              class="imagen"
              style="height: 400px; background-image: url(https://i.pinimg.com/564x/06/b2/fc/06b2fcc9735925e859d44028f47556ba.jpg);"
            ></v-btn>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </div>
    <div style="margin-top:5%">
      <v-text style="margin-left:2%" class="tituloreco">Nuestras recomendaciones</v-text>
      <div class="bloque2">
        <v-col v-for="(item) in catalogo" :key="item.id" cols="10" sm="2" class="bloquerecom">
          <v-img
            :src="require(`/Users/A8-PC100/Desktop/aa2evvuetify/src/assets/${item.imagen}`)"
            contain
            max-height="200"
            max-width="200"
            class="imagenreco"
          />
          <v-divider></v-divider>
          <div class="titulo"><v-text >{{item.descripcion}}</v-text></div>
          
        </v-col>
      </div>
    </div>
  </v-card>
</template>

  <style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
.bloque2 {
  margin-top: 10%;
  display: flex;
  margin-right: 15%;
  margin-left: 2%;
  margin-bottom: 4%;
}
.imagen {
  width: 100%;
  height: 500px;
  background-size: cover;
}

.textoreco{
  width: 100%;
 
}

.tituloreco{
  text-decoration: underline;
  font-family: 'Rubik', sans-serif;
   font-size: 20px;
}

.imagenreco {
  margin-left: 10%;
}

.carrousel {
  margin-left: 100px;
  margin-left: 10%;
  width: 400px;
  background-color: rgba(245, 222, 179, 0);
}

.bloquerecom {
  border: 1px solid black;
  width: 450px;
  margin-left: 2%;
  background-color: #EF5350 ;
}

.titulos {
  width: 100%;
  font-size: 20px;
  margin-left: 15%;
  margin-top: 10%;
  font-family: 'Rubik', sans-serif;
}

.carrouselg {
  background-color: rgba(245, 222, 179, 0);
  margin-left: 100px;
  margin-top: 10%;
}
</style>
  
  <script>
export default {
  data() {
    return {
      catalogo: [
        {
          imagen: "juego1.png",
          descripcion:
            "Tercera entrega del juego de rol mas desafiante de los ultimos tiempos",
        },
        {
          imagen: "juego2.png",
          descripcion:
            "Videojuego de construcción y gestión desarrollado por Ludeon Studios. Inicialmente se lanzó una alpha para Linux, Mac OS X y Windows el 4 de noviembre de 2013.",
        },
        {
          imagen: "juego3.png",
          descripcion:
            "Tercera entrega de la saga Red Alert de la compañía EA, dentro del mundo de Command and Conquer.",
        },
        {
          imagen: "juego4.png",
          descripcion:
            "Videojuego FPS de 2003 desarrollado por Techland y publicado por Gathering of Developers en Europa y Strategy First en Norteamérica.",
        },
        {
          imagen: "juego5.png",
          descripcion:
            "Videojuego gratuito perteneciente a los géneros battle royale y hero shooter en primera persona, desarrollado por Respawn Entertainment y publicado por EA.",
        },
        {
          imagen: "juego6.png",
          descripcion:
            "Videojuego de estrategia de la saga Victoria publicado el 25 de octubre de 2022 por Paradox Interactive, siendo una secuela del juego de 2010 Victoria II",
        },
      ],
    };
  },
  name: "CarrouselPart",
  props: ["Items"],
};
</script>