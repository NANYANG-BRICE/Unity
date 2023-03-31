<script setup lang="ts">
import { ref } from 'vue';
const checkbox = ref(true);
</script>

<template>
    <v-row class="d-flex mb-3">
        <v-col cols="12" class="mt-1">
            <v-text-field
                label="Nom Utilisateur"
                model-value="Unity@237"
                append-inner-icon="mdi-email-outline"
                clearable 
                variant="outlined">
            </v-text-field>

            <v-text-field
                label="Adresse Email"
                model-value="unity.tech@exemple.com"
                append-inner-icon="mdi-email-outline"
                clearable 
                variant="outlined">
            </v-text-field>

            <v-text-field
                label="Téléphone Portable"
                model-value="+237"
                placeholder="ex : 657807309"
                clearable 
                append-inner-icon="mdi-phone-classic"
                variant="outlined">
            </v-text-field>

            <v-text-field
                label="Mot de passe"
                model-value="Password123@#"
                clearable 
                :type="PasswordVisible ? 'text' : 'password'"
                :append-inner-icon="PasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="PasswordVisible = !PasswordVisible"
                variant="outlined">
            </v-text-field>

            <v-btn to="/" color="primary" size="large" block flat>
                Enregistrer  <v-icon icon="mdi-content-save-outline" class="ml-1"></v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>
