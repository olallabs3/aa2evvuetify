<template>
    <v-container class="bg-surface-variant">
        <v-row no-gutters>
            <v-col
                v-for="(juego) in catalogo"
                :key="juego.titulo"

                cols="12"
                sm="3"
            >
            <v-sheet class="pa-2 ma-2">
                <v-card
                class="mx-auto"
                max-width="200"
                min-height="525"
                >
                    <!-- <v-img :src="require(`../assets/${libro.imagen}`)"
                        cover
                    /> -->

                    <v-btn
                    block
                    color="red">
                     <!-- Aqui va lo de agotado de la API -->
                        EN STOCK
                       
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                    <div>
                        <v-card-title>{{ juego.titulo }}</v-card-title>
                        <v-card-subtitle>{{ juego.descripcion }}</v-card-subtitle>
                        <v-card-text>{{ juego.precio }}€</v-card-text>
                        <v-card-text>{{ juego.plataforma }}</v-card-text>
                    </div>
                    
                </v-card>
            </v-sheet>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            catalogo:[
                {imagen: 'Marin.jpg', titulo: 'Juego 1', descripcion: 'Descripcion del juego 1', plataforma: "ordenador" , precio: '8,08'},
                {imagen: 'mieruko03.jpg', titulo: 'Juego 2', descripcion: 'Descripcion del juego 2', plataforma: "ps4", precio: '8,08'},
                {imagen: 'dan-da-dan.jpg', titulo: 'Juego 3', descripcion: 'Descripcion del juego 3',  plataforma: "xbox", precio: '7,60'},
                {imagen: 'chainsaw-man-01.jpg', titulo: 'Juego 4', descripcion: 'Descripcion del juego 4',  plataforma: "nintendo switch", precio: '8,55'},
            ]
        }
    }
}
</script>