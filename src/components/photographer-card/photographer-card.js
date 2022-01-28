import Tags from "../tags/tags";
/**
 * Carte du photographe dans le lobby
 */
export default class PhotographerCard {
	/**
	 * @param {HTMLElement} domTarget
	 * @param {{ tags: any; portrait?: any; name?: any; city?: any; country?: any; tagline?: any; price?: any; id?: any; }} props
	 */
	constructor(domTarget, props) {
		this.imgLink = "./img/PhotographersIDPhotos/" + props.portrait;
		this.name = props.name;
		this.location = props.city + ", " + props.country;
		this.tagline = props.tagline;
		this.price = props.price + "€/jour";
		this.tags = props.tags;
		this.id = props.id;
		this.render(domTarget);
	}

	/**
	 * @param {HTMLElement} domTarget
	 */
	render(domTarget) {
		this.DOM = document.createElement("article");
		this.DOM.classList.add("photographer-card");
		domTarget.appendChild(this.DOM);
		this.button = document.createElement("a");
		this.button.tabIndex = 0;
		this.button.classList.add("photographer-card-link");
		this.button.id = this.id;
		this.DOM.appendChild(this.button);
		this.goPhotographerPage();
		this.imgContainer = document.createElement("div");
		this.imgContainer.classList.add("photographer-card-link-imgContainer");
		this.button.appendChild(this.imgContainer);
		this.insertImg();
		this.imgContainer.appendChild(this.img);
		this.h2 = document.createElement("h2");
		this.h2.textContent = this.name;
		this.button.appendChild(this.h2);
		this.insertLocationElm();
		this.insertTagline();
		this.priceElm = document.createElement("p");
		this.priceElm.classList.add("price");
		this.priceElm.textContent = this.price;
		this.DOM.appendChild(this.priceElm);
		this.nav = document.createElement("nav");
		this.nav.title = this.name + " Tags";
		this.tags.forEach((/** @type {any} */ tag) => {
			new Tags(this.nav, "", tag, "tags");
		});
		this.DOM.appendChild(this.nav);
	}

	goPhotographerPage() {
		this.button.onclick = () => {
			window.location.href = "./photographer.html?id=" + this.button.id;

			console.log(this.button.id);
			return this.id;
		};
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
		// this.img.setAttribute("width", "208px");
		// this.img.setAttribute("height", "208px");
	}

	insertLocationElm() {
		this.locationElm = document.createElement("p");
		this.locationElm.classList.add("location");
		this.locationElm.textContent = this.location;
		this.DOM.appendChild(this.locationElm);
	}
}
