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
          class="h-18 m-5 transition-all"
          src="https://instagram.fmad18-1.fna.fbcdn.net/v/t51.82787-19/902584973_17929756449221296_1864981651381953061_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ig_cache_key=GI1azDWwqhC8BLM-ACUiPkvuvuEZbmNDAQAB0j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy42MDcuQzMifQ%3D%3D&_nc_ohc=4w2BCR-hlLYQ7kNvwH5NU2R&_nc_oc=AdpN0D8YbZnJIKTIPqeovttCkDQAxfCk6YPGMebhO4u3jtv9gH_GfPoEtVBmzN-OZ4I&_nc_zt=24&_nc_ht=instagram.fmad18-1.fna&_nc_gid=U-zqpYuxLcvY1FZf_vYiKw&_nc_ss=7b6a8&_nc_ct=RQosPBUCFQIAAAA&oh=00_AQTX1XElz43Ybts93ZpERM4yvTKeLwt2xGZJ18DTV9Rl2A&oe=6AFE5E3C"
          /> 
          <h1 class="text-2xl md:text-4xl text-red-500 font-bebas-neue leading-6">
            LA ESTAMPA <span class="font-work-sans-black text-3xl md:text-5xl leading-6">R</span>OJA
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