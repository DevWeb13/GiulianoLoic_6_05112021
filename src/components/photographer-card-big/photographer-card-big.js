import Tags from "../tags/tags";
import BtContact from "../btContact/btContact";
import PhotographerCard from "../photographer-card/photographer-card";

/**
 * Carte du photographe dans sa page perso
 */
export default class PhotographerCardBig extends PhotographerCard {
	/**
	 * @param {HTMLElement} domTarget
	 * @param {{ tags: any; portrait?: any; name?: any; city?: any; country?: any; tagline?: any; price?: any; id?: any; }} props
	 */
	constructor(domTarget, props) {
		super(domTarget, props);
	}

	/**
	 * @param {HTMLElement} domTarget
	 */
	render(domTarget) {
		this.tagsChecked = [];
		this.DOM = document.createElement("article");
		this.DOM.classList.add("photographer-card-big");
		domTarget.appendChild(this.DOM);
		this.photographerCardBigImgContainer = document.createElement("div");
		this.photographerCardBigImgContainer.classList.add(
			"photographer-card-link-imgContainer",
			"photographer-card-big-imgContainer"
		);
		this.DOM.appendChild(this.photographerCardBigImgContainer);
		this.insertImg();
		this.photographerCardBigImgContainer.appendChild(this.img);
		this.h2 = document.createElement("h2");
		this.h2.textContent = this.name;
		this.DOM.appendChild(this.h2);
		this.insertLocationElm();
		this.insertTagline();
		this.nav = document.createElement("nav");
		this.tags.forEach((/** @type {any} */ tag) => {
			new Tags(this.nav, "", tag, "tags", "tags-link", this.tagsChecked);
		});
		this.DOM.appendChild(this.nav);
		this.insertBtContactDesktop(this.DOM);
		this.insertBtContactMobile(this.DOM);
	}

	insertTagline() {
		this.taglineElm = document.createElement("p");
		this.taglineElm.classList.add("tagline");
		this.taglineElm.textContent = this.tagline;
		this.DOM.appendChild(this.taglineElm);
	}

	insertImg() {
		this.img = document.createElement("img");
		this.img.src = this.imgLink;
		this.img.alt = "";
		this.img.setAttribute("width", "208px");
		this.img.setAttribute("height", "208px");
	}

	insertLocationElm() {
		this.locationElm = document.createElement("p");
		this.locationElm.classList.add("location");
		this.locationElm.textContent = this.location;
		this.DOM.appendChild(this.locationElm);
	}

	/**
	 * @param {HTMLElement} article
	 */
	insertBtContactDesktop(article) {
		new BtContact(article, {
			className: "btContact",
			className2: "btContact-desktop",
			type: "button",
			text: "Contactez moi",
			name: this.name,
		});
	}

	/**
	 * @param {HTMLElement} article
	 */
	insertBtContactMobile(article) {
		new BtContact(article, {
			className: "btContact",
			className2: "btContact-mobile",
			type: "button",
			text: "Contactez moi",
			name: this.name,
		});
	}
}
