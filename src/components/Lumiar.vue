<template>
    <Delivery :items="items"></Delivery>
</template>

<script>
import deliveries from '@/assets/json/lumiar.json'
import Delivery from './Delivery'

export default {
    name: 'Lumiar',
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
