<template>
  <v-app>
   <MainPage/>


   
    <v-main>
<MainSection @drop.prevent="drop" @change="selectedFile" />

    
    </v-main>

    <MainFooter/>
  </v-app>
</template>

<script>

import MainPage from './components/MainPage';
import MainFooter from './components/MainFooter';
import MainSection from './components/MainSection';
import { ref } from "vue" ;


export default {
  name: 'App',

  components: {
   
    MainPage,
    MainFooter,
    MainSection,
   
  },

 setup() {
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };
    return { dropzoneFile, drop, selectedFile };
  },
};
</script>
