<template>
  <v-simple-table
    :dense="dense"
    :fixed-header="fixedHeader"
    :height="height"
    
  >
    <template v-slot:default >
      <thead>
        <tr>
          <th class="text-center">Nome</th>
          <th class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in companies" :key="item.id"
        >
          <td class="text-center">{{item.name}}</td>
          <td class="text-center">
            <v-btn small icon class="mx-3" @click="edit(item.id)">
              <v-icon> mdi-pencil </v-icon>
            </v-btn>
            <v-btn small icon class="mx-3" @click="remove(item.id)">
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>

  import { Factory } from '../../api/factory'
  const CompanyApi = Factory.get("companies")

  export default {
    name: 'ListCompanies',
    props: {
      companies: Array
    },
    data: () => ({
      dense: false,
      fixedHeader: true,
      height: 640
    }),  
    methods: {
      list(){
        CompanyApi.list({}).then(response => {
          this.companies = response.data
        }).catch(err => {
          console.log(err.response)
        })
      },
      edit: function(id){
        this.$router.push(`/companies/${id}/edit`);
      },
      remove: function(id){
      if(confirm("Você realmente deseja excluir ?")){
        CompanyApi.delete(id).then(() => {
          this.list()
        })
      }
    }
  }
}
</script>