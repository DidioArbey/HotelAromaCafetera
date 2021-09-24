<template>
  <v-app>
    <div id="app">
      <v-toolbar dark prominent>
        <v-img></v-img>

        <v-toolbar-title>
          <v-img contain src="./assets/logo.png" max-width="280"></v-img
        ></v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn
          class="ma-8"
          color="green darken-3"
          elevation="5"
          x-large
          @click="inicio()"
        >
          El Hotel
        </v-btn>

        <v-btn
          class="ma-8"
          color="green darken-3"
          elevation="5"
          x-large
          @click="habitaciones()"
        >
          Habitaciones
        </v-btn>

        <v-btn
          class="ma-8"
          color="green darken-3"
          elevation="5"
          x-large
          @click="tarifas()"
        >
          Tarifas
        </v-btn>

        <v-btn
          class="ma-8"
          color="green darken-3"
          elevation="5"
          @click="reservar()"
          x-large
        >
          Reservar
        </v-btn>

        <v-btn
          class="ma-8"
          color="green darken-3"
          elevation="5"
          @click="contactenos()"
          x-large
        >
          Contactenos
        </v-btn>
      </v-toolbar>

      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/inicio">Inicio</router-link>
      </div>-->
      <router-view />
    </div>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading"
            >Encuentranos tambien en nuestras redes sociales</strong
          >

          <v-spacer></v-spacer>

          <v-btn
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
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Grupo 19 E-1</strong>
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
