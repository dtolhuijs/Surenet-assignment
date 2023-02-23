import { defineStore } from 'pinia';

export const FilterStore = defineStore('filters', {
    state: () => ({
        filters: {
            brand: '',
            headers: {
                all: [],
                exclude: [],
            }
        },
    }),

    actions: {
        setHeaders(headers) {
            this.filters.headers.all = headers;
        }
    },
});
