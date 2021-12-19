export default class Tags {
	constructor(domTarget, tag, className, className2) {
		this.DOM = domTarget;
		this.tag = tag;
		this.className = [className];
		if (className2) {
			this.className.push(className2);
		}
		this.render();
	}
	render() {
		const button = document.createElement("button");
		this.className.forEach((newClass) => {
			button.classList.add(newClass);
		});
		this.DOM.appendChild(button);
		button.innerHTML += /* html */ `#${this.tag}`;
		this.addDisabled(button);
	}

	addDisabled(button) {
		if (this.className.length === 1) {
			button.disabled = true;
		}
	}
}
