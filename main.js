// imports

// importo los css
import "./assets/style.css" assert { type: "css" }; 

// importo los Js

import "./assets/Js/menu.js";
import "./assets/Js/carrito.js";
import "./assets/Js/products.js";
import "./assets/Js/users.js";

import "./assets/Js/products.js";
import "./assets/Js/users-bd.js";

// importo las funciones que voy a usar|
import { menuInit } from "./assets/Js/menu.js";
import { productsInit } from "./assets/Js/products.js";


// Funcion que inicia todo

const init = () => {

    menuInit();
    productsInit();
};

init ();
