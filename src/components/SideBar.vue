<template>
    <aside
        class="sidebar w-60 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in"
    >
        <div class="sidebar-content px-4 pt-6 pb-2">
            <p class="px-4 text-xl">
                <span class="font-extrabold text-teal-600">SURE</span>
                <span class="text-teal-600">net</span>
            </p>
        </div>
        <hr>
        <div class="sidebar-content px-4 py-6">
            <ul class="flex flex-col w-full">
                <li class="my-px">
                    <span class="flex font-medium text-sm text-black px-4 my-2 uppercase">FILTERS</span>
                </li>

                <hr class="border-1 border-black">

                <li class="my-px pt-4">

                    <Filters/>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
import Filters from "@/components/SideBar/Filters.vue";

export default {
    name: "SideBar",

    components: {
        Filters,
    }
}
</script>

<style scoped>

    .sidebar {
        background-color: #fff;
        border-right: solid 1px #ddd;
        min-width: 250px;
    }

</style>
