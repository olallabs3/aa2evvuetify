<template>
    <v-container class="bg-surface-variant">
        <v-row no-gutters>
            <v-col
                v-for="(libro) in catalogo"
                :key="libro.titulo"

                cols="12"
                sm="3"
            >
            <v-sheet class="pa-2 ma-2">
                <v-card
                class="mx-auto"
                max-width="200"
                min-height="525"
                >
                    <v-img :src="require(`../assets/${libro.imagen}`)"
                        cover
                    />

                    <v-btn
                    block
                    color="green">
                        EN STOCK
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                    <div>
                        <v-card-title>{{ libro.titulo }}</v-card-title>
                        <v-card-subtitle>{{ libro.descripcion }}</v-card-subtitle>
                        <v-card-text>{{ libro.precio }}€</v-card-text>
                    </div>
                    
                </v-card>
            </v-sheet>
            </v-col>

        </v-row>
    </v-container>

<!--     <v-card
    class="mx-auto"
    max-width="200"
    >
        <v-img :src="require('../assets/Marin.jpg')"
            cover
        />

        <v-btn
        block
        color="green">
            EN STOCK
            <v-icon>mdi-cart</v-icon>
        </v-btn>

        <v-card-title>Sexy Cosplay Doll 01</v-card-title>

        <v-card-subtitle>Manga, Panini, Sexy Cosplay Doll 01</v-card-subtitle>
        <v-card-text>8,08</v-card-text>
    </v-card> -->
</template>

<script>
export default {
    data(){
        return{
            catalogo:[
                {imagen: 'Marin.jpg', titulo: 'Sexy Cosplay Doll 01', descripcion: 'Manga, Panini, Sexy Cosplay Doll 01', precio: '8,08'},
                {imagen: 'mieruko03.jpg', titulo: 'Mieruko Chan Slice of Horror Story 03', descripcion: 'Manga, Ivrea, Mieruko Chan Slice of Horror Story 03', precio: '8,08'},
                {imagen: 'dan-da-dan.jpg', titulo: 'Dan Da Dan 01+02', descripcion: 'Manga, Norma Editorial, Dan Da Dan 01+02', precio: '7,60'},
                {imagen: 'chainsaw-man-01.jpg', titulo: 'Chainsaw Man 01', descripcion: 'Manga, Norma Editorial, Chainsaw Man 01', precio: '8,55'},
            ]
            
/*             images:[
                '..\\assets\\Marin.jpg',
                '..\\assets\\mieruko03.jpg',
                '..\\assets\\dan-da-dan.jpg',
                '..\\assets\\chainsaw-man-01.jpg',
            ],
            titulos:[
                'Sexy Cosplay Doll 01',
                'Mieruko Chan Slice of Horror Story 03',
                'Dan Da Dan 01+02',
                'Chainsaw Man 01',
            ],
            descripciones:[
                'Manga, Panini, Sexy Cosplay Doll 01',
                'Manga, Ivrea, Mieruko Chan Slice of Horror Story 03',
                'Manga, Norma Editorial, Dan Da Dan 01+02',
                'Manga, Norma Editorial, Chainsaw Man 01',
            ],
            precios:[
                '8,08',
                '8,08',
                '7,60',
                '8,55',
            ], */
        }
    }
}
</script>