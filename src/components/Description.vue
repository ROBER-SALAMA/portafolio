<template>

    <div id="container" class="min-h-screen w-screen flex items-center justify-center z-20 absolute">
    <div class="w-full max-w-6xl rounded shadow-xl p-10 lg:p-20 mx-auto text-gray-800 md:text-left ">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src="../../public/img/yo2.jpg" class="w-full relative z-10 rounded-3xl	" alt="rs">
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5">Roberto Salama <br>front end developer</h1>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
h1,
h2 {
    position: absolute;
    font-family: initial;
    word-spacing: 5px;
    background: linear-gradient(90deg, #ff0000, #ffff00, #ff00f3, #FFDF00, #FFB900, #ff0000);
    background-size: 400%;
    /* Cambiamos el tamaño del fondo */
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    animation: animate 10s linear infinite;
}

.container{
    
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