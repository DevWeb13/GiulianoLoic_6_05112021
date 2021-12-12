import Tags from "../tags/tags";
// import { views } from "../../app";
// views.photographer();

export default class PhotographerCard {
	constructor(domTarget, props) {
		this.DOM = domTarget;
		this.articleClassName = props.articleClassName;
		this.btClassName = props.btClassName;
		this.imgLink = "./img/PhotographersIDPhotos/" + props.portrait;
		this.nom = props.name;
		this.location = props.city + ", " + props.country;
		this.tagline = props.tagline;
		this.price = props.price + "€/jour";
		this.tags = props.tags;
		this.id = props.id;
		// this.views = props.views;
		this.render();
	}

	async render() {
		const article = document.createElement("article");
		article.className = this.articleClassName;
		this.DOM.appendChild(article);
		article.innerHTML += /* html */ `
      <button class="${this.btClassName}" onclick="views.photographer"> 
        <div class="photographer-card-link-imgContainer">
          <img src="${this.imgLink}"  alt="" cover width="208px" height="208px"/>
        </div>
        <h2>
          ${this.nom}
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
		nav.className = "nav-card";
		this.tags.forEach((tag) => {
			new Tags(nav, tag);
		});
		article.appendChild(nav);
	}
}
