<template>
    <div class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <div class="main-content p-2 bg-gray-200">
            <div class="flex flex-col flex-grow bg-white rounded">
                <div class="content-body">
                    <div class="b-overlay-wrap position-relative">
                        <div class="b-overlay-wrap position-relative">
                            <div class="card mb-0">
                                <div id="infinite-list" class="infinite-scroll-container">
                                    <div class="position-relative table-responsive">
                                        <table class="table-fixed border-b table b-table">
                                            <!-- HEADERS -->
                                            <Headers
                                                :headers="headers"
                                                :exclude="filterStore.filters.headers.exclude"
                                            />

                                            <!-- ROWS -->
                                            <tbody>
                                                <Row
                                                    v-for="row in rows"
                                                    :key="row"
                                                    :exclude="filterStore.filters.headers.exclude"
                                                    :headers="headers"
                                                    :row="row"
                                                />
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div class="table-footer d-flex justify-content-center font-weight-bolder p-4 text-center"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Row from "@/components/DataGrid/Row.vue";
import Headers from "@/components/DataGrid/Headers.vue";
import { FilterStore } from '@/components/SideBar/Filters/FilterStore'

export default {
    components: {
        Headers,
        Row,
    },

    data() {
        return {
            url: 'https://opendata.rdw.nl/resource/m9d7-ebf2.json',
            rows: [],
            headers: [],
            filterStore: FilterStore(),
            filters: {}
        }
    },

    mounted() {
        this.getResources();
    },

    methods: {
        async getResources() {
            try {
                const response = await axios.get(this.url);

                this.rows = response.data;
                this.headers = Object.keys(response.data[0]);
                this.filterStore.setHeaders(this.headers);
            } catch (error) {
                console.error(error);
            }
        },
    },

    watch: {
        'filterStore.filters': {
            deep: true,

            handler(oldValue, newValue) {
                // ACT WITH THE ROWS AND/OR HEADERS
            }
        }
    }
};
</script>

<style>
.main {
    overflow: auto;
}

.card {
    border: none;
    margin-bottom: 2rem;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 0.428rem;
}

#infinite-list {
    overflow: scroll;
    height: 100vh;
}

table {
    border-collapse: separate;
    border-spacing: 0;
}

th {
    font-size: .875rem;
    white-space: nowrap;
    border-bottom: 2px solid;
    position: sticky;
    top: 0;
}

table thead th {
    border-top: none !important;
    border-bottom: none !important;
    box-shadow: inset 0 0 0 #000000, inset 0 -2px 0 #000000;
}
</style>
