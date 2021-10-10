<template>
    <v-app>
        <v-sheet  class="mx-16 my-12" 
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
                    <h3>Paso 2: Escoja su Reserva</h3>

                <v-form v-model="valid">
                    <v-container bg fill-height>
                    <v-row class=" d-flex">
                        <v-col class="mr-8">
                        <v-autocomplete
                            v-model="personas"
                            :items="items"
                            small-chips
                            label="Número de Personas"
                            multiple
                            solo
                        ></v-autocomplete>
                        </v-col>
                        <v-col>
                        <v-autocomplete
                            v-model="bedrooms"
                            :items="items"
                            small-chips
                            label="Habitación"
                            multiple
                            solo
                        ></v-autocomplete>
                        </v-col>
                    </v-row>

                    <v-row class=" d-flex">
                        <v-col class="mr-8" >
                        <v-text-field
                            v-model="dateRangeText"
                            label="Fecha de reserva"
                            prepend-icon="mdi-calendar"
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-date-picker
                            v-model="dates"
                            range
                        ></v-date-picker>
                        </v-col>

                    </v-row>

                    <v-row justify="center" class="mt-10">
                        <v-btn
                        @click="clear" 
                        class="mr-10 red darken-4 px-10">
                            <span class="white--text">Limpiar</span>
                        </v-btn>

                        <v-btn
                        class="mr-10 red darken-4 px-10"
                        type="submit"
                        :disabled="invalid">
                            <span class="white--text">Reservar</span>
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
        dates: ['2021-09-10', '2019-09-20'],
    }),
    computed: {
        dateRangeText () {
        return this.dates.join(' ~ ')
        },
    },

        methods: {
        submit () {
            this.$refs.observer.validate()
        },
        clear () {
            this.numPersons = ''
            this.bedrooms = ''
            this.dateRangeText= ''
            this.$refs.observer.reset()
        },
        },
};
</script>
