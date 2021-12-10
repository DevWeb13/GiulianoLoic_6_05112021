export default class FilterLink {
	constructor(domTarget, tag) {
		this.DOM = document.createElement("button");

		domTarget.appendChild(this.DOM);
		this.DOM.classList.add("filterLink");
		this.tag = tag;
		this.render();
	}
	render() {
		this.DOM.innerHTML += /* html */ `
        #${this.tag}
    `;
	}
}
