<template>  
  <v-navigation-drawer v-model="drawer" dark app with="100" color="black">
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
    
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        link 
        
      >

        <template v-slot:activator>
          <v-list-item-icon>
            <v-icon  style=" font-size: 14px"  v-text="item.action" ></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style=" font-size: 14px"  v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for=" child in item.items"
          :to="child.path"
          :key="child.title"
        >
          <v-list-item-content>
            <v-list-item-title  style=" font-size: 14px"  v-text="child.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon  style=" font-size: 14px" v-text="child.icon" ></v-icon>
          </v-list-item-icon>
        </v-list-item>

      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props:['drawer'],
    name:' Sidebar',

    data: () => ({
      items:[
      {
        action: 'fas fa-phone',
        title: 'PABX IP',
        items:[
          {title: 'Organização', icon: 'fas fa-building', path:'/companies'},
          {title: 'Centro do custo', icon: 'fas fa-dollar-sign', path:'/cost_centers'},
         ]
      },{
        action: 'fas fa-user',
        items:[
          {title: 'Colaboradores', icon: 'fas fa-hand-holding-usd', path:'/collaborators'},
        ],
        title: 'Gestao de pessoa /RH'
      },     
      
      ]
    })
  }
</script>

<style>

.border  {
   
    background: #F5F6FA ;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
      text-decoration: none;
    
}
.border b:nth-child(1)
{
    
    position: absolute;
    top: -20px;
    height: 20px;
    width: 83%;
    background: #BDBDBD;
  
    display: none; 
}
.border b:nth-child(1)::before
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 20px;
    background: #BDBDBD;
}
.border b:nth-child(2)
{
    position: absolute;
    bottom: -20px;
    height: 20px;
    width: 83%;
    background: #BDBDBD;
    display: none;
}
.border b:nth-child(2)::before
{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-right-radius: 20px;
    background: #BDBDBD;
}
.border b:nth-child(1),
.border b:nth-child(2)
{
    display: block;
}
</style>