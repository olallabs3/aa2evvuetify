<template>
  <v-card>
    <u><p class="titulos">Últimos lanzamientos</p></u>
    <v-card elevation="0" max-width="500" max-height="400" class="100% carrouselg"  >
      <v-carousel fill class="carrousel" hide-delimiters>
        <v-carousel-item src="https://i.pinimg.com/564x/fd/b1/7d/fdb17d67075f41ba4998546746eed45f.jpg" class="imagen" contain></v-carousel-item>
        <v-carousel-item src="https://i.pinimg.com/564x/9b/63/e9/9b63e97f6f13d2073668f923258f808c.jpg" class="imagen" contain></v-carousel-item>
      </v-carousel>
    </v-card>
<br>
    <u><p class="titulos">Proximos lanzamientos</p></u>
    <v-card elevation="0" max-width="500" max-height="400" class="100% carrouselg" >
      <v-carousel fill class="carrousel">
        <v-carousel-item src="https://i.pinimg.com/736x/80/6d/10/806d104861d80358d1b4f6f02d40c642.jpg" class="imagen" contain></v-carousel-item>
  
        <v-carousel-item src="https://i.pinimg.com/564x/39/a7/ae/39a7aec6fdf9c48f3e91c124cd85e641.jpg" class="imagen" contain></v-carousel-item>
      </v-carousel>
    </v-card>
  </v-card>
  </template>
  
  <style scoped>
  .carrousel {
    margin-left: 100px;
    width: 400px;
    background-color: rgba(245, 222, 179, 0) ;
  }

  .titulos{
    font-size: 20px;
    margin-left: 100px;

  }

  .carrouselg{
    background-color: rgba(245, 222, 179, 0) ;
    margin-left: 450px;
    
  }
  </style>
  
  <script>
  export default {
    name: "CarrouselPart",
    data: () => ({
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "purple",
      ],
      slides: [
        " Lorem ipsum dolor sit amet. At dolorem quaerat aut aliquid magni non optio fugiat ut omnis odit sit doloremque delectus ut voluptates aperiam. Ex expedita optio vel facilis corporis ea molestiae molestiae hic libero voluptas. Qui deserunt eius sit temporibus impedit qui odio mollitia ut maiores itaque sit atque facilis. Ut nulla distinctio et excepturi voluptatem vel sint consequatur vel quod illum cum enim dolorum sit repellendus minima est totam quos?   33 unde voluptatem rem quasi quod et beatae dolorem ut nesciunt amet. ",
        " Lorem ipsum dolor sit amet. At dolorem quaerat aut aliquid magni non optio fugiat ut omnis odit sit doloremque delectus ut voluptates aperiam. Ex expedita optio vel facilis corporis ea molestiae molestiae hic libero voluptas. Qui deserunt eius sit temporibus impedit qui odio mollitia ut maiores itaque sit atque facilis. Ut nulla distinctio et excepturi voluptatem vel sint consequatur vel quod illum cum enim dolorum sit repellendus minima est totam quos?   33 unde voluptatem rem quasi quod et beatae dolorem ut nesciunt amet. ",
        " Lorem ipsum dolor sit amet. At dolorem quaerat aut aliquid magni non optio fugiat ut omnis odit sit doloremque delectus ut voluptates aperiam. Ex expedita optio vel facilis corporis ea molestiae molestiae hic libero voluptas. Qui deserunt eius sit temporibus impedit qui odio mollitia ut maiores itaque sit atque facilis. Ut nulla distinctio et excepturi voluptatem vel sint consequatur vel quod illum cum enim dolorum sit repellendus minima est totam quos?   33 unde voluptatem rem quasi quod et beatae dolorem ut nesciunt amet. ",
        " Lorem ipsum dolor sit amet. At dolorem quaerat aut aliquid magni non optio fugiat ut omnis odit sit doloremque delectus ut voluptates aperiam. Ex expedita optio vel facilis corporis ea molestiae molestiae hic libero voluptas. Qui deserunt eius sit temporibus impedit qui odio mollitia ut maiores itaque sit atque facilis. Ut nulla distinctio et excepturi voluptatem vel sint consequatur vel quod illum cum enim dolorum sit repellendus minima est totam quos?   33 unde voluptatem rem quasi quod et beatae dolorem ut nesciunt amet. ",
        " Lorem ipsum dolor sit amet. At dolorem quaerat aut aliquid magni non optio fugiat ut omnis odit sit doloremque delectus ut voluptates aperiam. Ex expedita optio vel facilis corporis ea molestiae molestiae hic libero voluptas. Qui deserunt eius sit temporibus impedit qui odio mollitia ut maiores itaque sit atque facilis. Ut nulla distinctio et excepturi voluptatem vel sint consequatur vel quod illum cum enim dolorum sit repellendus minima est totam quos?   33 unde voluptatem rem quasi quod et beatae dolorem ut nesciunt amet.",
      ],
    }),
  };
  </script>