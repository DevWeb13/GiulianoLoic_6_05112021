import PhotographerCardBig from "../photographer-card-big/photographer-card-big";
import Widget from "../widget/widget";
import MediaCardsSection from "../mediaCardsSection/mediaCardsSection";
import Aside from "../aside/aside";

export default class PhotographerMain {
	constructor(domTarget, props) {
		this.DOM = document.createElement("main");
		this.DOM.id = "photographer-main";
		domTarget.appendChild(this.DOM);
		this.id = props.id;
		this.photographers = props.photographers;
		this.photographer = {};
		this.medias = props.medias;
		this.photographerMedias = [];
		this.widgetValue = "";
		this.recupMedia();
		this.recupPhotographer();

		new PhotographerCardBig(this.DOM, {
			...this.photographer,
			articleClassName: "photographer-card-big",
		});

		new Widget(this.DOM);

		let mediaCardsSection = new MediaCardsSection(this.DOM, {
			photographerMedias: this.photographerMedias,
			target: "Popularité",
		});

		new Aside(this.DOM, {
			...this.photographer,
			photographerMedias: this.photographerMedias,
			totalLikes: mediaCardsSection.totalLikes,
		});

		window.refreshMediaList = (filter) => {
			this.refresh(filter);
		};
	}

	recupPhotographer() {
		this.photographers.forEach((photographer) => {
			if (photographer.id == this.id) {
				this.photographer = photographer;
			}
		});
	}

	recupMedia() {
		this.medias.forEach((media) => {
			if (media.photographerId == this.id) {
				this.photographerMedias.push(media);
			}
		});
	}

	refresh(filter) {
		this.DOM.removeChild(document.getElementById("mediaCardsSection"));
		this.DOM.removeChild(document.querySelector("aside"));
		let mediaCardsSection = new MediaCardsSection(this.DOM, {
			photographerMedias: this.photographerMedias,
			target: filter,
		});
		new Aside(this.DOM, {
			...this.photographer,
			photographerMedias: this.photographerMedias,
			totalLikes: mediaCardsSection.totalLikes,
		});
	}
}
