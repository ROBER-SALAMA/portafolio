<template>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <div class="px-4 py-5 flex-auto">
            <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
                :class="backgroundColorClass">
                <i :class="icon"></i>
            </div>
            <h6 class="text-xl font-semibold">{{ title }}</h6>
            <p class="mt-2 mb-4 text-blueGray-500">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    title: string
    description: string
    icon: string
    backgroundColorClass: string
}

const { title, description, icon, backgroundColorClass } = defineProps<Props>()
</script>

<style lang="scss" scoped></style>