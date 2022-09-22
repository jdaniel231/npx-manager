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
          <List :companies="companies" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

  import List from '../../components/companies/List.vue';
  import { Factory } from '../../api/factory';

  const CompanyApi = Factory.get("companies")

  export default {
    name: "Companies",
    data: () => ({
      companies: [],
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
    created: function() {
      this.list()
    },
    methods: {
      newCompany(){
        this.$router.push("/companies/new")
      },
     
      list(){
        CompanyApi.list({}).then(response => {
          this.companies = response.data
        }).catch(err => {
          console.log(err.response)
        })
      }
      
    }
};
</script>
