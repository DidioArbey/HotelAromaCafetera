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
                max-height="50"
                max-width="auto"
                align-end
                contain
                src="../assets/img/tarifas-b.png"
                ></v-img>
            </v-row>

            <v-row justify="center" class=" mx-auto my-10  d-flex">
                
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Tipo Acomodación
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th class="text-left">
                        Tarifa Persona
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td class="text-left">Acomodación sencilla 
                        </td>
                        <td><v-icon>fas fa-bed</v-icon></td>
                        <td><v-icon>fas fa-bed</v-icon></td>
                        <td><v-icon color="green darken-2">fas fa-wifi</v-icon></td>
                        <td><v-icon color="red darken-4">fas fa-coffee</v-icon></td>
                        <td><v-icon>fas fa-shower</v-icon></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td> 
                    <td>50.000</td>
                    </tr>
                    <tr>
                    <td class="text-left">Acomodación amplia 
                        </td>
                        <td><v-icon>fas fa-bed</v-icon></td>
                        <td><v-icon>fas fa-bed</v-icon></td>
                        <td><v-icon>fas fa-bed</v-icon></td>
                        <td><v-icon color="green darken-2">fas fa-wifi</v-icon></td>
                        <td><v-icon color="red darken-4">fas fa-coffee</v-icon></td>
                        <td><v-icon>fas fa-shower</v-icon></td>
                        <td></td>
                        <td></td>
                        <td></td> 
                    <td>50.000</td>
                    </tr>
                                        <tr>
                    <td class="text-left">Acomodación multiple
                        </td>
                        <td><v-icon>fas fa-bed</v-icon></td>
                        <td><v-icon>fas fa-bed</v-icon></td>
                        <td><v-icon>fas fa-bed</v-icon></td>
                        <td><v-icon>fas fa-bed</v-icon></td>
                        <td><v-icon>fas fa-bed</v-icon></td>
                        <td><v-icon color="green darken-2">fas fa-wifi</v-icon></td>
                        <td><v-icon color="red darken-4">fas fa-coffee</v-icon></td>
                        <td><v-icon>fas fa-shower</v-icon></td>
                        <td></td> 
                    <td>50.000</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
            </v-row>
                <div>
                    <p>* Precios validos unicamente en temporada baja.</p>
                </div>
        </v-sheet>
    </v-app>
</template>

<script>
export default {
    data () {
      return {
        desserts: [
          {
            name: 'Habitación sencilla',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
        ],
      }
    },
  }
</script>

