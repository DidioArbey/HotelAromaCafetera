<template>
    <v-app>
        <v-sheet  class=" mx-16 my-12"
            color="white"
            elevation="6"
            rounded
            height= auto
        >
            <v-row class=" red darken-4 mx-auto my-auto rounded-t-lg d-flex px-10 py-6 ">
                <h2 class="white--text">LOGIN</h2>
            </v-row>
            <v-row>
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                <v-text-field
                v-model="user"
                :couter="10"
                :rules="userRules"
                label="User"
                required
                ></v-text-field>
                <v-text-file
                v-model="password"
                :counter="10"
                :rules="passwordRules"
                label="Password"
                ></v-text-file>
                <v-btn
                :disabled="!valid"
                color="success"
                block
                @click="ingresar"
                >
                Ingresar
                </v-btn>

                </v-form>
            </v-row>




        </v-sheet>
    </v-app>

</template>

<script>
export default {

}
</script>

<style>

</style>