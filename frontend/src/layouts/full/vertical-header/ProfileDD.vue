<script setup lang="ts">
import { SettingsIcon} from 'vue-tabler-icons';
</script>

<template>
    <!-- ---------------------------------------------- -->
    <!-- notifications DD -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
                <span class="mt-2" size="1" style="font-size: 0.8rem;">Nanyang Brice</span>
            <v-btn class="profileBtn custom-hover-primary" variant="text" v-bind="props" icon>
                <v-avatar size="35">

                    <img src="@/assets/images/users/avatar-1.jpg" height="35" alt="user" />
                </v-avatar>
            </v-btn>
        </template>
        <v-sheet rounded="md" width="200" elevation="10" class="mt-2">
            <v-list class="py-0" lines="one" density="compact">
                <v-list-item value="item1" active-color="primary" >
                    <template v-slot:prepend>
                        <SettingsIcon stroke-width="1.5" size="20"/>
                    </template>
                    <v-list-item-title class="pl-4 text-body-1">Paramètres</v-list-item-title>
                </v-list-item>
            </v-list>
            <div class="pt-4 pb-4 px-5 text-center">
                <v-btn to="/auth/login" color="primary" variant="outlined" block>
                    Déconnexion <v-icon icon="mdi-logout" class="ml-1"></v-icon>
                </v-btn>
            </div>
        </v-sheet>
    </v-menu>
</template>
