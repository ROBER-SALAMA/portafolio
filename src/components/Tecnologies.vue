<template>
  <!-- component -->
<div class="flex h-screen flex-col items-center justify-center space-y-6 bg-gray-100 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
        <div class="w-full max-w-sm overflow-hidden rounded-lg bg-slate-600 shadow-md duration-300 hover:scale-105 hover:shadow-xl">
          <oh-vue-icon name='BiAwardFill' scale="4" animation="wrench" class="dark:text-white "></oh-vue-icon>
          <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">Success</h1>
          <p class="my-4 text-center text-sm text-gray-500">Woah, successfully completed 3/5 Tasks</p>
          
        </div>
        <div class="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mt-8 h-16 w-16 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <h1 class="mt-2 text-center text-2xl font-bold text-gray-500">Cancel</h1>
          <p class="my-4 text-center text-sm text-gray-500">Just a small miss, 2/5 Tasks</p>
          <div class="space-x-4 bg-gray-100 py-4 text-center">
            <button class="inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400">Cancel</button>
            <button class="inline-block rounded-md bg-green-500 px-6 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">Try Again</button>
          </div>
        </div>
      </div>
  <div class="w-auto h-64 p-5 flex flex-col bg-red-500 justify-center items-center">
  <h3 class="text-lg sm:text-xl md:text-2xl text-black mb-8 text-center dark:text-white">Technologies</h3>
  <div class="flex flex-row flex-5 p-3 m-3 justify-center items-center">
    <oh-vue-icon name='la-html5' scale="4" animation="wrench" class="dark:text-white mx-auto my-auto"></oh-vue-icon>
    <oh-vue-icon name='la-css3-alt' scale="4" animation="wrench" class="dark:text-white mx-auto my-auto"></oh-vue-icon>
    <oh-vue-icon name='fa-js' scale="4" animation="wrench" class="dark:text-white mx-auto my-auto"></oh-vue-icon>
    <oh-vue-icon name='co-react' scale="4" animation="wrench" class="dark:text-white mx-auto my-auto"></oh-vue-icon>
    <oh-vue-icon name='co-vue-js' scale="4" animation="wrench" class="dark:text-white mx-auto my-auto"></oh-vue-icon>

  </div>
</div>
</template>

<script lang="ts" setup>
  import OhVueIcon from '../plugins/oh-vue-icons';
</script>

<style lang="scss" scoped></style>