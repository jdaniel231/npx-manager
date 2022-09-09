<template>
  <div class="bread-div" >
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <br>
    <v-row>
      <v-col lg="12">
        <v-card>
          <v-app-bar>
            <v-toolbar-title>Empresa</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              icon
              class="mb-2"
              @click="newCompany"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-app-bar>
          <List />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import List from '../../components/companies/List.vue';
  export default {
    name: "companies",
    data: () => ({
      items: [
        {
          text: "Dashboard",
          disabled: false,
          href: "/",
        },
        {
          text: "Empresa",
          disabled: true,

        }
      ]
    }),
    components: { List },
    methods: {
      newCompany(){
        this.$router.push("/companies/new")
      }
    }
};
</script>
