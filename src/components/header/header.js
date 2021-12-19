import Tags from "../tags/tags";

export default class Header {
	/**
	 * [constructor description]
	 *
	 * @param   {HTMLElement}  domTarget   [domTarget description]
	 * @param		{array} tagsChecked
	 * @param   {String}  className   [className description]
	 * @param   {String}  [className2]  [className2 description]
	 */
	constructor(domTarget, tagsChecked, className, className2) {
		this.DOM = domTarget;
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
		this.render();
	}
	render() {
		this.DOM.innerHTML = "";
		const header = document.createElement("header");
		this.DOM.appendChild(header);
		this.className.forEach((newClass) => {
			header.classList.add(newClass);
		});
		header.innerHTML = /* html */ `
			<button class="logo" title="logo" alt="Fisheye Home Page" >
				<img src=" ./img/logo/logo.svg" alt="logo" onclick="goHome()">
			</button>
			<h1 class="lobbyH1">Nos photographes</h1>
			 `;
		if (this.className.length === 1) {
			const nav = document.createElement("nav");
			this.tagsValueArray.forEach((tagValue) => {
				new Tags(nav, tagValue, "tags", "tags-link");
			});
			header.appendChild(nav);
			const tags = document.querySelectorAll(".tags-link");
			this.tagsChecked.forEach((tagChecked) => {
				tags.forEach((tag) => {
					if (tag.innerHTML == tagChecked) {
						tag.setAttribute("isChecked", "true");
					}
				});
			});
		}
	}
}
