<template>
  <div class="antialiased bg-gray-400">
    <header class="lg:px-16 px-6 bg-c flex flex-wrap items-center lg:py-0 py-2">
      <div class="flex-1 flex justify-between items-center">
        <a href="#">
          <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-dd503.appspot.com/o/naranja%20(1).png?alt=media&token=1463bb05-a299-4caa-89e5-884adc62c563" 
          width="7%" height="7%" alt="logo">
        </a>
      </div>

      <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg></label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav class="">
          <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li><RouterLink to="/" class="lg:px-4 py-3 px-2 block border-b-2 border-transparent hover:border-black" href="#">Home</RouterLink></li>
            <li><RouterLink to="/about" class="lg:px-4 py-3 px-2 block border-b-2 border-transparent hover:border-black" href="#">About</RouterLink></li>
            <li><RouterLink to="/contact" class="lg:px-4 py-3 px-2 block border-b-2 border-transparent hover:border-black" href="#">Contact</RouterLink></li>
          </ul>
        </nav>
      </div>

    </header>
    

</div>
</template>

<script lang="ts" setup>

</script>
<style lang="scss" scoped>#menu-toggle:checked+#menu {
  display: block;
}</style>