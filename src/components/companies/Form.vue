<template>
  <v-card-text>
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="company.name"
          label="Nome"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="company.description"
          label="Descrição"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  props:{
    company: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>

</style>