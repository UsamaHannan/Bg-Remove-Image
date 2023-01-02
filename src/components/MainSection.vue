<template>
    <div>



        
    <v-card
      class="mx-auto asd"
      max-width="360"
   
   
    
    >
      <v-card-text>
        <div class="check"><img src="../assets/upload.png" alt="" width="120px" height="80px"></div>
        <p class="text-h5 text--primary check mt-4" for="dropzoneFile" >
        Drag and Drop Files Here
        </p>
     
     
      </v-card-text>
      <v-card-actions class="check" >
      
        <v-btn 
            color="primary" 
            rounded 
            dark 
            :loading="isSelecting" 
            @click="handleFileImport()"

            @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
         
        >
            Upload Image
        </v-btn>

        <!-- Create a File Input that will be hidden but triggered with JavaScript -->
        <input 
            ref="uploader" 
            id="dropzoneFile" class="dropzoneFile"
            type="file" 
            @change="uploadImage"
        >

        <div>
        
    </div>

      </v-card-actions>
    </v-card>

<div>
    <v-row>
<v-col>
    <v-card
  
    class="mx-auto my-12"
    max-width="450"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <img height="450" width="450" :src="previewImage" class="uploading-image" />
   

    



    <v-card-actions>
      <v-btn
      color="error"
        text
      @click="ConvertFile()"
      >
        Convert
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
<v-col>
    <v-card
   
    class="mx-auto my-12"
    max-width="450"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <img height="450" width="450"  v-bind:src="'data:image/jpg;base64,'+ imageurl" class="uploading-image" />
   

    



    <v-card-actions>
      <v-btn
        color="teal"
        text
        download
        @click="downloadDone"
      >
       Download
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
    </v-row>
</div>


</div>
  </template>
<script>

import axios from 'axios';
import { ref } from "vue";
export default {
    name: 'UserImage',

   
    data(){
        return {
            previewImage:null,
            isSelecting: false,
            selectedFile: null,
            imageurl: ""
        }
    },
    methods: {

      downloadDone(e) {

if (this.imageurl.length <= 0) {

  e.preventDefault();

} else {

  this.imgLoad = false;

 this.imageurl = "";

}

},

      setup() {
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    return { active, toggleActive };
  },

        uploadImage(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.previewImage = e.target.result;
                console.log(this.previewImage);
            };
        },


        handleFileImport() {
            this.isSelecting = true;

            // After obtaining the focus when closing the FilePicker, return the button state to normal
            window.addEventListener('focus', () => {
                this.isSelecting = false
            }, { once: true });
            
            // Trigger click on the FileInput
            this.$refs.uploader.click();
        },

        ConvertFile(){


const FormData = require('form-data');



const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_file_b64', this.previewImage);

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    
    'X-Api-Key': 'CoQb7W4bku3VLbd7f7DaCFL3',
  },
  encoding: null
})
.then((response) => {
  var base64 = btoa(

            new Uint8Array(response.data).reduce(

              (data, byte) => data + String.fromCharCode(byte),

              ""

            )

          

          );
          console.log(base64);
          this.imageurl = base64;
          

})
.catch((error) => {
    return console.error('Request failed:', error);
});



        },
       
    }
}
</script>

<style>
.asd{
    margin-top: 120px;
}

.check{
    display: flex !important;
    justify-content: center !important;
}
</style>