import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        games: [],
        usuarios: []
    },
    mutations: {
        initGames(state, games) {
            state.games = games;
        },
        initUsuarios(state, usuarios) {
            state.usuarios = usuarios;
        },
        eliminarUsuario(state, id){
          state.usuarios = state.usuarios.filter((usuario) => usuario.id != id)
        }
    },
    actions: {
        fetchGames({ commit }) {
               fetch('https://localhost:7210/api/Videojuego')
                .then(response => response.json())
                .then(response => {
                  commit("initGames", response)
                })

                /*Para hace el POST hay que hacer dispatch de recargar
                 para la acción del POST hacer un dispatch de un objeto con todos los datos del form (p.ej.) */

        },
        fetchUsuarios({ commit }) {
               fetch('https://localhost:7210/api/Usuarios',{
                method:'GET'
               })
                .then(response => response.json())
                .then(response => {
                  commit("initUsuarios", response)
                })

                /*Para hace el POST hay que hacer dispatch de recargar
                 para la acción del POST hacer un dispatch de un objeto con todos los datos del form (p.ej.) */

        },
        fetchUsuarioDELETE({commit}, id){
          return fetch(`https://localhost:7210/api/Usuarios/${id}`,{
            method: 'DELETE'
          })
          .then(() => {
            commit(`eliminarUsuario`, id)
          })
          .catch((error) => {
            console.error(error);
          })
        }
    },
     getters: {
       /*  getGames(state) {
          debugger
            return state.games;
        }, */
    }, 
    modules: {},
});