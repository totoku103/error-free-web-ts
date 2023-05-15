<template>
    <div class="h-screen bg-gray-100 flex">
        <div class="w-30 bg-white border-r border-gray-200 p-4">
            <ul>
                <li class="mb-2 flex">
                    <router-link to="/" class="block py-2 px-4 hover:bg-gray-200 rounded">
                        <font-awesome-icon icon="fa-solid fa-house"/>
                    </router-link>
                </li>
                <li class="mb-2">
                    <router-link to="/test" class="block py-2 px-4 hover:bg-gray-200 rounded">
                        <font-awesome-icon icon="fa-solid fa-vials"/>
                    </router-link>
                </li>
                <li class="mb-2">
                    <router-link to="/event/detect" class="block py-2 px-4 hover:bg-gray-200 rounded">
                        <font-awesome-icon icon="fa-solid fa-bell"/>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="flex-1 p-3">
            <h1 class="text-3xl font-bold">
                <router-view/>
            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "DefaultLayout"
}
</script>

<style scoped>

</style>