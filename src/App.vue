<template>
    <v-app>
        <Toolbar></Toolbar>

        <v-content class="default">
            <v-container grid-list-xl>
                <img class="background" src="@/assets/bg/bg.jpg" alt="Cão Sentado">
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import Toolbar from '@@/Toolbar'

export default {
    name: 'App',
    components: {
        Toolbar
    }
}
</script><style lang="scss">
img.background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}

</style>
