export default class Header {
	constructor(domTarget, className) {
		this.DOM = domTarget;
		this.className = className;
		this.render();
	}
	render() {
		// const header = document.createElement("header");
		// this.DOM.appendChild(header);
		// header.classList.add(this.className);
		this.DOM.innerHTML = /* html */ `
		<header class="${this.className}">
			<button class="logo" title="logo" >
				<img src=" ./img/logo/logo.svg" alt="logo">
			</button>
			<button href="#" class="photographersLink">Nos photographes</button>
			<nav class="indexNav">
				<button href="#" class="tags tags-link">#Art</button>
				<button href="#" class="tags tags-link">#Fashion</button>
				<button href="#" class="tags tags-link">#Architecture</button>
				<button href="#" class="tags tags-link">#Travel</button>
				<button href="#" class="tags tags-link">#Sport</button>
				<button href="#" class="tags tags-link">#Animals</button>
				<button href="#" class="tags tags-link">#Events</button>
				<button href="#" class="tags tags-link">#Portrait</button>
			</nav>
		</header>
  `;
	}
}
