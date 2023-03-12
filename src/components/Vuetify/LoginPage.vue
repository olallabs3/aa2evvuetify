<template>
    <div>
    <form>
        <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="10" label="Name"
            required ></v-text-field>

        <v-text-field v-model="state.email" :error-messages="v$.email.$errors.map(e => e.$message)" label="E-mail" required
          ></v-text-field>

        <v-select v-model="state.select" :items="items" :error-messages="v$.select.$errors.map(e => e.$message)"
            label="Item" required></v-select>

        <v-checkbox v-model="state.checkbox" :error-messages="v$.checkbox.$errors.map(e => e.$message)"
            label="Do you agree?" required ></v-checkbox>

        <v-btn class="me-4">
            submit
        </v-btn>
        <v-btn >
            clear
        </v-btn>
    </form>
    Hola</div>
</template>

<script>


export default {
   
}
</script>

<style></style>