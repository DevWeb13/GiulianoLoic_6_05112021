export default class LightBox {
	/**
	 * @param {{ appendChild: (arg0: HTMLElement) => void; }} domTarget
	 * @param {{ imgTitle: any; medias: any; }} props
	 */
	constructor(domTarget, props) {
		this.imgTitle = props.imgTitle;
		this.medias = props.medias;
		this.DOM = document.createElement("section");
		this.DOM.id = "lightBox";
		this.DOM.setAttribute("aria-hidden", "false");
		this.DOM.setAttribute("role", "dialog");
		domTarget.appendChild(this.DOM);
		this.displayCard = document.createElement("nav");
		this.displayCard.id = "displayCard";
		this.DOM.appendChild(this.displayCard);
		this.close = document.createElement("button");
		this.close.type = "button";
		this.close.classList.add("close");
		this.close.title = "Close dialog";
		this.close.focus();
		this.displayCard.appendChild(this.close);
		this.close.onclick = () => {
			this.closeLightbox();
		};
		this.leftArrow = document.createElement("button");
		this.leftArrow.type = "button";
		this.leftArrow.classList.add("arrow");
		this.leftArrow.id = "leftArrow";
		this.leftArrow.title = "Previous image";
		this.displayCard.appendChild(this.leftArrow);

		this.imgContainer = document.createElement("div");
		this.imgContainer.id = "imgContainer";
		this.displayCard.appendChild(this.imgContainer);
		this.rightArrow = document.createElement("button");
		this.rightArrow.type = "button";
		this.rightArrow.classList.add("arrow");
		this.rightArrow.id = "rightArrow";
		this.rightArrow.title = "Next image";
		this.displayCard.appendChild(this.rightArrow);
		this.p = document.createElement("p");
		this.DOM.appendChild(this.p);

		for (let i = 0; i < this.medias.length; i++) {
			if (this.medias[i].title === this.imgTitle) {
				if (this.medias[i].image) {
					this.displayImage(i);
				} else {
					this.displayVideo(i);
				}
				i = this.changeImage(i);
			}
		}
	}

	/**
	 * @param {number} i
	 */
	displayVideo(i) {
		this.deletePreviousImage();
		this.createVideo(i);
	}

	/**
	 * @param {number} i
	 */
	createVideo(i) {
		this.video = document.createElement("video");
		this.video.controls = true;
		this.video.autoplay = true;
		this.video.setAttribute("aria-label", this.medias[i].description);
		this.imgContainer.appendChild(this.video);
		this.source = document.createElement("source");
		this.source.src = "./img/videos/" + this.medias[i].video;
		this.source.type = "video/mp4";
		this.video.appendChild(this.source);
		this.p.textContent = this.medias[i].title;
	}

	deletePreviousImage() {
		let video = this.DOM.querySelector("video");
		let image = this.DOM.querySelector("img");
		if (video) {
			this.video.parentElement.removeChild(this.video);
		}
		if (image) {
			this.img.parentElement.removeChild(this.img);
		}
	}

	/**
	 * @param {number} i
	 */
	displayImage(i) {
		this.deletePreviousImage();
		this.createImg(i);
	}

	/**
	 * @param {number} i
	 */
	createImg(i) {
		this.img = document.createElement("img");
		this.img.alt = "";
		this.imgContainer.appendChild(this.img);
		this.img.src = "./img/photos/" + this.medias[i].image;
		this.img.title = this.medias[i].title;
		this.img.alt = this.medias[i].description;
		this.img.setAttribute("aria-label", "Lilac breasted roller");
		this.img.setAttribute("tabindex", "0");
		this.p.textContent = this.medias[i].title;
	}

	/**
	 * @param {number} i
	 */
	changeImage(i) {
		this.rightArrow.onclick = () => {
			i = this.goRight(i);
		};
		this.leftArrow.onclick = () => {
			i = this.goLeft(i);
		};
		document.onkeyup = (e) => {
			i = this.keyManager(e, i);
		};
		return i;
	}

	/**
	 * @param {KeyboardEvent} e
	 * @param {number} i
	 */
	keyManager(e, i) {
		if (e.keyCode === 37) {
			i = this.goLeft(i);
		}
		if (e.keyCode === 39) {
			i = this.goRight(i);
		}
		if (e.keyCode === 27) {
			this.closeLightbox();
		}
		return i;
	}

	/**
	 * @param {number} i
	 */
	goLeft(i) {
		if (i !== 0) {
			i--;
			if (this.medias[i].image) {
				this.displayImage(i);
			} else {
				this.displayVideo(i);
			}
		} else {
			i = this.medias.length - 1;
			if (this.medias[i].image) {
				this.displayImage(i);
			} else {
				this.displayVideo(i);
			}
		}
		return i;
	}

	/**
	 * @param {number} i
	 */
	goRight(i) {
		if (i !== this.medias.length - 1) {
			i++;
			if (this.medias[i].image) {
				this.displayImage(i);
			} else {
				this.displayVideo(i);
			}
		} else {
			i = 0;
			if (this.medias[i].image) {
				this.displayImage(i);
			} else {
				this.displayVideo(i);
			}
		}
		return i;
	}

	closeLightbox() {
		this.DOM.parentElement.style.overflow = "auto";
		this.DOM.parentElement.setAttribute("aria-hidden", "false");
		this.DOM.parentNode.removeChild(this.DOM);
		this.buttons = document.querySelectorAll("button");
		for (let i = 0; i < this.buttons.length; i++) {
			const elm = this.buttons[i];

			elm.removeAttribute("disabled");
		}
		this.widgetLabel = document.getElementById("select");
		this.widgetLabel.setAttribute("tabindex", "0");
	}
}
