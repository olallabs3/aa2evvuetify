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
          <tr v-for="item in users" :key="item.nombre">
            <td class="text-center">{{ item.nombre }}</td>
            <td class="text-center">{{ item.fecha }}</td>
            <v-btn class="btneliminar">Eliminar</v-btn>
          </tr>

        </tbody>
      </template>
    </v-simple-table>
    <v-spacer></v-spacer>
    <v-simple-table class="tabla">
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
          <tr v-for="item in videojuegos" :key="item.nombre">
            <td>{{ item.nombre }}</td>
            <td>{{ item.unidades }}</td>
            <v-btn class="btneliminar">Eliminar</v-btn>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

  </v-container>
</template>
  
<script>
export default {
  data() {
    const data = {};
    fetch("https://rickandmortyapi.com/api/character", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // procesar respuesta en caso de éxito
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    return {
      users: [
        {
          nombre: 'Usuario1',
          fecha: '12/03/1986',
        },
        {
          nombre: 'Usuario1',
          fecha: '12/03/1986',
        },
        {
          nombre: 'Usuario1',
          fecha: '12/03/1986',
        },
        {
          nombre: 'Usuario1',
          fecha: '12/03/1986',
        },
        {
          nombre: 'Usuario1',
          fecha: '12/03/1986',
        },
      ],
      videojuegos: [
        {
          nombre: 'Videojuego1',
          unidades: 2,
        },
        {
          nombre: 'Videojuego2',
          unidades: 3,
        },
        {
          nombre: 'Videojuego3',
          unidades: 1,
        },
        {
          nombre: 'Videojuego4',
          unidades: 2,
        },
        {
          nombre: 'Videojuego5',
          unidades: 0,
        },
      ],
    }
  },
}
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