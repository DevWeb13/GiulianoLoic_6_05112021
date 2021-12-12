// import Header from "./components/header/header";
// import PhotographerCard from "./components/photographer-card/photographer-card";
// // import FilterLink from "./components/filterLink/filterLink";
// // const { util } = require("webpack");

// // import Widget from "./components/widget/widget";
// // import FormModal from "./components/form-modal/form-modal";
// // import BtContact from "./components/btContact/btContact";

// import { fetchPhotographers } from "./services/dataManager";

// // fetchPhotographers();
// /**
//  * Affichage de chaque description de photographe
//  *
//  * @return  {promise}      Affichage de chaque description de photographe
//  */
// async function displayPhotographersDescriptions() {
// 	const photographers = await fetchPhotographers();
// 	photographers.forEach((photographer) => {
// 		new PhotographerCard(document.querySelector("main"), {
// 			...photographer,
// 			articleClassName: "photographer-card",
// 			btClassName: "photographer-card-link",
// 		});
// 	});
// }

// new Header(document.querySelector("header"));
// displayPhotographersDescriptions();

/* ******************************************************************************************************************************************************** */
import Header from "./components/header/header";
import PhotographerCard from "./components/photographer-card/photographer-card";
import { fetchPhotographers } from "./services/dataManager";
// import Widget from "./components/widget/widget";
// Widget();
const body = document.body;

const utils = {
	/**
	 * Affichage de chaque description de photographe
	 *
	 * @return  {promise}      Affichage de chaque description de photographe
	 */
	displayPhotographersCards: async function () {
		const photographers = await fetchPhotographers();
		const main = document.createElement("main");
		document.body.appendChild(main);
		photographers.forEach((photographer) => {
			new PhotographerCard(main, {
				...photographer,
				articleClassName: "photographer-card",
				btClassName: "photographer-card-link",
			});
		});
	},
	activeLink: function (button, view) {
		button.addEventListener("click", view);
	},
	activeManyLinks: function (buttons, view) {
		buttons.forEach((button) => {
			button.addEventListener("click", view);
		});
	},
};

const views = {
	lobby: async function () {
		new Header(body, "header");
		await utils.displayPhotographersCards();
		let buttons = document.querySelectorAll(".photographer-card-link");
		utils.activeManyLinks(buttons, views.photographer);
	},

	photographer: async function () {
		new Header(body, "header header-photographer");

		let logo = document.querySelector(".logo");
		utils.activeLink(logo, views.lobby);
	},

	lightbox: function () {},

	formModal: function () {},
};

// views.photographer();
views.lobby();
