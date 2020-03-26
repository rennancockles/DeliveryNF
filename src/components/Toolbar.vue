<template>
    <div id="toolbar">
        <v-navigation-drawer v-model="drawer" temporary app>
            <v-list dense>
                <v-list-item
                v-for="item in menuItems"
                :to="item.link"
                :key="item.title"
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon
                class="hidden-sm-and-up"
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>

            <v-avatar
                class="hidden-xs-only"
                size="36"
            >
                <img
                src="@/assets/logo.png"
                alt="Logo Partner Portal"
                >
            </v-avatar>

            <v-toolbar-title>
                <router-link tag="a" class="home" :to="{ path: '/' }">
                    Delivery NF
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn
                class="primary"
                v-for="item in menuItems"
                :key="item.title"
                :to="item.link"
                text
                >
                    <v-icon left>{{ item.icon }}</v-icon> {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>

export default {
    name: 'app',
    components: {
    },
    data () {
        return {
            drawer: null,
            menuItems: [
                {
                    link: '/contato',
                    icon: 'mdi-information-outline',
                    title: 'Contato'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Roboto';
    label {
        font-family: 'Roboto';
        font-weight: bold;
    }
    div[class^='col'] {
        padding-top: 0;
        padding-bottom: 0;
    }
    .v-toolbar__title {
        margin: 0 12px;
    }
}

.v-list {
    padding: 0!important;
}
.v-list--two-line .v-list__tile {
    height: 64px;
}

#toolbar {
    a.home {
        color: #fff;
        text-decoration: none;
    }
    .titlebar {
        -webkit-user-select: none;
        -webkit-app-region: drag;
    }
    .cliccabile {
        -webkit-app-region: no-drag;
    }
    .puntatore {
        cursor: pointer;
    }
    p.logged-user {
        text-align: center;
        margin: 0;
        .role-name {
            color: #bdbdbd;
        }
    }
}
</style>
