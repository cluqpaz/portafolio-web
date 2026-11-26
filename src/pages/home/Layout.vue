<script setup lang="ts">
import { RouterView } from 'vue-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

</script>

<template>
   <div class="w-full h-20 bg-stone-900 p-4 flex items-center justify-between">
        <div class="flex items-center">
          <img
          class="h-18 mr-2 transition-all"
          src="/logos/logo estampa roja rojo.png"
          /> 
          <h1 class="hidden md:block text-2xl md:text-4xl text-rojo-estampa font-anton leading-6">
            LA ESTAMPA ROJA
          </h1>
        </div>
        <div class="flex gap-4 text-rojo-estampa font-work-sans-regular">
            <RouterLink to="/" class="p-1 hover:font-bold" active-class="bg-rojo-estampa text-black font-bold">Inicio</RouterLink>

            <DropdownMenu >
              <DropdownMenuTrigger class="p-1 hover:font-bold" active-class="bg-rojo-estampa text-black font-bold">Galería</DropdownMenuTrigger>
              <DropdownMenuContent class="bg-stone-900 text-rojo-estampa rounded-none">
                <!-- METER CLASES CONDICIONALES DE LA CLASE VUE-WEB 8, CREAR VARIABLE PARA PAGINA ACTUAL? -->
                <RouterLink to="/galeria/artesplasticas"  active-class="font-bold bg-rojo-estampa">
                  <DropdownMenuItem>Artes Plásticas</DropdownMenuItem>
                </RouterLink>
                <RouterLink to="/galeria/musica" active-class="font-bold">
                  <DropdownMenuItem class="focus:bg-stone-900 focus:text-rojo-estampa focus:font-bold">Música</DropdownMenuItem>
                </RouterLink>
                <RouterLink to="/galeria/literatura" active-class="font-bold">
                  <DropdownMenuItem></DropdownMenuItem>
                </RouterLink>
              </DropdownMenuContent>
            </DropdownMenu>

            <RouterLink to="/manifiesto" class="p-1 hover:font-bold" active-class="bg-rojo-estampa text-black font-bold">Manifiesto</RouterLink>

            <RouterLink to="/Contacto" class="p-1 hover:font-bold" active-class="bg-rojo-estampa text-black font-bold">Contacto</RouterLink> 
        </div>
   </div> 
   
   <main>
    <RouterView />
   </main>
</template>