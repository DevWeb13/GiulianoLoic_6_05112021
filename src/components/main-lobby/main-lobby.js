import PhotographerCard from "../photographer-card/photographer-card";

export default class MainLobby {
	constructor(domTarget, props) {
		this.photographers = props.photographers;
		this.tagsChecked = props.tagsChecked;

		this.DOM = document.createElement("main");
		this.DOM.setAttribute("id", "main");
		domTarget.appendChild(this.DOM);
		this.photographers.forEach(
			(/** @type {{ tags: any[]; }} */ photographer) => {
				if (this.tagsChecked === undefined || this.tagsChecked.length === 0) {
					new PhotographerCard(this.DOM, {
						...photographer,
					});
				} else {
					const test = photographer.tags.some((tag) =>
						this.tagsChecked.includes("#" + tag)
					);
					if (test) {
						new PhotographerCard(this.DOM, {
							...photographer,
						});
					}
				}
			}
		);
	}
}
