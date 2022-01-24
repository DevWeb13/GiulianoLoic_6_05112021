/**
 * Composant "Aside" contenant le nombre de like total et le tarif journalier
 */
export default class Aside {
	/**
	 * @param {{ appendChild: (arg0: HTMLElement) => void; }} domTarget
	 * @param {{ price: string; totalLikes: string; }} props
	 */
	constructor(domTarget, props) {
		this.DOM = document.createElement("aside");
		domTarget.appendChild(this.DOM);
		this.price = parseInt(props.price);
		this.totalLike = parseInt(props.totalLikes);
		this.likeElm = document.createElement("p");
		this.likeElm.classList.add("like");
		this.likeButtons = document.querySelectorAll("button[class=like]");
		this.likeElm.textContent = this.totalLike.toString();
		this.totalLikesManager();
		this.DOM.appendChild(this.likeElm);
		this.priceElm = document.createElement("p");
		this.priceElm.classList.add("price");
		this.priceElm.textContent = this.price + "€/jour";
		this.DOM.appendChild(this.priceElm);
	}
	/**
	 * Gestion des likes totaux
	 */
	totalLikesManager() {
		this.likeButtons.forEach((button) => {
			button.addEventListener("click", () => {
				if (!button.hasAttribute("bold")) {
					this.totalLike--;
				} else {
					this.totalLike++;
				}
				this.likeElm.textContent = this.totalLike.toString();
			});
		});
	}
}
