<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>

<template>
  <div>
    <div class="h-[80%] flex flex-col items-center justify-center">
      <img
      class="w-[300px] md:w-[350px] m-5"
      src="https://instagram.fmad18-1.fna.fbcdn.net/v/t51.82787-19/902584973_17929756449221296_1864981651381953061_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ig_cache_key=GI1azDWwqhC8BLM-ACUiPkvuvuEZbmNDAQAB0j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy42MDcuQzMifQ%3D%3D&_nc_ohc=4w2BCR-hlLYQ7kNvwH5NU2R&_nc_oc=AdpN0D8YbZnJIKTIPqeovttCkDQAxfCk6YPGMebhO4u3jtv9gH_GfPoEtVBmzN-OZ4I&_nc_zt=24&_nc_ht=instagram.fmad18-1.fna&_nc_gid=U-zqpYuxLcvY1FZf_vYiKw&_nc_ss=7b6a8&_nc_ct=RQosPBUCFQIAAAA&oh=00_AQTX1XElz43Ybts93ZpERM4yvTKeLwt2xGZJ18DTV9Rl2A&oe=6AFE5E3C"
      /> 
      
      <h1 class="text-6xl text-red-500 font-bebas-neue">
        LA ESTAMPA <span class="font-work-sans-black text-7xl">R</span>OJA
      </h1>
      <p class="text-xl font-bold mt-2 w-80 text-center">
        Colectivo de arte revolucionario al servicio de la clase trabajadora
      </p>
  
      <div class="flex gap-2 mt-5">
        
        <a href="https://www.instagram.com/laestamparoja/">
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