import Tags from "../tags/tags";
import BtContact from "../btContact/btContact";

/**
 * Carte du photographe dans sa page perso
 */
export default class PhotographerCardBig {
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
		this.render();
	}

	render() {
		const article = document.createElement("article");
		article.className = this.articleClassName;
		this.DOM.appendChild(article);
		article.innerHTML = /* html */ `
						<div class="photographer-card-link-imgContainer photographer-card-big-imgContainer">
							<img src="${this.imgLink}"  alt="" cover />
						</div>
						<h2>
							${this.nom}
						</h2>
						<p class="location">
							${this.location}
						</p>
						<p class="tagline">
							${this.tagline}
						</p>
   `;
		const nav = document.createElement("nav");
		this.tags.forEach((tag) => {
			new Tags(nav, tag, null);
		});
		article.appendChild(nav);
		this.insertBtContactDesktop(article);
		this.insertBtContactMobile(article);
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
			className: "btContact btContact-desktop",
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
			className: "btContact btContact-mobile",
			type: "button",
			text: "Contactez moi",
		});
	}
}
