


import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import Maska from 'maska';



/* module Axios pour interaction via API */
import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:8080/';



// SweetAlert2 pour les notifications et alertes sur actions
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



/* Datatable pour affichage des données dans un tableau dynamique*/
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


import DataTable from "@andresouzaabreu/vue-data-table";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";




const app = createApp(App);
app.component('EasyDataTable', Vue3EasyDataTable);
app.component("data-table", DataTable);
app.use(router);
app.use(PerfectScrollbar);
app.use(VueTablerIcons);
app.use(Maska);
app.use(VueApexCharts);
app.use(VueSweetalert2);

app.use(vuetify).mount('#app');
