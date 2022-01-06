import Tags from "../tags/tags";
import BtContact from "../btContact/btContact";
import PhotographerCard from "../photographer-card/photographer-card";

/**
 * Carte du photographe dans sa page perso
 */
export default class PhotographerCardBig extends PhotographerCard {
	constructor(domTarget, props) {
		super(domTarget, props);
	}

	render(domTarget) {
		this.tagsChecked = [];
		console.log(this.tagsChecked);
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
		this.tags.forEach((tag) => {
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
	 * Insertion du bouton contact version desktop
	 *
	 * @param   {HTMLElement}  article  Description du photographe
	 *
	 * @return  {void}       	 Insertion du bouton contact version desktop
	 */
	insertBtContactDesktop(article) {
		new BtContact(article, {
			className: "btContact",
			className2: "btContact-desktop",
			type: "button",
			text: "Contactez moi",
		});
	}
	/**
	 * Insertion du bouton contact version mobile
	 *
	 * @param   {HTMLElement}  article  Description du photographe
	 *
	 * @return  {void}       	 Insertion du bouton contact version mobile
	 */
	insertBtContactMobile(article) {
		new BtContact(article, {
			className: "btContact",
			className2: "btContact-mobile",
			type: "button",
			text: "Contactez moi",
		});
	}
}
