<template>
    <div id="content" class="flex items-center justify-center h-screen ">
    <div class="max-w-lg mx-auto my-10 bg-slate-200 rounded-lg shadow-md p-5  ">
        <img class="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture">
        <h2 class="text-center text-2xl font-semibold mt-3">Roberto Salama</h2>
        <p class="text-center text-gray-600 mt-1">front end developer</p>
        <div class="flex justify-center mt-5">
            <a href="https://www.facebook.com/carlos.hernandez.15" target="_blank" class="mx-3"><img src="../../public/img/facebook.png" alt="facebook"></a>
            <a href="https://www.instagram.com/rober.salama/" target="_blank" class="mx-3"><img src="../../public/img/instagram.png" alt="instagram"></a>
            <a href="https://github.com/ROBER-SALAMA" target="_blank" class="mx-3"><img src="../../public/img/github.png" alt="github"></a>
        </div>
        <div class="mt-5">
            <hr>
            <h3 class="text-xl font-semibold">Bio</h3>
            <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis, sed voluptatibus assumenda atque omnis minima, voluptas minus ratione repellendus sint laudantium rem, aliquam distinctio quia optio a aliquid deserunt.</p>
        </div>
    </div>
</div>

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
hr{
  background-color: #94a3b8;
  height: 3px;
}

a{
  width: 30px;
  height: 30px;
}

#content{
  
  width: 100vw;
  height: 100vh;
}


</style>