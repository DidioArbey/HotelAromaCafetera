<template>
    <v-app>
        <v-sheet  class=" mx-16 my-12"
            color="white"
            elevation="6"

            
        >
            <v-row class=" red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6 ">
                <h2 class="white--text">Nuestras Habitaciones</h2>
            </v-row>

            <v-row justify="center" class="mx-auto my-auto  d-flex px-10  py-6">

                <v-col cols="5">
                <v-img
                src="../assets/habitacion.jpg"
                aspect-ratio="1.7"
                v-img="'.rounded-3'"
                >
                </v-img>
                </v-col>

                <v-col class="text-justify">
                <p>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also 
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </v-col>
            </v-row>

            <v-row class="px-10  py-6">
                <v-col class="mr-10 text-justify"
            >
                    <p>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also 
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </v-col>

                <v-col cols="5">
                    <v-img
                src="../assets/habitacion2.jpg"
                aspect-ratio="1.7"
                    v-img="'.rounded-3'">
                </v-img>

                </v-col>
            </v-row>


            <v-row class="px-10  py-6">

            <v-col cols="5">
                    <v-img
                src="../assets/habitacion3.jpg"
                aspect-ratio="1.7"
                    v-img="'.rounded-3'">
                </v-img>

                </v-col>

                <v-col class="mr-10 text-justify"
            >
                    <p>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also 
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </v-col>

               
            </v-row>





        </v-sheet>
    </v-app>
</template>


<script>

export default {
};
</script>

