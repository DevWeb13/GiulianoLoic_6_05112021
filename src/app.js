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
import { fetchPhotographers } from "./services/dataManager";
import Header from "./components/header/header";
import PhotographerCard from "./components/photographer-card/photographer-card";
import PhotographerCardBig from "./components/photographer-card-big/photographer.card.big";
// import Widget from "./components/widget/widget";
// Widget();

const body = document.body;
let id;

/**
 * Object contains functions utils
 *
 * @var {object}
 */
const utils = {
	/**
	 * Au clic sur button active la view
	 *
	 * @param   {HTMLElement} element  button  button
	 * @param   {object}  view   View à activer
	 *
	 * @return  {void}          Definie la view en fonction du clic sur button
	 */
	activeLink: function (button, view) {
		button.addEventListener("click", view);
	},

	/**
	 * Affichage de la description du photographe dans views.photographer
	 *
	 * @param   {number}  id  id du photographe
	 *
	 * @return  {promise}      Affiche la description du photographe dans views.photographer en fonction de son id
	 */
	displayPhotographersCardsBig: async function (id) {
		const photographers = await fetchPhotographers();
		const main = document.createElement("main");
		main.id = "photographer-main";
		document.body.appendChild(main);
		photographers.forEach((photographer) => {
			if (photographer.id == id) {
				new PhotographerCardBig(main, {
					...photographer,
					articleClassName: "photographer-card-big",
				});
			}
		});
	},

	/**
	 * Au clic sur un des buttons active la view
	 *
	 * @param   {NodeListOf}  buttons  Array of buttons
	 * @param   {object}  view   View à activer
	 *
	 * @return  {void}            Definie la view en fonction du clic sur un des buttons
	 */
	activeManyLinks: function (buttons, view) {
		buttons.forEach((button) => {
			button.addEventListener("click", view);
		});
	},

	/**
	 * Recupération de l'id du photographe lors du clic sur sa carte
	 *
	 * @param   {NodeListOf}  buttons  Cartes des photographes
	 *
	 * @return  {any}         Retourne l' id du photographe dont la carte a été cliqué
	 */
	recupLinkId: function (buttons) {
		// const buttons = document.querySelectorAll(".photographer-card-link");
		buttons.forEach((button) => {
			button.addEventListener("click", () => {
				id = button.id;
				return id;
			});
		});
	},

	/**
	 * Affichage de chaque carte de photographe
	 *
	 * @return  {promise}      Affichage de chaque carte de photographe
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
};

/**
 * Object contains functions for views
 *
 * @var {object}
 */
const views = {
	/**
	 * Gestion of view lobby
	 *
	 * @return  {promise}  Fonctionnalités et affichage de la vue lobby
	 */
	lobby: async function () {
		new Header(body, "header");
		await utils.displayPhotographersCards();
		const buttons = document.querySelectorAll(".photographer-card-link");
		utils.recupLinkId(buttons);
		utils.activeManyLinks(buttons, views.photographer);
	},

	/**
	 * Gestion of view photographer
	 *
	 * @return  {promise}  Fonctionnalités et affichage de la vue photographer
	 */
	photographer: async function () {
		new Header(body, "header header-photographer");
		utils.displayPhotographersCardsBig(id);
		let logo = document.querySelector(".logo");
		utils.activeLink(logo, views.lobby);
	},

	/**
	 * Gestion of view lightbox
	 *
	 * @return  {void}  Fonctionnalités et affichage de la vue lightbox
	 */
	lightbox: function () {},

	/**
	 * Gestion of view formModal
	 *
	 * @return  {void}  Fonctionnalités et affichage de la vue formModal
	 */
	formModal: function () {},
};

views.lobby();
