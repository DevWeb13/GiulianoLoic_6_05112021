import PhotographerCard from "../photographer-card/photographer-card";

export default class MainLobby {
	constructor(domTarget, props) {
		this.DOM = domTarget;
		this.photographers = props.photosgraphers;
		this.tagsChecked = props.tagsChecked;
		this.render();
	}
	render() {
		const mainLobby = document.createElement("main");
		this.DOM.appendChild(mainLobby);
		mainLobby.setAttribute("id", "main");
		this.photographers.forEach(
			(/** @type {{ tags: any[]; }} */ photographer) => {
				if (this.tagsChecked === undefined || this.tagsChecked.length === 0) {
					new PhotographerCard(mainLobby, {
						...photographer,
					});
				} else {
					const test = photographer.tags.some((tag) =>
						this.tagsChecked.includes("#" + tag)
					);
					if (test) {
						new PhotographerCard(mainLobby, {
							...photographer,
						});
					}
				}
			}
		);
	}
}
