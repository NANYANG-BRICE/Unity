<script  lang="ts">
    import { ref } from 'vue';
    import { defineComponent } from 'vue';
    import type { Header, Item } from "vue3-easy-data-table";
    import UiParentCard from '@/components/shared/UiParentCard.vue';

    export default defineComponent({

        data () {
            return {
                dialog: false,
            }
        },

        components:{
            UiParentCard
        },

        setup() {
            const currentTab = ref(false);
            const headers: Header[] = [
              { text: "Name", value: "name" },
              { text: "Height (cm)", value: "height", sortable: true },
              { text: "Weight (kg)", value: "weight", sortable: true },
              { text: "Age", value: "age", sortable: true }
            ];

            const items: Item[] = [
              { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
              { "name": "James", "height": 180, "weight": 75, "age": 21 },
              { "name": "Jordan", "height": 181, "weight": 73, "age": 22 }
            ];

            return {
              currentTab,
              headers,
              items
          };
      },
    })
</script>
<template>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Repertoire des Contacts"> 
                <div class="pa-7 pt-1">
                    <VRow>
                        <VCol cols="8">
                            <VRow>
                                <v-alert size="30" class="text-center" title="Liste des Contacts"></v-alert>
                                <span class="float-end mr-3">
                                    <v-btn color="primary" class="ma-2 white--text" > 
                                        Importer <v-icon right dark class="ml-2"> mdi-cloud-upload</v-icon>
                                        <v-tooltip activator="parent" location="top" >
                                            Importez la liste de vos contacts <br> appartir d'une source extérieure ?
                                        </v-tooltip>

                                        <v-dialog v-model="dialog" activator="parent" width="auto" >
                                            <v-card>
                                                ,;
                                            </v-card>
                                        </v-dialog>
                                    </v-btn>

<v-btn
      color="primary"
    >
      Open Dialog

      <v-dialog
        v-model="dialog"
        activator="parent"
        width="auto"
      >
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>

                                    <v-btn color="primary" class="ma-2 white--text" > 
                                        Export <v-icon right dark class="ml-2"> mdi-cloud-download</v-icon>
                                        <v-tooltip activator="parent" location="top" >
                                            Importez la liste de vos contacts <br> appartir d'une source extérieure ?
                                        </v-tooltip>
                                    </v-btn>
                                </span>
                            </VRow>


                            <VRow>
                                <VCol cols="4" sm="4" >
                                    <VTabs v-model="currentTab" direction="vertical" >
                                        <VTab color="primary">
                                            <VIcon start icon="mdi-email-outline" />
                                            Contact E-mail
                                            <v-tooltip activator="parent" location="top" >
                                                <center>
                                                    Liste des adresses<br> E-mail de vos clients
                                                </center>
                                            </v-tooltip>
                                        </VTab>

                                        <VTab class="mt-1" color="primary">
                                            <VIcon start icon="mdi-phone-classic" :size="22" />
                                            Contact Télé...
                                            <v-tooltip activator="parent" location="top" >
                                                <center>
                                                    Liste des adresses<br> téléphoniques de vos clients
                                                </center>
                                            </v-tooltip>
                                        </VTab>
                                    </VTabs>
                                </VCol>

                                <VCol cols="8" sm="8" >
                                    <VWindow v-model="currentTab">
                                        <VWindowItem>
                                            <EasyDataTable :headers="headers" :items="items" />
                                        </VWindowItem>
                                        <VWindowItem>
                                            2dwklfkjwdlkfjlkdwjflkdwjfl
                                        </VWindowItem>
                                    </VWindow>
                                </VCol>
                            </VRow>
                        </VCol>

                        <VCol cols="4">

                            <!-- <v-alert size="30" class="text-center" title="Nouveau Contact"></v-alert> -->
                            <VForm @submit.prevent >
                                <v-row class="d-flex">
                                    <v-col cols="12" class="mt-1">
                                        <v-text-field
                                            label="Nom Complet"
                                            model-value="Unity@237"
                                            append-inner-icon="mdi-account-settings-outline"
                                            clearable 
                                            placeholder="Nanyang Brice"
                                            variant="outlined">
                                        </v-text-field>

                                        <v-text-field
                                            label="Adresse Email"
                                            model-value="unity.tech@exemple.com"
                                            append-inner-icon="mdi-email-outline"
                                            clearable 
                                            placeholder="nanyangbrice@gmail.com"
                                            variant="outlined">
                                        </v-text-field>

                                        <v-text-field
                                            label="Téléphone Portable"
                                            model-value="+237"
                                            clearable 
                                            append-inner-icon="mdi-phone-classic"
                                            placeholder="+237657807309"
                                            variant="outlined">
                                        </v-text-field>


                                        <v-text-field
                                            label="Contact Whatsapp"
                                            model-value="+237"
                                            clearable 
                                            append-inner-icon="mdi-cellphone-settings"
                                            placeholder="+237657807309"
                                            variant="outlined">
                                        </v-text-field>

                                        <v-row class="d-flex mb-3">
                                            <v-col cols="6" class="mt-1">
                                                <v-btn to="/" style="background-color: #EF5350; color: white;" size="large" block flat cols="6">
                                                    Annuler  <v-icon icon="mdi-close" class="ml-1"></v-icon>
                                                </v-btn>
                                            </v-col> 
                                            <v-col cols="6" class="mt-1">
                                                <v-btn to="/" color="primary" size="large" block flat cols="6">
                                                    Enregistrer  <v-icon icon="mdi-content-save-outline" class="ml-1"></v-icon>
                                                </v-btn>
                                            </v-col> 
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </VForm>
                        </VCol>
                    </VRow>
                </div>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
