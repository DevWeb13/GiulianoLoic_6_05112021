import PhotographerCardBig from "../photographer-card-big/photographer-card-big";
import Widget from "../widget/widget";
import MediaCardsSection from "../mediaCardsSection/mediaCardsSection";
import Aside from "../aside/aside";

import { exposeMethod } from "../../services/utils";

export default class PhotographerMain {
	constructor(domTarget, props) {
		this.DOM = document.createElement("main");
		this.DOM.id = "photographer-main";
		domTarget.appendChild(this.DOM);
		this.id = props.id;
		this.photographer = props.photographer;
		this.mediasChosen = props.mediasChosen;
		this.widgetValue = "";
		new PhotographerCardBig(this.DOM, {
			...this.photographer,
		});
		new Widget(this.DOM);
		let mediaCardsSection = new MediaCardsSection(this.DOM, {
			photographerMedias: this.mediasChosen,
			target: "Popularité",
		});
		new Aside(this.DOM, {
			...this.photographer,
			photographerMedias: this.mediasChosen,
			totalLikes: mediaCardsSection.totalLikes,
		});

		exposeMethod("refreshMediaList", (filter) => {
			this.refresh(filter);
		});
	}

	refresh(filter) {
		this.DOM.removeChild(document.getElementById("mediaCardsSection"));
		this.DOM.removeChild(document.querySelector("aside"));
		let mediaCardsSection = new MediaCardsSection(this.DOM, {
			photographerMedias: this.mediasChosen,
			target: filter,
		});
		new Aside(this.DOM, {
			...this.photographer,
			photographerMedias: this.mediasChosen,
			totalLikes: mediaCardsSection.totalLikes,
		});
	}
}
