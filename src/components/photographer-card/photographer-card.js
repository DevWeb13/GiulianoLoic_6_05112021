import Tags from "../tags/tags";
/**
 * Carte du photographe dans le lobby
 */
export default class PhotographerCard {
	constructor(domTarget, props) {
		this.DOM = domTarget;
		this.imgLink = "./img/PhotographersIDPhotos/" + props.portrait;
		this.name = props.name;
		this.location = props.city + ", " + props.country;
		this.tagline = props.tagline;
		this.price = props.price + "€/jour";
		this.tags = props.tags;
		this.id = props.id;
		this.render();
	}
	render() {
		const article = document.createElement("article");
		article.className = "photographer-card";
		this.DOM.appendChild(article);
		const button = document.createElement("button");
		button.classList.add("photographer-card-link");
		button.id = this.id;
		article.appendChild(button);
		const imgContainer = document.createElement("div");
		imgContainer.classList.add("photographer-card-link-imgContainer");
		button.appendChild(imgContainer);
		imgContainer.innerHTML = /* html */ `
				<img src=${this.imgLink}  alt="" cover width="208px" height="208px"/>
		`;
		button.innerHTML += /* html */ `
				<h2>
          ${this.name}
        </h2>
		`;
		article.innerHTML += /* html */ `
				<p class="location">
					${this.location}
				</p>
				<p class="tagline tagline_photographerPages">
					${this.tagline}
				</p>
				<p class="price">
					${this.price}
				</p>
    `;
		const nav = document.createElement("nav");
		nav.title = this.name + "Tags";
		this.tags.forEach((/** @type {any} */ tag) => {
			new Tags(nav, tag, "tags");
		});
		article.appendChild(nav);
	}
}
