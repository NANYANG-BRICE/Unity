<template>
    <v-row class="d-flex mb-3">
        <v-col cols="12" class="mt-1">
            <v-text-field
                label="Adresse Email"
                model-value="unity.tech@exemple.com"
                append-inner-icon="mdi-email-outline"
                clearable 
                variant="outlined">
            </v-text-field>

            <v-btn to="/" color="primary" size="large" block flat>
                Réinitialisé  <v-icon icon="mdi-refresh" class="ml-1"></v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>
