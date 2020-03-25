<template>
    <v-row>
        <v-col cols="12" sm="8" offset-sm="2" md="8" offset-md="2">
            <v-card color="#4b75a1" raised shaped dark>
                <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="headline">
                            Contato
                        </v-card-title>

                        <v-card-text>
                            <div class="my-4 subtitle-1 contato-info">
                                Desenvolvemos esta página com o intuito de ajudar a unir as informações sobre os estabelecimentos que, devido à epidemia do
                                COVID-19, estâo oferecendo agora o serviço de delivery.
                                <br>
                                Esperamos que assim possamos ajudar a diminuir os impactos desta quarentena em nossa cidade.
                                <br><br>
                                Possui um serviço de delivery em Nova Friburgo e deseja adicionar ao nosso site?
                                <br>
                                Tem alguma sugestão ou opinião que queira nos dar?
                                <br><br>
                                Entre em contato pelo email <a class="white--text" :href="`mailto:${email}`">{{ email }}</a> e envie suas informações!
                            </div>
                        </v-card-text>
                    </div>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Contato',
    data () {
        return {
            email: 'deliverynf@r3ck.com.br'
        }
    }
}
</script>

<style lang="scss">
.contato-info, .contato-info > a {
    color: #c8c8c8;
    text-decoration: none;
}
</style>
