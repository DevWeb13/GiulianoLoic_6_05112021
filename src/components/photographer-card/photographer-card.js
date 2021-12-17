import Tags from "../tags/tags";

export default class PhotographerCard {
	constructor(domTarget, props) {
		this.DOM = domTarget;
		this.articleClassName = props.articleClassName;
		this.btClassName = props.btClassName;
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
		article.className = this.articleClassName;
		article.id = this.id;
		this.DOM.appendChild(article);
		article.innerHTML += /* html */ `
      <button class=${this.btClassName} id=${this.id} name="${this.name}"> 
        <div class="photographer-card-link-imgContainer">
          <img src=${this.imgLink}  alt="" cover width="208px" height="208px"/>
        </div>
        <h2>
          ${this.name}
        </h2>
      </button>
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
		this.tags.forEach((/** @type {any} */ tag) => {
			new Tags(nav, tag, null);
		});
		article.appendChild(nav);
	}
}
