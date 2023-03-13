<template>
  <v-container class="grey lighten-5 tablaG">
    <div>
      <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="150" max-width="250"
        src="https://picsum.photos/id/11/500/300"></v-img>
      <p class="nombre">Nombre de la cuenta</p>
      <!-- No se si queremos editar cuenta usuario -->
      <v-btn class="nombre">Editar cuenta</v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-simple-table class="tabla">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">
              Nombre usuario
            </th>
            <th class="text-center">
              Fecha creación usuario
            </th>
            <th class="text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(item) in usuarios" :key="item.id">
            <td class="text-center">{{ item.nombre }}</td>
            <td class="text-center">{{ item.fecha }}</td>
            <td class="text-center">{{ item.id }}</td>
            <v-btn class="btneliminar"  @click="borrarElemento(item.id)">Eliminar</v-btn>
          </tr>

        </tbody>
      </template>
    </v-simple-table>
    <v-spacer></v-spacer>
    <!-- <v-simple-table class="tabla">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">
              Nombre Videojuego
            </th>
            <th class="text-left">
              Unidades restantes
            </th>
            <th class="text-left">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in videojuegos" :key="item.id">
            <td>{{ item.nombre }}</td>
            <td>{{ item.unidades }}</td>
            <v-btn class="btneliminar" @click="borrarElemento(elemento.id)"    >Eliminar</v-btn>
          </tr>
        </tbody>
      </template>
    </v-simple-table> -->

  </v-container>
</template>
  
<script>
import {mapState, mapActions} from "vuex";
export default {
    nmethods: {
    ...mapActions(["fetchUsuarios"])
  },
   computed:{
    user(){
      return this.usuarios
    },
    ...mapState(["usuarios"])
  }

};
</script>
  
<style>
.tabla {
  width: 350px;
}

.btneliminar {
  width: 40px;
  height: 40px;
  font-size: 12px;
}

.tablaG {
  display: flex;
}

.nombre {
  margin-left: 15%;
}
</style>