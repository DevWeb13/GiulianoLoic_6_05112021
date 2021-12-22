import MediaCard from "../mediaCard/mediaCard";

export default class MediaCardsSection {
	constructor(domTarget, props) {
		this.DOM = domTarget;
		this.medias = props.medias;
		this.id = props.id;
		this.render();
	}
	render() {
		const section = document.createElement("section");
		section.id = "mediaCardsSection";
		this.DOM.appendChild(section);
		console.log(this.id);
		console.log(this.medias);
		this.displayMediaCard(section);
	}

	displayMediaCard(section) {
		this.medias.forEach(
			(
				/** @type {{ photographerId: any; image: string; video: string; title: any; likes: any; }} */ media
			) => {
				if (media.photographerId == this.id) {
					new MediaCard(section, {
						imgLink: "./img/photos/" + media.image,
						videoLink: "img/videos/" + media.video,
						imgTitle: media.title,
						like: media.likes,
					});
					console.log(media.video);
				}
			}
		);
		// const likes = document.querySelectorAll(".like");
		// console.log(likes);
		// likes.forEach((like) => {
		// 	like.addEventListener("click", () => {
		// 		console.log("test");
		// 		mediaCard =
		// 	});
		// });
	}
}
