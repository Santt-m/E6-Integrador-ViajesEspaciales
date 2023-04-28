// importo los js

import { productsData } from "./products-bd.js";
import { productsController } from "./products-bd.js";

//Contenedor de los productos
const products = document.querySelector('.cont-productos-cards');

// botones de las categorias
const btnCategories = document.querySelectorAll('.btnCategory');

// contenedor de las categorias
const categoriesContainer = document.querySelector(".cont-categorias");

// botones de cateroriass
const categories = document.querySelector(".btnCategory");

// Botón de ver más
const showMoreBtn = document.querySelector(".btn-load");


// Render de productos

// Modelo de render de productos

const renderProduct = (product) => {
    const {id,img,alt,title,frase1,frase2,frase3,frase4,price} = product;
    return`
        <div class="productos-card">
            <img src="${img}" alt="${alt}">
            <div class="productos-card-txt">
                <h4>${title}</h4>
                <p>${frase1}</p>
                <p>${frase2}</p>
                <p>${frase3}</p>
                <p>${frase4}</p>
                <div class="productos-card-txt-price">
                    <p>${price}</p>
                    <a class="anim-blur" href="#">al carrito</a>
                </div>
            </div>
        </div>
    `;
};

// esta funcion hace funcionar el boton de ver mas
// empieza con el index en 0 y suma 6 cada vez que se apreta el boton

function renderDividedProducts(index = 0) {
	products.innerHTML += productsController.dividedProducts[index]
		.map(renderProduct)
		.join("");
}

// esta funcion filtra los productos por categoria

const renderFilteredProducts = (category) => {
	const productsList = productsData.filter((product) => {
		return product.category === category;
	});
	products.innerHTML = productsList.map(renderProduct).join("");
};

// esta funcion renderiza los productos filtrados o divididos

const renderProducts = (index = 0, category = undefined) => {
	if (!category) {
		renderDividedProducts(index);
		return;
	}
	renderFilteredProducts(category);
};

// esta funcion agrega la class "hidden" al boton de ver mas sino hay mas productos

const changeShowMoreBtnState = (category) => {
	if (!category) {
		btnLoad.classList.remove("hidden");
		return;
	}
	btnLoad.classList.add("hidden");
};

// esta funcion agrega la class "active" al boton de la categoria seleccionada

const changeBtnActiveState = (selectedCategory) => {
	const categories = [...categoriesList];
	categories.forEach((categoryBtn) => {
	  if (!selectedCategory || categoryBtn.dataset.category !== selectedCategory) {
		categoryBtn.classList.remove("active");
		return;
	  }
	  categoryBtn.classList.add("active");
	});
};

// esta funcion cambia el estado del boton de ver mas y el boton de la categoria seleccionada

const changeFilterState = (e) => {
	const selectedCategory = e.target.dataset.category;
	changeShowMoreBtnState(selectedCategory);
	changeBtnActiveState(selectedCategory);
};

// esta funcion aplicar el filtro de categoria
// tomando el objeto "e" como argumento para saber que filtro aplicar

const applyFilter = (e) => {
	if (!e.target.classList.contains("category")) {
		return;
	} else {
		changeFilterState(e);
	}
	if (!e.target.dataset.category) {
		products.innerHTML = "";
		renderProducts();
	} else {
		renderProducts(0, e.target.dataset.category);
		productsController.nextProductsIndex = 1;
	}
};


//Función que indica si estamos en el último array del array de  productos divididos.
const isLastIndexOf = () => {
	return appState.currentProductsIndex === appState.productsLimit - 1;
};

//Función para mostrar más productos al apretar en el botón ver más.
const showMoreProducts = () => {
	appState.currentProductsIndex += 1;
	let { products, currentProductsIndex } = appState;
	renderProducts(products[currentProductsIndex]);
	if (isLastIndexOf()) {
		showMoreBtn.classList.add("hidden");
	}
};
export const productsInit = () => {
	renderProducts();
	showMoreBtn.addEventListener("click", showMoreProducts);
	categoriesContainer.addEventListener("click", applyFilter);
	
};