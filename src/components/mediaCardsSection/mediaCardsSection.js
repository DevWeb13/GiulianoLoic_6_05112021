import MediaCard from "../mediaCard/mediaCard";

export default class MediaCardsSection {
	constructor(domTarget, props) {
		this.DOM = document.createElement("section");
		this.DOM.id = "mediaCardsSection";
		domTarget.appendChild(this.DOM);
		this.photographerMedias = props.photographerMedias;
		this.totalLikes = 0;
		this.displayMediaCard(this.DOM);
	}

	displayMediaCard(section) {
		this.photographerMedias.forEach(
			(
				/** @type {{ photographerId: any; image: string; video: string; title: any; likes: any; }} */ media
			) => {
				let mediaCard = new MediaCard(section, {
					imgLink: "./img/photos/" + media.image,
					videoLink: "img/videos/" + media.video,
					imgTitle: media.title,
					like: media.likes,
					// totalLikes: this.totalLikes,
				});
				this.totalLikes += mediaCard.like;
			}
		);
	}
}
