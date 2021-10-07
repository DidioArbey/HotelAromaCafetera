<template>
    <v-app>
        <v-sheet  
            class="mx-16 my-12" 
            color="white" 
            rounded 
            height="auto"
            elevation="6"
        >

            <v-row class=" red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6 ">
                <v-img
                max-height="44"
                max-width="auto"
                align-end
                contain
                src="../assets/img/reserve-b.png"
                ></v-img>
            </v-row>

            <v-row 
                justify="center" 
                class="mx-15 my-8  d-flex px-10  py-6">
                    <h3>Paso 1: Llene sus datos personales</h3>

                    <v-form v-model="valid">
                    <v-container bg fill-height>
                    <v-row class=" d-flex">

                        <v-col class="mr-8">
                        <v-text-field
                            v-model="names"
                            :rules="nameRules"
                            label="Nombres"
                            required
                            solo
                        ></v-text-field>
                        </v-col>

                        <v-col>
                        <v-text-field
                            v-model="lastName"
                            :rules="lastNameRules"
                            label="Apellidos"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col class="mr-8">
                        <v-text-field
                            v-model="idNumber"
                            :rules="cedulaRules"
                            label="Cédula"
                            required
                            solo
                        ></v-text-field>
                        </v-col>

                        <v-col>
                        <v-text-field
                            v-model="cellNumber"
                            :rules="cellRules"
                            label="Número Celular"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col class="mr-8">
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="e-mail"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-text-field
                            v-model="city"
                            :rules="cityRules"
                            label="Ciudad de Origen"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mt-10">
                        <v-btn
                        @click="clear" 
                        class="mr-10 red darken-4 px-10">
                            <span class="white--text">Limpiar</span>
                        </v-btn>

                        <v-btn
                        @click="submit"
                        class="mr-10 red darken-4 px-10"
                        type="submit"
                        :disabled="invalid">
                            <span class="white--text">Siguiente</span>
                        </v-btn>
                    </v-row>
                    </v-container>
                </v-form>
            </v-row>
        </v-sheet>
    </v-app>
</template>


<script>

export default {
    data: () => ({
        name: '',
        phoneNumber: '',
        email: '',
        comments: '',
    }),
    computed: {
        dateRangeText () {
        return this.dates.join(' ~ ')
        },
    },


        methods: {
        submit () {
            this.reservar2()
        },
        clear () {
            this.names = ''
            this.lastName = ''
            this.phoneNumber = ''
            this.email = ''
            this.cellNumber = ''
            this.idNumber = ''
            this.city = ''
            this.$refs.observer.reset()
        },
        },
};
</script>