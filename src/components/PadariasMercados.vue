<template>
    <Delivery :items="items"></Delivery>
</template>

<script>
import deliveries from '@/assets/json/padariasMercados.json'
import Delivery from './Delivery'

export default {
    name: 'PadariasMercados',
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
