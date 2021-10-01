<template>
    <v-app>
        <v-sheet  class=" mx-16 my-12" color="white" elevation="6" height="700">
            <v-row class=" red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6 ">
                <h2 class="white--text">Hotel Aroma Cafetera - Circasia, Quindío</h2>
            </v-row>

            <v-row justify="center" class="mx-auto my-auto  d-flex px-10  py-6">
                <v-carousel>
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </v-row>

        </v-sheet>
    </v-app>
</template>


<script>
    export default {
        data () {
            return {
                items: [
                    {
                        src: 'https://viride21.com/photos/aroma01.jpg',
                    },
                    {
                        src: 'https://viride21.com/photos/aroma04.jpg',
                    },
                    {
                        src: 'https://viride21.com/photos/aroma07.jpg',
                    },
                    {
                        src: 'https://viride21.com/photos/aroma09.jpg',
                    },
                    {
                        src: 'https://viride21.com/photos/aroma11.jpg',
                    },
                    {
                        src: 'https://viride21.com/photos/aroma05.jpg',
                    },
                ],
            }
        },
    }
</script>
