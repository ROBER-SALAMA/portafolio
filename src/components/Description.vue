<template>
    <div class="h-screen flex items-center z-20 absolute inset-0 ml-36">
        <h1 class="text-7xl ">Roberto Salama</h1>
        <h2 class="mt-36 text-5xl">Front-end Developer</h2>
    
</div>

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
h1,
h2 {
    position: absolute;
    // top: 35%;
    // left: 30%;
    //  font-size: 70px;
    font-family: initial;
    word-spacing: 5px;
    background: linear-gradient(90deg, #ff0000, #ffff00, #ff00f3, #FFDF00, #FFB900, #ff0000);
    background-size: 400%;
    /* Cambiamos el tamaño del fondo */
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    animation: animate 10s linear infinite;
}

.contenedor{
    background-color: #0033ff;
    width: 40%;
    height: 50%;
}

@keyframes animate {
    0% {
        background-position: 0% 0;
    }

    100% {
        background-position: 400%;
    }
}
</style>