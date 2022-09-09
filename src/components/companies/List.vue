<template>
  <v-simple-table>
    <template v-slot:default >
      <thead>
        <tr>
          <th class="text-center">Nome</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td class="text-center">{{item.name}}</td>
          <td class="text-center">
            <v-btn small icon class="mx-3">
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
            <v-btn small icon class="mx-3">
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    data () {
      return{
        desserts:[
          {name: 'NPX'},
          {name: 'Restaurante A'},
          {name: 'Restaurante B'},
          {name: 'Restaurante C'},
          {name: 'Restaurante D'},
        ]
      }
    }
  }
</script>