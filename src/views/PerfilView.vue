<template>
    <div>
        <AppBar_Component />
        <PerfilUsuario/>
        <footerComponent />
    </div>
</template>
<script>
import AppBar_Component from '@/components/Vuetify/AppBar_Component.vue';
import footerComponent from '@/components/Vuetify/footerComponent.vue';
import PerfilUsuario from '@/components/Vuetify/PerfilUsuario.vue';
export default {

    components: {
    AppBar_Component,
    footerComponent,
    PerfilUsuario
},

    created (){
       /*  this.cargarDatos(); */
    },

    data(){
        return{
            Items :[]
        }
    },

    /* methods: {
        cargarDatos: function(){
            try {
                const setting = {
                    method: 'GET'
                }
                const url = 'https://picsum.photos/v2/list=page=2&limit=10'
                const data = fetch (url,setting)
                const json = data.json()
                this.Items = json
            } catch (error) {
                console.log(error)
                
            }
        }
    } */
}
</script>
<style></style>