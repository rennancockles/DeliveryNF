<template>
    <v-row>
        <v-col cols="12" sm="8" offset-sm="2" md="8" offset-md="2">
            <v-card color="#4b75a1" raised shaped dark>
                <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="headline">
                            Sobre
                        </v-card-title>

                        <v-card-text>
                            <div class="my-4 subtitle-1 sobre-info">
                                Possui um serviço de delivery em Nova Friburgo?
                                <br>
                                Deseja adicionar ao nosso site?
                                <br>
                                Entre em contato pelo email {{ email }} e envie suas informações!
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
    name: 'Sobre',
    data () {
        return {
            email: 'rcdev@hotmail.com.br'
        }
    }
}
</script>

<style lang="scss">
.sobre-info, .sobre-info > a {
    color: #c8c8c8;
    text-decoration: none;
}
</style>
