<script setup>
const router = useRouter()
</script>


<template>
    <div class="h-screen flex justify-center items-center">
        <div class="text-center">
            <h1 class="text-5xl">Sorry, we can't find this page</h1>
            <button class="bg-blue-400 text-4xl text-white px-10 py-3 rounded mt-5" @click="router.back">Go Back</button>
        </div>
    </div>
</template>