import MediaCard from "../mediaCard/mediaCard";

export default class MediaCardsSection {
	/**
	 * @param {{ appendChild: (arg0: HTMLElement) => void; }} domTarget
	 * @param {{ photographerMedias: any; target: any; }} props
	 */
	constructor(domTarget, props) {
		this.DOM = document.createElement("section");
		this.DOM.id = "mediaCardsSection";
		domTarget.appendChild(this.DOM);
		this.photographerMedias = props.photographerMedias;
		this.target = props.target;
		this.totalLikes = 0;
		this.popularArray = [];
		this.dateArray = [];
		this.titreArray = [];

		this.displayMediaCardsWithFilter();
	}

	displayMediaCardsWithFilter() {
		if (this.target === "Popularité") {
			this.createPopularArray(this.photographerMedias);
			this.displayMediaCard(this.DOM, this.popularArray);
		}
		if (this.target === "Date") {
			this.createDateArray(this.photographerMedias);
			this.displayMediaCard(this.DOM, this.dateArray);
		}
		if (this.target === "Titre") {
			this.createTitreArray(this.photographerMedias);
			this.displayMediaCard(this.DOM, this.titreArray);
		}
	}

	/**
	 * @param {any[]} medias
	 */
	createTitreArray(medias) {
		let arrayTitre = [];
		medias.forEach((media) => {
			arrayTitre.push(media.title);
		});
		arrayTitre.sort();
		arrayTitre.forEach((title) => {
			medias.forEach((media) => {
				if (title === media.title) {
					this.titreArray.push(media);
				}
			});
		});
		this.titreArray = [...new Set(this.titreArray)];
	}

	/**
	 * @param {any[]} medias
	 */
	createDateArray(medias) {
		let arrayDate = [];
		medias.forEach((media) => {
			arrayDate.push(media.date);
		});
		arrayDate.sort().reverse();
		arrayDate.forEach((date) => {
			medias.forEach((media) => {
				if (date === media.date) {
					this.dateArray.push(media);
				}
			});
		});
		this.dateArray = [...new Set(this.dateArray)];
	}

	createPopularArray(medias) {
		let arrayLikes = [];
		medias.forEach((media) => {
			arrayLikes.push(media.likes);
		});
		arrayLikes.sort(function (a, b) {
			return b - a;
		});
		arrayLikes.forEach((likes) => {
			medias.forEach((media) => {
				if (likes === media.likes) {
					this.popularArray.push(media);
				}
			});
		});
		this.popularArray = [...new Set(this.popularArray)];
	}

	/**
	 * @param {HTMLElement} section
	 * @param {any[]} medias
	 */
	displayMediaCard(section, medias) {
		medias.forEach(
			(
				/** @type {{ photographerId: any; image: string; video: string; title: any; likes: any; description: string}} */ media
			) => {
				let mediaCard = new MediaCard(section, {
					medias: medias,
					imgLink: "./img/photos/" + media.image,
					videoLink: "img/videos/" + media.video,
					imgTitle: media.title,
					like: media.likes,
					description: media.description,
				});
				this.totalLikes += mediaCard.like;
			}
		);
	}
}
