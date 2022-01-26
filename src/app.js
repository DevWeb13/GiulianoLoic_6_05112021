import {
	fetchPhotographers,
	fetchChosenPhotographer,
	fetchChosenMedia,
} from "./services/dataManager";

// /* *************************************************************************************************************************************************************************************************************************************************************** */
const body = document.body;

import Index from "./components/index/index";
import PhotographerPage from "./components/photographerPage/photographerPage";

/**
 * Gestion de l'affichage des pages
 *
 * @return  {promise}  Affiche la page demandé
 */
async function PagesMahager() {
	if (window.location.pathname.split("/").pop() == "") {
		const photographers = await fetchPhotographers();
		new Index(body, {
			photographers,
		});
	} else if (window.location.pathname.split("/").pop() == "photographer.html") {
		const url = new URL(window.location.href);
		const id = url.searchParams.get("id");
		const photographer = await fetchChosenPhotographer(id);
		const mediasChosen = await fetchChosenMedia(id);
		new PhotographerPage(body, {
			id,
			photographer,
			mediasChosen,
		});
	}
}

PagesMahager();
