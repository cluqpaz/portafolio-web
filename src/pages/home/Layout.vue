<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
   <div class="w-screen h-20 bg-stone-900 p-4 flex items-center justify-between">
        <img
      class="h-18 m-5 transition-all"
      src="https://instagram.fmad18-1.fna.fbcdn.net/v/t51.82787-19/902584973_17929756449221296_1864981651381953061_n.jpg?_nc_cat=103&_nc_map=urlgen_bucketless&ig_cache_key=GI1azDWwqhC8BLM-ACUiPkvuvuEZbmNDAQAB0j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy42MDcuQzMifQ%3D%3D&_nc_ohc=4w2BCR-hlLYQ7kNvwH5NU2R&_nc_oc=AdpN0D8YbZnJIKTIPqeovttCkDQAxfCk6YPGMebhO4u3jtv9gH_GfPoEtVBmzN-OZ4I&_nc_zt=24&_nc_ht=instagram.fmad18-1.fna&_nc_gid=U-zqpYuxLcvY1FZf_vYiKw&_nc_ss=7b6a8&_nc_ct=RQosPBUCFQIAAAA&oh=00_AQTX1XElz43Ybts93ZpERM4yvTKeLwt2xGZJ18DTV9Rl2A&oe=6AFE5E3C"
      /> 
        <div class="flex gap-4 text-red-500">
            <RouterLink to="/" active-class="font-bold">Inicio</RouterLink>
            <RouterLink to="/galeria" active-class="font-bold">Galeria</RouterLink>
            <RouterLink to="/manifiesto" active-class="font-bold">Manifiesto</RouterLink>
            <RouterLink to="/Contacto" active-class="font-bold">Contacto</RouterLink> 
        </div>
   </div> 
   
   <main>
    <RouterView />
   </main>
</template>