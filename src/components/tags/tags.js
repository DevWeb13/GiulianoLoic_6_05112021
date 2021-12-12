export default class Tags {
	constructor(domTarget, tag) {
		this.DOM = domTarget;
		this.tag = tag;
		this.render();
	}
	render() {
		const button = document.createElement("button");
		button.className = "tags";
		this.DOM.appendChild(button);
		button.innerHTML += /* html */ `
        #${this.tag}
    `;
	}
}
