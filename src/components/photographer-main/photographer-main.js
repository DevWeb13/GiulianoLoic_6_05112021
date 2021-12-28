import PhotographerCardBig from "../photographer-card-big/photographer.card.big";
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
		this.recupMedia();
		this.recupPhotographer();
		new PhotographerCardBig(this.DOM, {
			...this.photographer,
			articleClassName: "photographer-card-big",
		});

		// window.referesMediaList = (target) => {
		// 	this.refresh(target);
		// };
		// this.displayPhotographerCardBig(this.DOM);
		new Widget(this.DOM);
		const mediaCardsSection = new MediaCardsSection(this.DOM, {
			photographerMedias: this.photographerMedias,
		});
		console.log(mediaCardsSection.totalLikes);
		new Aside(this.DOM, {
			...this.photographer,
			photographerMedias: this.photographerMedias,
			totalLikes: mediaCardsSection.totalLikes,
		});
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
		console.log(filter);
	}
}
