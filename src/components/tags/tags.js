export default class Tags {
	constructor(domTarget, tag, className) {
		this.DOM = domTarget;
		this.tag = tag;
		this.className = className;

		this.render();
	}
	render() {
		const button = document.createElement("button");
		button.className = "tags";
		if (this.className !== null) {
			button.classList.add(this.className);
		}

		this.DOM.appendChild(button);
		button.innerHTML += /* html */ `#${this.tag}`;
	}
}
