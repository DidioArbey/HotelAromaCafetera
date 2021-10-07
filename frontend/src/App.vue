<template>
  <v-app>
    <div id="app">
      <v-row class="mx-auto my-auto  d-flex px-6">

        <v-col>
          <v-img contain src="./assets/Logo_Aroma_Cafetera.png" max-width="300"></v-img>
        </v-col>
<!-- 
        <v-col  class="px-6">
        </v-col> -->

        <v-col  class="mx-1 my-auto">
          <v-btn color="green darken-2 white--text" elevation="5"
          block large
          @click="inicio()"
          >
          Inicio
          </v-btn>
        </v-col>

          <!-- <v-col class="mx-1 my-auto ">
          <v-btn color="green darken-2 white--text" elevation="5"
          block large
          @click="hotel()"
          >
          El Hotel
          </v-btn>
        </v-col> -->

        <v-col class="mx-1 my-auto ">
          <v-btn color="green darken-2 white--text" elevation="5"
          block large
          @click="habitaciones()"
          >
          Habitaciones
          </v-btn>
        </v-col>

        <v-col class="mx-1 my-auto ">
          <v-btn color="green darken-2 white--text" elevation="5"
          block large
          @click="tarifas()"
          >
          Tarifas
          </v-btn>
        </v-col>

        <v-col class="mx-1 my-auto ">
          <v-btn color="green darken-2 white--text" elevation="5"
          @click="reservar()"
          block large
          >
          Reserve
          </v-btn>
        </v-col>

        <v-col class="mx-1 my-auto">
          <v-btn color="green darken-2 white--text" elevation="5"
          @click="contactenos()"
          block large
          >
          Contáctenos
          </v-btn>
        </v-col>

      </v-row>
      <router-view />
    </div>

    <v-footer dark padless >

      <v-card green accent-3 class="flex" flat tile>

        <v-card-title class="green lighten-1" mx-16 my-12>
          <v-row
            class="mb-1"
            no-gutters>
            <v-col class="green lighten-1">
              <v-icon color="white">fas fa-coffee</v-icon>
            </v-col>
            <v-col class="green lighten-1">
              <v-icon color="white">fas fa-coffee</v-icon>
            </v-col>
            <v-col class="green lighten-1">
              <v-icon color="white">fas fa-coffee</v-icon>
            </v-col>
            <v-col class="green lighten-1">
              <v-icon color="white">fas fa-coffee</v-icon>
            </v-col>
          </v-row>

          <!-- <p>Siguenos... <br></p> -->


          <!-- <strong class="subheading"
            >Encuentranos tambien en nuestras Redes Sociales</strong
          > -->

          <!-- <v-spacer></v-spacer>

          <!-- <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
            dark
            color="#B71C1C"
          >
            <v-icon size="24px" color="#B71C1C">
              {{ icon }}
            </v-icon>
          </v-btn> -->
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} - <strong>Grupo 19  E-1</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
  }),
  methods: {
    inicio() {
      console.log("ir al inicio funcionando");
      this.$router.push("/");
    },
    hotel() {
      console.log("ir al habitaciones funcionando");
      this.$router.push("/hotelView.vue");
    },
    habitaciones() {
      console.log("ir al habitaciones funcionando");
      this.$router.push("/habitacionesview");
    },
    tarifas() {
      console.log("ir al tarifas funcionando");
      this.$router.push("/tarifasview");
    },
    reservar() {
      console.log("ir al tarifas funcionando");
      this.$router.push("/reservasview");
    },
    reservar2() {
      console.log("ir al tarifas funcionando");
      this.$router.push("/reservasview2");
    },
    contactenos() {
      console.log("ir al tarifas funcionando");
      this.$router.push("/contactoview");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
