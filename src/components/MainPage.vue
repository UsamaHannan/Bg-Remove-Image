<template>
<div >
  <template id="defaultlayout">

  <v-app-bar
    dense
    clipped-left
    color="#0A4A6D"
    app
    
    dark
>
    <v-app-bar-nav-icon
      @click.stop="drawer= !drawer"
      class="btn-fix"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      Title of app
      </v-toolbar-title>
    </v-app-bar>
      <v-navigation-drawer
        width=310
        clipped
        v-model="drawer"
        :mini-variant.sync="mini"
        app
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://gravatar.com/avatar/368a41425918f68f123aec64a386e223?s=80&d=https://static.codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-title>Jim R</v-list-item-title>
  
          <v-btn
            icon
            @click.stop="mini = !mini"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    

    </template>

</div>
</template>

<script>
export default {
  name: 'MainPage',


  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    }
  }
}

</script>