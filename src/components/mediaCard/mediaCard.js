import LightBox from "../lightBox/lightBox";

export default class MediaCard {
	constructor(domTarget, props) {
		// this.DOM = domTarget;
		this.imgLink = props.imgLink;
		this.videoLink = props.videoLink;
		this.imgTitle = props.imgTitle;
		this.like = props.like;
		this.medias = props.medias;
		this.DOM = document.createElement("article");
		this.DOM.classList.add("mediaCard");
		domTarget.appendChild(this.DOM);
		this.buttonImg = document.createElement("button");
		this.buttonImg.classList.add("imgContainer");
		this.buttonImg.setAttribute("aria-label", "image closeup view");
		this.buttonImg.title = this.imgTitle;
		this.openLightBox(domTarget);
		this.DOM.appendChild(this.buttonImg);
		this.displayImgOrVideo(this.buttonImg);
		this.infoContainer = document.createElement("div");
		this.infoContainer.classList.add("infoContainer");
		this.DOM.appendChild(this.infoContainer);
		this.imgTitleElm = document.createElement("p");
		this.imgTitleElm.classList.add("imgTitle");
		this.imgTitleElm.textContent = this.imgTitle;
		this.infoContainer.appendChild(this.imgTitleElm);
		this.likeBt = document.createElement("button");
		this.likeBt.classList.add("like");
		this.likeBt.setAttribute("aria-label", "likes");
		this.likeBt.textContent = this.like;
		this.infoContainer.appendChild(this.likeBt);
		this.incrementLike(this.likeBt);
	}

	openLightBox(domTarget) {
		this.buttonImg.onclick = () => {
			this.body = domTarget.parentNode.parentNode;
			new LightBox(this.body, {
				medias: this.medias,
				imgTitle: this.imgTitle,
			});
			window.scroll(0, 0);
			this.body.style.overflow = "hidden";
			this.buttons = document.querySelectorAll("button");
			for (let i = 0; i < this.buttons.length - 3; i++) {
				const elm = this.buttons[i];
				elm.setAttribute("disabled", "");
			}
			this.widgetLabel = document.getElementById("select");
			this.widgetLabel.removeAttribute("tabindex");
		};
	}

	incrementLike(like) {
		like.addEventListener("click", () => {
			if (!like.hasAttribute("bold")) {
				like.setAttribute("bold", true);
				this.like++;
				this.newLike = this.like;
			} else {
				like.removeAttribute("bold");
				this.like--;
			}
			like.textContent = this.like;
		});
	}

	displayImgOrVideo(button) {
		if (this.imgLink.indexOf(".jpg") !== -1) {
			this.img = document.createElement("img");
			this.img.src = this.imgLink;
			this.img.alt = "";
			button.appendChild(this.img);
		} else {
			this.video = document.createElement("video");
			// video.controls = true;
			button.appendChild(this.video);
			this.source = document.createElement("source");
			this.source.src = this.videoLink;
			this.source.type = "video/mp4";
			this.video.appendChild(this.source);
		}
	}
}
