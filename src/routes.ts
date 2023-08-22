import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

//? importamos las vista
import HomeVue from "./pages/Home.vue";
import AboutVue from "./pages/About.vue";
import ContactVue from "./pages/Contact.vue";


//? definimos las rutas de las vistas
let routes: RouteRecordRaw[] = [
    { name: "Home", path: "/", component: HomeVue },
    { name: "Contact", path: "/contact", component: ContactVue },
    { name: "About", path: "/about", component: AboutVue }
]

//? crea el enrutador
let Router = createRouter({
    history: createWebHistory(), //? configuracion de enrutador
    routes,
  });

//? exportamos el modulo
  export default Router