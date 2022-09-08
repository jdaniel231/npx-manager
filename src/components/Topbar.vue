<template>
  <v-app-bar app color="#F5F6FA" elevate-on-scroll elevation="4">
    <v-app-bar-nav-icon @click="$emit('handleDrawer')"></v-app-bar-nav-icon>

    <v-toolbar-title>NPX Manager</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-responsive max-width="260">
      <v-text-field 
        label="Pesquisar"      
        dense
        flat
        prepend-icon="fa fa-search"
        rounded
        solo-inverted
        class="mt-6 mr-2" sm="2"
      ></v-text-field>
    </v-responsive>
   
    <v-btn  icon  elevation="0" class="mr-2" >
      <v-icon color="primary">fas fa-bell</v-icon>
    </v-btn> 
   
  </v-app-bar> 
</template>

<script>
  export default {
    name: 'Topbar',
    data: () => ({
      
    })
  }
</script>