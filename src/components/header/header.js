import Tags from "../tags/tags";
/**
 * Composant header
 */
export default class Header {
	/**
	 * @param   {HTMLElement}  domTarget  Element parent du composant
	 * @param {array} photographers Tableau des photographes
	 * @param {array} tagsChecked Tableau contenant les tags sélectionnés
	 * @param   {String}  className  Class
	 * @param   {String}  [className2]  Seconde class(optionnel)
	 */
	constructor(domTarget, photographers, tagsChecked, className, className2) {
		this.photographers = photographers;
		this.tagsChecked = tagsChecked;
		this.className = [className];
		if (className2) this.className.push(className2);
		this.tagsValueArray = [
			"portrait",
			"art",
			"fashion",
			"architecture",
			"travel",
			"sports",
			"animals",
			"events",
		];
		this.DOM = document.createElement("header");
		this.className.forEach((newClass) => {
			this.DOM.classList.add(newClass);
		});
		domTarget.appendChild(this.DOM);
		this.logoBt = document.createElement("button");
		this.logoBt.classList.add("logo");
		this.logoBt.title = "logo";
		this.DOM.appendChild(this.logoBt);
		this.logoBt.onclick = this.goHome;
		this.logoImg = document.createElement("img");
		this.logoImg.src = "./img/logo/logo.svg";
		this.logoImg.alt = "Fisheye Home page";
		this.logoBt.appendChild(this.logoImg);
		if (this.className.length === 1) {
			this.h1 = document.createElement("h1");
			this.h1.classList.add("lobbyH1");
			this.h1.textContent = "Nos photographes";
			this.DOM.appendChild(this.h1);
			this.nav = document.createElement("nav");
			this.tagsValueArray.forEach((tagValue) => {
				new Tags(
					this.nav,
					this.photographers,
					tagValue,
					"tags",
					"tags-link",
					this.tagsChecked
				);
			});
			this.DOM.appendChild(this.nav);
			this.tags = document.querySelectorAll(".tags-link");
			this.tagsChecked.forEach((tagChecked) => {
				this.tags.forEach((tag) => {
					if (tag.innerHTML == tagChecked) {
						tag.setAttribute("isChecked", "true");
					}
				});
			});
		}
	}
	/**
	 * Retour accueil
	 */
	goHome() {
		window.location.href = "./";
	}
}
