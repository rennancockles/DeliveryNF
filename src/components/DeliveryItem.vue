<template>
    <v-card color="#4b75a1" height="230" class="my-3" raised shaped dark>
        <div class="d-flex flex-no-wrap justify-space-between">
            <div>
                <v-card-title
                    class="headline mx-auto"
                    v-text="item.name"
                ></v-card-title>

                <v-card-text>
                    <div v-if="item.phone" class="my-4 subtitle-1 delivery-info">
                        <v-icon :color="iconColor">mdi-phone</v-icon>
                        {{ item.phone }}
                    </div>

                    <div v-if="item.instagram" class="my-4 subtitle-1 delivery-info">
                        <a class="insta" target="_blank" rel="noopener noreferrer" :href="`https://www.instagram.com/${item.instagram}/`">
                            <v-icon :color="iconColor">mdi-instagram</v-icon>
                            @{{ item.instagram }}
                        </a>
                    </div>

                    <div v-if="item.site" class="my-4 subtitle-1 delivery-info">
                        <a class="site" target="_blank" rel="noopener noreferrer" :href="`http://${item.site}`">
                            <v-icon :color="iconColor">mdi-earth</v-icon>
                            {{ item.site }}
                        </a>
                    </div>
                </v-card-text>
            </div>
        </div>
    </v-card>
</template>

<script>

export default {
    name: 'DeliveryItem',
    props: ['item'],
    data () {
        return {
            iconColor: '#132741'
        }
    }
}
</script>

<style lang="scss">
.delivery-info, .delivery-info > a {
    color: #c8c8c8;
    text-decoration: none;
}
</style>
