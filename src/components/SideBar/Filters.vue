<template>
    <section>
        <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            class="ml-2 text-dark bg-white  focus:ring-0 focus:outline-none font-medium text-sm px-4 py-2.5 text-center
                   inline-flex items-center border border-1 border-black"
            type="button"
        >
            Hide or Show columns
            <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <div
            id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-300 shadow w-44 dark:bg-white border border-1 border-black"
        >
            <ul
                v-for="header in headers"
                :key="header"
                class="py-2 text-sm text-dark"
                aria-labelledby="dropdownDefaultButton"
            >
                <li class="flex items-center p-2">
                    <input
                        :checked="! exclude.includes(header)"
                        id="checked-checkbox"
                        type="checkbox"
                        @change="toggleHeader(header)"
                        class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-opacity-0 dark:focus:ring-0
                               dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-gray-600"
                    >
                    <label
                        for="checked-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 capitalize">
                        {{ header.replaceAll('_', ' ') }}
                    </label>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import {FilterStore} from '@/components/SideBar/Filters/FilterStore'

export default {
    name: "Filters",

    data() {
        return {
            filterStore: FilterStore(),
            headers: [],
            exclude: []
        }
    },

    methods: {
        toggleHeader(header) {
            if (this.exclude.includes(header)) {
                this.filterStore.filters.headers.exclude = this.exclude.filter(h => h !== header);

                return;
            }

            this.filterStore.filters.headers.exclude.push(header);
        }
    },

    watch: {
        'filterStore.filters': {
            deep: true,

            handler(oldValue, newValue) {
                this.headers = newValue.headers?.all || [];
                this.exclude = newValue.headers?.exclude || [];
            }
        }
    }
}
</script>

<style>
#dropdown {
    max-height: 300px;
    overflow: scroll;
}
</style>
