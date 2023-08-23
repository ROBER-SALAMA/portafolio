<template>
    <body class="w-full h-screen flex items-center justify-center z-0">
    </body>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    body {
    background: linear-gradient(132deg, #0f172a, #030001, #1e293b, #0a090a);
    background-size: 400% 400%;
    animation: BackgroundGradient 20s ease infinite;
    position: relative;
}

@keyframes BackgroundGradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}


</style>