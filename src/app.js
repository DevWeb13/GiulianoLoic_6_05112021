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
import { fetchMedia } from "./services/dataManager";
import BtContact from "./components/btContact/btContact";
import Header from "./components/header/header";
import PhotographerCard from "./components/photographer-card/photographer-card";
import PhotographerCardBig from "./components/photographer-card-big/photographer.card.big";
import Widget from "./components/widget/widget";

const body = document.body;
/**
 * Tableau contenant les tags Checked
 *
 * @var {array}
 */
let tagsChecked = [];
/**
 * [id description]
 *
 * @var {[type]}
 */
let id;

/* *************************************************************************************************************************************************************************************************************************************************************** */
/**
 * Object contains functions utils
 *
 * @var {object}
 */
const utils = {
	goToContentManage: function () {
		const goToContent = document.querySelector(".goToContent");
		if (goToContent !== null) {
			if (window.scrollY > 20) {
				goToContent.setAttribute("visible", "true");
				goToContent.addEventListener("click", () => {
					window.location.href = "#main";
				});
			} else {
				goToContent.removeAttribute("visible");
			}
		}
	},

	razLobby: function () {
		tagsChecked = [];
		views.lobby();
	},

	tagsManage: function () {
		const tags = document.querySelectorAll(".tags-link");
		tags.forEach((tag) => {
			tag.addEventListener("click", () => {
				if (!tag.hasAttribute("isChecked")) {
					tag.setAttribute("isChecked", "true");
					tagsChecked.push(tag.innerHTML);
				} else {
					tag.removeAttribute("isChecked");
					tagsChecked.splice(tagsChecked.indexOf(tag.innerHTML), 1);
				}
				views.lobby();
				return tagsChecked;
			});
		});
	},
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
	displayPhotographersCardsBig: async function (photographers, id) {
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
	 * @param  {string | string[]}  tagsChecked   Tags checked
	 *
	 * @return  {promise}      Affichage de chaque carte de photographe
	 */
	displayPhotographersCards: async function (photographers, tagsChecked) {
		const main = document.createElement("main");
		main.id = "main";
		document.body.appendChild(main);
		photographers.forEach((/** @type {{ tags: any[]; }} */ photographer) => {
			if (tagsChecked === undefined || tagsChecked.length === 0) {
				new PhotographerCard(main, {
					...photographer,
					articleClassName: "photographer-card",
					btClassName: "photographer-card-link",
				});
			} else {
				const test = photographer.tags.some((tag) =>
					tagsChecked.includes("#" + tag)
				);
				if (test) {
					new PhotographerCard(main, {
						...photographer,
						articleClassName: "photographer-card",
						btClassName: "photographer-card-link",
					});
				}
			}
		});
		const buttons = document.querySelectorAll(".photographer-card-link");
		utils.recupLinkId(buttons);
		utils.activeManyLinks(buttons, views.photographer);
	},
};
/* *************************************************************************************************************************************************************************************************************************************************************** */
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
		const photographers = await fetchPhotographers();
		new Header(body, tagsChecked, "header");
		new BtContact(body, {
			className: "goToContent",
			type: "button",
			text: "Passer au contenu",
		});
		await utils.displayPhotographersCards(photographers, tagsChecked);
		utils.tagsManage();
		document.addEventListener("scroll", utils.goToContentManage);
	},

	/**
	 * Gestion of view photographer
	 *
	 * @return  {promise}  Fonctionnalités et affichage de la vue photographer
	 */
	photographer: async function () {
		tagsChecked = [];
		const photographers = await fetchPhotographers();
		const media = await fetchMedia();
		console.log(media);
		new Header(body, tagsChecked, "header", "header-photographer");
		await utils.displayPhotographersCardsBig(photographers, id);
		const main = document.querySelector("main");
		new Widget(main);

		utils.tagsManage();
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
console.log("test");
// @ts-ignore
window.goHome = utils.razLobby;
views.lobby();
