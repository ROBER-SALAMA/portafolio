<template>
    <body class="z-0">
        
    </body>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    body {
    //width: 100wh;
    height: 100vh; 
    background: linear-gradient(132deg, #454545, #900C3F, #FF6000 , #FFA559, #0000FF, #C70039);
    background-size: 400% 400%;
    animation: BackgroundGradient 25s ease infinite;
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

// @media (max-width: 768px) {
//   body {
//     height: 96vh;
//   }


// }


</style>