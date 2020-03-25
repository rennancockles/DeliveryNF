<template>
    <Delivery :items="items"></Delivery>
</template>

<script>
import deliveries from '@/assets/json/friburgo.json'
import Delivery from './Delivery'

export default {
    name: 'Friburgo',
    components: {
        Delivery
    },
    data () {
        return {
            items: []
        }
    },
    created () {
        this.items = deliveries
    }
}
</script>
