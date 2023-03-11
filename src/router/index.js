import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from '../App.vue';
import InicioView from '../views/InicioView.vue';
import ProductosView from '../views/ProductosView.vue';
import PerfilView from '../views/PerfilView.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Inicio', component: InicioView },
  { path: '/inicio', name: 'Inicio', component: InicioView },
  { path: '/productos', name: 'Productos', component: ProductosView },
  { path: '/perfil', name: 'Perfil', component: PerfilView }
];

const router = new VueRouter({
  routes
});

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app');

export default router;
