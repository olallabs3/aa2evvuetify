<template>
    <v-card elevation="24" max-width="600" max-height="600" class="100% carrouselg" >
      <v-carousel fill class="carrousel">
        <v-carousel-item src="https://i.pinimg.com/564x/7d/5c/5c/7d5c5c8a5ac11c5fc67351e4d8e789db.jpg" class="imagen" contain></v-carousel-item>
  
        <v-carousel-item src="https://i.pinimg.com/564x/5a/28/af/5a28af274e88b149d5c0e44afd6d11c7.jpg" class="imagen"  contain></v-carousel-item>
  
        <v-carousel-item src="https://i.pinimg.com/564x/1a/46/3d/1a463dec4e8669bec22d010ba8647b8d.jpg" class="imagen" contain></v-carousel-item>
  
        <v-carousel-item src="https://i.pinimg.com/564x/50/38/55/5038551590177a3cc45aca48c1153429.jpg" class="imagen" contain></v-carousel-item>
      </v-carousel>
    </v-card>
  </template>
  
  <style scoped>
  .carrousel {
    margin-left: 150px;
    width: 300px;
  }
  .carrouselg{
    margin-left: 650px;
    
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