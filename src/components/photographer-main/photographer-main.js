import PhotographerCardBig from "../photographer-card-big/photographer.card.big";
import Widget from "../widget/widget";
import MediaCardsSection from "../mediaCardsSection/mediaCardsSection";

export default class PhotographerMain {
	constructor(domTarget, props) {
		this.DOM = domTarget;
		this.photographers = props.photographers;
		this.medias = props.medias;
		this.id = props.id;
		this.render();
	}
	render() {
		const photographerMain = document.createElement("main");
		photographerMain.id = "photographer-main";
		this.DOM.appendChild(photographerMain);
		this.displayPhotographerCardBig(photographerMain);
		new Widget(photographerMain);
		new MediaCardsSection(photographerMain, {
			medias: this.medias,
			id: this.id,
		});
	}

	displayPhotographerCardBig(photographerMain) {
		this.photographers.forEach((/** @type {{ id: any; }} */ photographer) => {
			if (photographer.id == this.id) {
				new PhotographerCardBig(photographerMain, {
					...photographer,
					articleClassName: "photographer-card-big",
				});
			}
		});
	}
}
