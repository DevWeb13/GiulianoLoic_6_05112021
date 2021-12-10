import FilterLink from "./../filterLink/filterLink";

export default class PhotographerCard {
	constructor(domTarget, props) {
		this.DOM = document.getElementById("index-main");
		domTarget.appendChild(this.DOM);

		this.articleClassName = props.articleClassName;
		this.btClassName = props.btClassName;
		this.imgLink = props.imgLink;
		this.nom = props.nom;
		this.location = props.location;
		this.tagline = props.tagline;
		this.price = props.price;
		this.tags = props.tags;
		this.id = props.id;

		// console.log(this.nav);
		this.render();
		this.navRender(this.tags);
	}
	async render() {
		this.DOM.innerHTML += /* html */ `
    <article class="${this.articleClassName}">
      <button class="${this.btClassName}" onclick="document.location.href='photographer.html'">
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
      <nav class="nav-card">
			${this.tags}
        <button href="#" class="filterLink">#${this.tags[0]}</button>
        <button href="#" class="filterLink">#${this.tags[1]}</button>
        <button href="#" class="filterLink">#${this.tags[2]}</button>
        <button href="#" class="filterLink">#${this.tags[3]}</button>
      </nav>
    </article>

    `;
	}
	async navRender(tags) {
		// this.nav = this.DOM.querySelectorAll(".nav-card");
		console.log(this.DOM);
		tags.forEach((tag) => {
			// this.DOM.innerHTML += /* html */ `<button href="#" class="filterLink">#${tag}</button>`;
			new FilterLink(this.DOM, tag);
		});
	}
}
