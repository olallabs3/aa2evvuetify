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
          <tr  v-for="(item) in data.results" :key="item.id">
            <td class="text-center">{{ item.name }}</td>
            <td class="text-center">{{ item.air_date }}</td>
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
export default {
  data() {
        return {
            data: { results: [] }
        };
    },

    borrarElemento(id) {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al eliminar elemento')
      }
      
      this.actualizarListaElementos()
    })
    .catch(error => {
      console.error(error)
    })
  },
  actualizarListaElementos() {
    fetch('https://rickandmortyapi.com/api/episode')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener lista de elementos')
        }
       
        return response.json()
      })
      .then(data => {
      
        this.elementos = data
      })
      .catch(error => {
        console.error(error)
      })
  },

    mounted() {
        fetch("https://rickandmortyapi.com/api/episode")
            .then((response) => response.json())
            .then((data) => {
                this.data = data;
                console.log(this.data); 
            })
            .catch((error) => console.error(error));
    
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