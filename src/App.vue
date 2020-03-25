<template>
    <v-app>
        <!-- <toolbar></toolbar> -->

        <v-content class="default">
            <v-container grid-list-xl>
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer app>
            <div>{{ version }}</div>
            <v-spacer></v-spacer>
            <div>R3Ck &copy; {{ currentYear }}</div>
        </v-footer>
    </v-app>
</template>

<script>
import deliveries from '@/assets/json/deliveries.json'
// import Toolbar from '@@/nav/Toolbar'

export default {
    name: 'App',
    components: {
        // Toolbar
    },
    data: () => ({
    //
    }),
    computed: {
        currentYear () {
            return new Date().getFullYear()
        },
        version () {
            return 0.1
        }
    },
    methods: {
    },
    created () {
        console.log(deliveries)
    }
}
</script>
