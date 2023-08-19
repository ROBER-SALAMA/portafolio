<template>
    <div>
        <!-- component -->
        <!-- component -->
        <div class="min-h-screen  flex flex-col justify-center sm:py-12">
            <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 class="font-bold text-center text-2xl mb-5">Contat me.</h1>
                <div class="bg-slate-200 shadow w-full rounded-lg divide-y divide-gray-200">
                    <div class="px-5 py-7">
                        <form action="">
                            <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                            <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                placeholder="example@dominio.com" />
                            <label class="font-semibold text-sm text-gray-600 pb-1 block">Name</label>
                            <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                placeholder="Full Name" />
                            <label class="font-semibold text-sm text-gray-600 pb-1 block">Message</label>
                            <textarea type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                placeholder="Type your message" />
                            <button type="button"
                                class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                <span class="inline-block mr-2">Submit</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" class="w-4 h-4 inline-block">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>