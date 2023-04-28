export const productsData = [
    {
        id: 0,
        category: 'espaciales',
        img: './assets/img/pruductos/spacex-moon.jpg',
        alt: 'Viaje a la luna',
        title: '🚀 Viaje a la luna',
        frase1: '📡​ De la mano de Space X vamos a su base lunar.',
        frase2: '🌑​ El viaje incluye hotel, desayuno y guia de tours.',
        frase3: '🧾​ Requiere curso de entrenamiento en las instalaciones de space x.',
        frase4:'',
        price: 500000,

    },
    {
        id: 1,
        category: 'espaciales',
        img: './assets/img/pruductos/virginGalactic.png',
        title: '✈️​ Vuelo espacial',
        nFrases: 4,
        frase1: '🚀 Experimenta la ingravidez.',
        frase2: '🤳🏼 las impresionantes vistas de la Tierra.',
        frase3: '☁️ Alto nivel de confort.',
        frase4:'🌌 Una experiencia que transformara tu vida a traves del inovador y exclusivo servicio de Virgin Galactic.',
        price: 300000,
    },
    {
        id: 2,
        category: 'espaciales',
        img: './assets/img/pruductos/spacexMars.webp',
        title: '🌌​ Viaje a Marte',
        nFrases: 3,
        frase1: '🚀 Con Space X y su increible cohete Falcon Heavy viajaremos al planeta Marte.',
        frase2: '🌑​ El viaje incluye hotel, desayuno y guia de tours.',
        frase3: '🧾​ Requiere curso de entrenamiento en las instalaciones de space x.',
        frase4:'',
        price: 1000000,
    },
];

const splitProducts = (size) => {
	let dividedProducts = [];

	for (let i = 0; i < productsData.length; i += size) {
		dividedProducts.push(productsData.slice(i, i + size));
	}
	return dividedProducts;
};

export const productsController = {
	dividedProducts: splitProducts(6),
	nextProductsIndex: 1,
	productsLimit: splitProducts(6).length,
};

//Función para dividir los productos en arrays de 6 productos y manejar la páginación
export const appState = {
	products: splitProducts(6),
	currentProductsIndex: 0,
	productsLimit: splitProducts(6).length,
	activeFilter: null,
};

