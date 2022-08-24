<template>
  <nav>
    <v-app-bar color="#232620" dark app class="line" height="90" >
      <v-chip 
        class="ma-2" 
        color="grey darken-1" 
        pill      
      >
        Dashboard
          <v-icon right small color="cyan"> fas fa-chevron-circle-down </v-icon>
      </v-chip>
      <v-spacer></v-spacer>
      <v-text-field 
        filled 
        dense r
        rounded 
        label="Pesquisar" 
        prepend-inner-icon="fas fa-search" 
        class="mt-6 mr-2" sm="2"
      ></v-text-field>
      <v-btn fab color="cyan" elevation="0" class="mr-2" >
        <v-icon color="white">fas fa-user</v-icon>
      </v-btn> 
      <v-btn fab color="orange" elevation="0" >
        <v-icon color="white" >fas fa-bars</v-icon>
      </v-btn>
    </v-app-bar> 
    <v-navigation-drawer v-model="drawer" dark app with="100" color="#23262D">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
           <v-icon>fa-solid fa-user</v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Joao Daniel
            </v-list-item-title>
            <v-list-item-subtitle>joao.oliveira@npx.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
     
     
     
      <v-list 
        nav 
        class="mt-5"
        dense
      >
       <!-- paxb io -->
        <v-list-group
          
          prepend-icon="fa-solid fa-phone-flip"
          color="orange darken-3"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>PABX IP</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="([title, icon, path], i) in pabx"
            :key="i"
            :to="path"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon" ></v-icon>
            </v-list-item-icon>
          </v-list-item>         
        </v-list-group>

        <!-- Gestao RH -->
        <v-list-group
          :value="true"
          prepend-icon="fas fa-user"
          color="orange darken-3"
           v-model="selected"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title> RH</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="([title, icon, path], i) in rh"
            :key="i"
            :to="path"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="icon" ></v-icon>
            </v-list-item-icon>
          </v-list-item>         
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      selected: 0,
      pabx:[
        ["Empresa", "fas fa-building", "/companies"],
        ["Centro do custo", "fas fa-dollar-sign", "/cost_center"]
      ],
      rh:[
        ["Colaboradores", "fas fa-hand-holding-medical", "/collaborators"],
      ]
    })
  }
</script>