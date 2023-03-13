<template>
    <div>
        <AppBar_Component />
        <Card_Component />
        <footerComponent />
    </div>
</template>
<script>
import AppBar_Component from '@/components/Vuetify/AppBar_Component.vue';
import footerComponent from '@/components/Vuetify/footerComponent.vue';
import Card_Component from '@/components/Vuetify/Card_Component.vue';
export default {

    components: {
        AppBar_Component,
        footerComponent,
        Card_Component
    },

/*     created() {
        this.cargarDatos();
    },

    data() {
        return {
            Items: []
        }
    }, */

    
}
</script>
<style></style>