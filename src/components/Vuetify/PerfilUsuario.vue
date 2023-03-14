<template>
  <v-container class="grey lighten-5 tablaG">
    <div>
      <v-img
       :src="require('@/assets/estampita.jpg')"
       contain
        max-height="300"
        max-width="450"
        
      ></v-img>
      <p class="nombre">Cuenta SuperAdmin</p>
      <!-- No se si queremos editar cuenta usuario -->
      <v-btn class="nombre">Editar cuenta</v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-simple-table class="tabla">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Nombre usuario</th>
            <th class="text-center">Fecha creación usuario</th>
            <th class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in usuarios" :key="item.id">
            <td class="text-center">{{ item.id }}</td>
            <td class="text-center">{{ item.nombre }}</td>
            <td class="text-center">{{ item.fecha }}</td>

            <v-btn class="btneliminar" @click="fetchUsuarioDELETE(item.id)">Eliminar</v-btn>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-spacer></v-spacer>
  </v-container>
</template>
  
<script>
import store from "@/store/store";
//import store from '@/store/store';
import { mapState, mapActions } from "vuex";
export default {
  
  methods: {
    ...mapActions([store.dispatch("fetchUsuarios")]),
    ...mapActions(["fetchUsuarioDELETE"]),
  },
  computed: {
    usuarios() {
      return this.usuarios;
    },
    ...mapState(["usuarios"]),
  },
};
</script>
  
<style>
.tabla {
  width: 650px;
}

.btneliminar {
  width: 40px;
  height: 40px;
  font-size: 12px;
}

.tablaG {
  display: flex;
  height: 710px;
}

.nombre {
  margin-left: 30%;
}
</style>