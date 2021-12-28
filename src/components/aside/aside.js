export default class Aside {
	constructor(domTarget, props) {
		this.DOM = document.createElement("aside");
		domTarget.appendChild(this.DOM);
		this.price = props.price;
		this.like = props.totalLikes;
		this.likeElm = document.createElement("p");
		this.likeElm.classList.add("like");
		this.likeButtons = document.querySelectorAll("button[class=like]");
		this.likeElm.textContent = this.like;
		this.totalLikesManager();
		this.DOM.appendChild(this.likeElm);
		this.priceElm = document.createElement("p");
		this.priceElm.classList.add("price");
		this.priceElm.textContent = this.price + "€/jour";
		this.DOM.appendChild(this.priceElm);
	}

	totalLikesManager() {
		this.likeButtons.forEach((button) => {
			button.addEventListener("click", () => {
				if (!button.hasAttribute("bold")) {
					this.like--;
				} else {
					this.like++;
				}
				this.likeElm.textContent = this.like;
			});
		});
	}
}
