<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>

<template>
  <div>
    <div class="h-[80%] flex flex-col items-center justify-center">
      <img
      class="w-[300px] md:w-[350px] m-5"
      src="/public/logos/logo estampa roja color.jpg"
      /> 
      
      <h1 class="text-6xl text-red-500 font-bebas-neue">
        LA ESTAMPA ROJA
      </h1>
      <p class="text-xl font-bold mt-2 w-80 text-center">
        Colectivo de arte revolucionario al servicio de la clase trabajadora
      </p>
  
      <div class="flex gap-2 mt-5">
        
        <a href="https://www.instagram.com/laestamparoja/" targer="_blank">
          <Button
            class=" hover:bg-red-600 active:bg-red-400 flex items-center"
            >
            <img class="-m-1 h-6.75 invert" src="/icons/instagram-logo.svg"/>
            Instagram
          </Button>
        </a>

        <a href="https://substack.com/@estamparoja">
          <Button
            class=" hover:bg-red-600 active:bg-red-400 flex items-center"
            >
            <img class="h-4.5 invert" src="/icons/substack logo.svg"/>
            Substack
          </Button>
        </a>

        <a href="https://laestamparoja.bsky.social">
          <Button
            class=" hover:bg-red-600 active:bg-red-400 flex items-center"
            >
            <img class="h-5 invert" src="/icons/bluesky logo.svg"/>
            Bluesky
          </Button>
        </a>

        <a href="https://medium.com/@estamparoja5">
          <Button
            class=" hover:bg-red-600 active:bg-red-400 flex items-center"
            >
            <img class="h-5 invert" src="/icons/medium logo.svg"/>
            Medium
          </Button>
        </a>
      
    </div>
  </div>

</div>
  

</template>


<style scoped>


</style>