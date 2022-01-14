export default class LightBox {
	constructor(domTarget, props) {
		this.imgLink = props.imgLink;
		this.videoLink = props.videoLink;
		this.imgTitle = props.imgTitle;
		this.DOM = document.createElement("section");
		this.DOM.id = "lightBox";
		this.DOM.setAttribute("visible", "true");
		domTarget.appendChild(this.DOM);
		this.displayCard = document.createElement("nav");
		this.displayCard.id = "displayCard";
		this.DOM.appendChild(this.displayCard);
		this.close = document.createElement("button");
		this.close.type = "button";
		this.close.classList.add("close");
		this.displayCard.appendChild(this.close);
		this.closeLightBox();
		this.leftArrow = document.createElement("button");
		this.leftArrow.type = "button";
		this.leftArrow.classList.add("arrow");
		this.leftArrow.id = "leftArrow";
		this.displayCard.appendChild(this.leftArrow);
	}

	closeLightBox() {
		this.close.onclick = () => {
			this.DOM.parentNode.removeChild(this.DOM);
		};
	}
}
