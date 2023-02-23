<template>
    <section class="dashboard flex flex-row min-h-screen text-gray-800">
        <SideBar/>
        <DataGrid/>
    </section>
</template>

<script>
import DataGrid from "@/components/DataGrid.vue";
import SideBar from "@/components/SideBar.vue";

export default {
    name: "Dashboard",

    components: {
        SideBar,
        DataGrid,
    },

}
</script>

