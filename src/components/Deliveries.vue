<template>
    <v-row>
        <v-col
        v-for="(delivery_item, i) in deliveries"
        :key="i"
        cols="12" sm="8" offset-sm="2" md="6" offset-md="0" lg="4"
        >
            <DeliveryItem :item="delivery_item"></DeliveryItem>
        </v-col>
    </v-row>
</template>

<script>
import deliveries from '@/assets/json/deliveries.json'
import DeliveryItem from './DeliveryItem'

export default {
    name: 'Deliveries',
    components: {
        DeliveryItem
    },
    data () {
        return {
            deliveries: []
        }
    },
    created () {
        this.deliveries = deliveries
    }
}
</script>
