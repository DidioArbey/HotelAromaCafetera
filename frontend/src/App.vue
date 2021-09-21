<template>
  <v-app>

    <div id="app">
      <v-toolbar
        dark
        prominent
      >
        <v-app-bar-nav-icon>

        </v-app-bar-nav-icon>

        <v-toolbar-title>Hotel Aroma Cafetera</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
        color="green darken-3"
        elevation="5"
        @click="inicio()"
        >
        El Hotel
        </v-btn>

        <v-btn
        color="green darken-3"
        elevation="5"
        >
        Habitaciones
        </v-btn>

        <v-btn
        color="green darken-3"
        elevation="5"
        >
        Tarifas
        </v-btn>

        <v-btn
        color="green darken-3"
        elevation="5"
        >
        Reservar
        </v-btn>

        <v-btn
        color="green darken-3"
        elevation="5"
        >
        Contactenos
        </v-btn>


      </v-toolbar>

      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/inicio">Inicio</router-link>
      </div>
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  methods:{
    inicio(){
      console.log("ir al inicio funcionando");
      this.$router.push("/");
    }
  }
}
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
