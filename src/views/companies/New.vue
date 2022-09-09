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
        <v-btn icon>
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
        <v-btn icon @click="back" >
          <v-icon>mdi-arrow-u-left-bottom</v-icon>
        </v-btn>
      </v-app-bar>
      <v-row>
        <v-col>
          <Form />
        </v-col>
      </v-row>

    </v-card>
  </div>
</template>

<script>
import Form from "../../components/companies/Form.vue";
export default {
    name: "NewCompanies",
    data: () => ({
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
                disabled: false,
            }
        ]
    }),
    methods: {
        back: function () {
            this.$router.push("/companies");
        }
    },
    components: { Form }
}
</script>

<style>

</style>