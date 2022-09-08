<template>
  <v-app id="inspire">
    <Topbar @handleDrawer="drawer = !drawer" />
    <Sidebar :drawer="drawer"/>
    <v-main>
      <v-container
        class="px-10"
        fluid
      >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Topbar from './components/Topbar.vue';

export default {
    name: "App",
    data: () => ({
      drawer: true,
    }),
    components: { Sidebar, Topbar }
};
</script>
