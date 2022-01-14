import {
	fetchPhotographers,
	fetchChosenPhotographer,
	fetchChosenMedia,
} from "./services/dataManager";
import BtContact from "./components/btContact/btContact";
import Header from "./components/header/header";
import MainLobby from "./components/main-lobby/main-lobby";
import PhotographerMain from "./components/photographer-main/photographer-main";
import FormModal from "./components/form-modal/form-modal";

/* *************************************************************************************************************************************************************************************************************************************************************** */
const body = document.body;

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
		const tagsChecked = [];
		const url = new URL(window.location.href);
		const tag = url.searchParams.get("tag");
		if (tag) {
			tagsChecked.push("#" + tag);
		}
		new Header(body, photographers, tagsChecked, "header");
		new BtContact(body, {
			className: "goToContent",
			type: "button",
			text: "Passer au contenu",
		});
		new MainLobby(body, {
			photographers,
			tagsChecked,
		});
	},

	/**
	 * Gestion of view photographer
	 *
	 * @return  {promise}  Fonctionnalités et affichage de la vue photographer
	 */
	photographer: async function () {
		const tagsChecked = [];
		const url = new URL(window.location.href);
		const id = url.searchParams.get("id");
		const photographer = await fetchChosenPhotographer(id);
		const mediasChosen = await fetchChosenMedia(id);
		new Header(body, "", tagsChecked, "header", "header-photographer");
		new PhotographerMain(body, {
			photographer,
			mediasChosen,
			id,
		});
		new FormModal(body, { name: photographer.name });
		// new LightBox(body, { mediasChosen });
	},
};

if (window.location.pathname.split("/").pop() == "") views.lobby();
else if (window.location.pathname.split("/").pop() == "photographer.html")
	views.photographer();
