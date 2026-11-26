<script lang="ts">
import { ref } from 'vue';
import { ListaObras, type tipoObra } from './dataObras';

const listadeObras = ref<tipoObra[]>(ListaObras)

</script>

<template>
    <div class="flex flex-wrap items-center p-4 gap-4">
        <div
        class= "p-4 flex flex-col items-center gap-4 border border-black shadow-2xl"
        >
            <img 
            src="/public/imagenes/vaga_general_bn.jpg"
            class="max-h-100 max-w-150"
            />
            <div class=" max-w-150 flex flex-col justify-center text-center">
                <h1 class="text-3xl font-work-sans-bold">Vaga general BN</h1>
                <p class="text-xl font-bebas-neue">
                    <span class=" hover:text-red-600">ARTES VISUALES</span> | 02/11/2026
                </p>
            </div>
        </div>
        
           
    </div>
</template>

<style>

</style>
