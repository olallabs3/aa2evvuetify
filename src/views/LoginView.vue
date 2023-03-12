<template>
    <div>
        <HeaderLogin/>
        <LoginPage/>
    </div>
</template>
<script>
import LoginPage from '@/components/Vuetify/LoginPage.vue';
import HeaderLogin from '@/components/Vuetify/HeaderLogin.vue';
export default {

    components: {
    HeaderLogin,
    LoginPage
},
}
</script>
<style>
</style>