<template>
    <thead>
        <tr class="row">
            <th v-for="header in headers" v-if="! exclude.includes(header)" :key="header"
                class="table-header col p-4 pr-6 capitalize text-center"
            >
                {{ header.replaceAll('_', ' ') }}
            </th>
        </tr>
    </thead>
</template>

<script>
export default {
    name: "Header",

    props: {
        headers: {
            type: Array,
            required: true
        },

        exclude: {
            type: Array,
            required: true
        },
    }
}
</script>

<style>
    .table-header {
        background-color: #fff;
        border-bottom: 2px solid #000;
        color: #4c4c4c;
    }
</style>
