<template>
    <v-row>
        <v-col cols="12">
            <v-text-field
            label="Busca"
            v-model="query"
            background-color="#183757"
            prepend-inner-icon="mdi-magnify"
            :suffix="`${deliveriesFiltered.length} resultado${deliveriesFiltered.length !== 1 ? 's' : ''} encontrado${deliveriesFiltered.length !== 1 ? 's' : ''}`"
            outlined
            solo
            clearable
            shaped
            dark
            ></v-text-field>
        </v-col>

        <v-col
        v-for="(delivery_item, i) in deliveriesFiltered"
        :key="i"
        cols="12" sm="8" offset-sm="2" md="6" offset-md="0" lg="4"
        >
            <DeliveryItem :item="delivery_item"></DeliveryItem>
        </v-col>
    </v-row>
</template>

<script>
import DeliveryItem from './DeliveryItem'

export default {
    name: 'Delivery',
    props: ['items'],
    components: {
        DeliveryItem
    },
    data () {
        return {
            query: '',
            deliveries: []
        }
    },
    computed: {
        deliveriesFiltered () {
            return this.deliveries.filter(deli => this.isValidQuery(deli.name))
        }
    },
    methods: {
        isValidQuery (name) {
            const isValid = this.cleanStr(name).includes(this.cleanStr(this.query))
            return isValid
        },
        cleanStr (str) {
            str = str || ''
            return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        }
    },
    created () {
        this.deliveries = this.items.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
    }
}
</script>
