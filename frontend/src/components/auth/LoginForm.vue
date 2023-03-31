
<template>
    <v-row class="d-flex mb-3">
        <v-col cols="12" class="mt-1">
            <v-text-field
                label="Adresse Email"
                model-value="nanyangbrice@exemple.com"
                append-inner-icon="mdi-email-outline"
                clearable 
                variant="outlined">
            </v-text-field>


            <v-text-field
                label="Mot de passe"
                model-value="Password123@#"
                clearable 
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                variant="outlined">
            </v-text-field>

            <div class="d-flex flex-wrap align-center ml-n2">
                <v-checkbox v-model="checkbox"  color="primary" hide-details>
                    <template v-slot:label class="text-body-1">
                        Se souvenir de moi !
                    </template>
                </v-checkbox>
                <div class="ml-sm-auto">
                    <RouterLink to="/auth/reset" class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">
                        Mot de passe oublié ?
                    </RouterLink>
                </div>
            </div>

            <v-btn to="/" color="primary" size="large" block flat>
                Connexion <v-icon icon="mdi-login" class="ml-1"></v-icon>
            </v-btn>
        </v-col>
        <v-col cols="12" class="pt-0">
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    const checkbox = ref(true);
    const isPasswordVisible = ref(false)
    const PasswordVisible = ref(false)
</script>
