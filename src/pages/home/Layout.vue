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
   <div class="w-screen h-20 bg-stone-900 p-4 flex items-center justify-between">
        <div class="flex items-center">
          <img
          class="h-18 mr-2 transition-all"
          src="/public/logos/logo estampa roja rojo.png"
          /> 
          <h1 class="text-2xl md:text-4xl text-red-500 font-bebas-neue leading-6">
            LA ESTAMPA ROJA
          </h1>
        </div>
        <div class="flex gap-4 text-red-500 font-work-sans-regular">
            <RouterLink to="/" active-class="font-bold">Inicio</RouterLink>

            <DropdownMenu >
              <DropdownMenuTrigger>Galería</DropdownMenuTrigger>
              <DropdownMenuContent class="bg-stone-900 text-red-500 rounded-none">
                <RouterLink to="/galeria/artesplasticas" active-class="font-bold">
                  <DropdownMenuItem>Artes Plásticas</DropdownMenuItem>
                </RouterLink>
                <RouterLink to="/galeria/musica" active-class="font-bold">
                  <DropdownMenuItem>Música</DropdownMenuItem>
                </RouterLink>
                <RouterLink to="/galeria/literatura" active-class="font-bold">
                  <DropdownMenuItem>Literatura</DropdownMenuItem>
                </RouterLink>
              </DropdownMenuContent>
            </DropdownMenu>

            <RouterLink to="/manifiesto" active-class="font-bold">Manifiesto</RouterLink>

            <RouterLink to="/Contacto" active-class="font-bold">Contacto</RouterLink> 
        </div>
   </div> 
   
   <main>
    <RouterView />
   </main>
</template>