<template>
    <tr class="hover:!bg-gray-100">
        <td
            v-for="header in headers" v-if="! exclude.includes(header)" :key="header"
            class="p-2 pr-6 border-b text-center text-xs"
        >
            <div v-if="header !== 'kenteken'">
                {{ parseValue(header) }}
            </div>

            <div class="grid pl-2"  v-else>
                <div class="rounded-lg bg-white shadow-lg">
                    <div class="flex w-full rounded-lg border-2 border-black bg-yellow-500 shadow">
                        <label class="flex flex-col justify-between bg-blue-700 rounded-l p-1 text-xs font-bold text-white">
                            <img class="h-2" src="https://cdn.cdnlogo.com/logos/e/51/eu.svg" alt=""/>NL</label>
                        <label class="p-2 pt-2 font-mono text-xs font-medium">{{  row[header] }}</label>
                    </div>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Row",

    props: {
        headers: {
            type: Array,
            required: true
        },

        exclude: {
            type: Array,
            required: true
        },

        row: {
            type: Object,
            required: true
        }
    },

    methods: {
        parseValue(header) {
            let value = this.row[header];

            if (value && header.includes('datum')) {
                return this.parseDate(value);
            }

            return value;
        },

        parseDate(date) {
            const year = date.slice(0, 4);
            const month = date.slice(4, 6);
            const day = date.slice(6, 8);

            return `${year}-${month}-${day}`;
        }
    }
}
</script>

<style>

    tr {
        white-space: nowrap;
    }

</style>
