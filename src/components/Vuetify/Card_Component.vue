<template>
    <v-container class="bg-surface-variant">
        <v-row no-gutters>
            <v-col v-for="(item, index) in data.results" :key="index" cols="12" sm="3">
                <v-sheet class="pa-2 ma-2">
                    <v-card class="mx-auto" max-width="200" min-height="525">
                        <v-btn block color="red">

                            EN STOCK

                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <div>

                            <v-card-title style="font-size: 17px;">Nombre: {{ item.name }}</v-card-title>
                            <v-card-title style="font-size: 15px;">Consola: {{ item.status }}</v-card-title>
                            <v-card-title style="font-size: 12px;">Unidades: {{ item.id }}</v-card-title> 
                           
                            <v-btn class="btn">Comprar</v-btn>
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
export default {
    name: "Card_Component",
    data() {
        return {
            data: { results: [] }
        };
    },
    mounted() {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => {
                this.data = data;
                console.log(this.data); 
            })
            .catch((error) => console.error(error));
    },
};
</script>