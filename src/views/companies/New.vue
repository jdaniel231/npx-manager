<template>
  <div>
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <br>
    <v-card min-height="auto">
      <v-app-bar>
        <v-toolbar-title>
          <span>Cadastro</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon @click="save">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
        <v-btn icon @click="back">
          <v-icon>mdi-arrow-u-left-bottom</v-icon>
        </v-btn>
      </v-app-bar>
      <v-row>
        <v-col>
          <Form :company="company" />
        </v-col>
      </v-row>

    </v-card>
  </div>
</template>

<script>
import Form from "../../components/companies/Form.vue";
import { Factory } from "../../api/factory";
const CompanyApi = Factory.get("companies")

export default {
  name: "NewCompany",
  data: () => ({
    company: {},
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/",
      },
      {
        text: "Empresa",
        disabled: false,
        href: "/companies",
      },
      {
        text: "Novo",
        disabled: true,
      }
    ]
  }),
  methods: {
    back: function () {
      this.$router.push("/companies");
    },
    save: function() {
      CompanyApi.save(this.company).then(response => {
        this.company.id = response.data.id;
        this.back();
      }) 
    }
  },
  components: { Form }
}
</script>

<style>

</style>