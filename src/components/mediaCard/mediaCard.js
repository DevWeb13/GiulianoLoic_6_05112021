export default class MediaCard {
	constructor(domTarget, props) {
		this.DOM = domTarget;
		this.imgLink = props.imgLink;
		this.videoLink = props.videoLink;
		this.imgTitle = props.imgTitle;
		this.like = props.like;
		// this.totalLikes = props.totalLikes;
		this.render();
	}
	render() {
		const article = document.createElement("article");
		article.classList.add("mediaCard");
		this.DOM.appendChild(article);
		const button = document.createElement("button");
		button.classList.add("imgContainer");
		article.appendChild(button);
		this.displayImgOrVideo(button);
		const infoContainer = document.createElement("div");
		infoContainer.classList.add("infoContainer");
		article.appendChild(infoContainer);
		const imgTitle = document.createElement("p");
		imgTitle.classList.add("imgTitle");
		imgTitle.textContent = this.imgTitle;
		infoContainer.appendChild(imgTitle);
		const like = document.createElement("button");
		like.classList.add("like");
		like.textContent = this.like;
		infoContainer.appendChild(like);
		this.incrementLike(like);
	}

	incrementLike(like) {
		like.addEventListener("click", () => {
			if (!like.hasAttribute("bold")) {
				like.setAttribute("bold", true);
				this.like++;
				// this.totalLikes++;
			} else {
				like.removeAttribute("bold");
				this.like--;
				// this.totalLikes--;
			}
			like.textContent = this.like;
		});
	}

	displayImgOrVideo(button) {
		if (this.imgLink.indexOf(".jpg") !== -1) {
			const img = document.createElement("img");
			img.src = this.imgLink;
			img.alt = "";
			button.appendChild(img);
		} else {
			const video = document.createElement("video");
			// video.controls = true;
			button.appendChild(video);
			const source = document.createElement("source");
			source.src = this.videoLink;
			source.type = "video/mp4";
			video.appendChild(source);
		}
	}
}
