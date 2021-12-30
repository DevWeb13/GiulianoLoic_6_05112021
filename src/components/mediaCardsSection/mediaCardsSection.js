import MediaCard from "../mediaCard/mediaCard";

export default class MediaCardsSection {
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
		console.log(this.titreArray);
		this.titreArray = [...new Set(this.titreArray)];
	}

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
	// createArrayFilter(medias) {
	// 	medias.forEach((media) => {
	// 		this.popular.push(media.likes);
	//
	// 	});

	// 	return = this.popular.sort(function (a, b) {
	// 		return b - a;
	// 	});

	// 	popularArrayFilter.forEach((popular) => {
	// 		medias.forEach((media) => {
	// 			if (popular === media.likes) {
	// 				this.newPopularArrayMedias.push(media);
	// 			}
	// 		});
	// 	});

	// 	let uniqueArr = [...new Set(this.newPopularArrayMedias)];
	// 	console.log(uniqueArr);
	// }

	displayMediaCard(section, medias) {
		medias.forEach(
			(
				/** @type {{ photographerId: any; image: string; video: string; title: any; likes: any; }} */ media
			) => {
				let mediaCard = new MediaCard(section, {
					imgLink: "./img/photos/" + media.image,
					videoLink: "img/videos/" + media.video,
					imgTitle: media.title,
					like: media.likes,
				});
				this.totalLikes += mediaCard.like;
			}
		);
	}
}
