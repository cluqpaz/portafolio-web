import Contacto from "@/pages/Contacto.vue";
import ArtesPlast from "@/pages/galeria/ArtesPlast.vue";
import Galeria from "@/pages/galeria/Galeria.vue";
import Literatura from "@/pages/galeria/Literatura.vue";
import Musica from "@/pages/galeria/Musica.vue";
import Home from "@/pages/home/Home.vue";
import Layout from "@/pages/home/Layout.vue";
import Manifiesto from "@/pages/Manifiesto.vue";
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'inicio',
          component: Home
        }
      ]
    },
    {
      path: '/galeria',
      component: Layout,
      children: [
        {
          path: '',
          name: 'galeria',
          component: Galeria
        },
        {
          path: 'artesplasticas',
          name: 'artesplas',
          component: ArtesPlast
        },
        {
          path: 'literatura',
          name: 'literatura',
          component: Literatura
        },
        {
          path: 'musica',
          name: 'musica',
          component: Musica
        }
      ]
    },
    {
      path: '/manifiesto',
      component: Layout,
      children: [
        {
          path: '',
          name: 'manifiesto',
          component: Manifiesto
        }
      ]
    },
    {
      path: '/contacto',
      component: Layout,
      children: [
        {
          path: '',
          name: 'contacto',
          component: Contacto
        }
      ]
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})