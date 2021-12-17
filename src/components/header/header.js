import Tags from "../tags/tags";

export default class Header {
	constructor(domTarget, className, className2) {
		this.DOM = domTarget;
		this.className = className;
		this.className2 = className2;
		this.render();
	}
	render() {
		this.DOM.innerHTML = "";
		const header = document.createElement("header");
		this.DOM.appendChild(header);
		header.classList.add(this.className);
		header.classList.add(this.className2);
		header.innerHTML = /* html */ `
			<button class="logo" title="logo" alt="Fisheye Home Page">
				<img src=" ./img/logo/logo.svg" alt="logo">
			</button>
			<h1 class="lobbyH1">Nos photographes</h1>
			 `;
		const nav = document.createElement("nav");
		new Tags(nav, "portrait", "tags-link");
		new Tags(nav, "art", "tags-link");
		new Tags(nav, "fashion", "tags-link");
		new Tags(nav, "architecture", "tags-link");
		new Tags(nav, "travel", "tags-link");
		new Tags(nav, "sports", "tags-link");
		new Tags(nav, "animals", "tags-link");
		new Tags(nav, "events", "tags-link");
		header.appendChild(nav);
	}
}
// export default class Header {
// 	constructor(domTarget, className) {
// 		this.DOM = domTarget;
// 		this.className = className;
// 		this.render();
// 	}
// 	render() {
// 		// const header = document.createElement("header");
// 		// this.DOM.appendChild(header);
// 		// header.classList.add(this.className);
// 		this.DOM.innerHTML = /* html */ `
// 		<header class="${this.className}">
// 			<button class="logo" title="logo" >
// 				<img src=" ./img/logo/logo.svg" alt="logo">
// 			</button>
// 			<button href="#" class="photographersLink">Nos photographes</button>
// 			<nav class="indexNav">
// 				<button href="#" class="tags tags-link">#Art</button>
// 				<button href="#" class="tags tags-link">#Fashion</button>
// 				<button href="#" class="tags tags-link">#Architecture</button>
// 				<button href="#" class="tags tags-link">#Travel</button>
// 				<button href="#" class="tags tags-link">#Sport</button>
// 				<button href="#" class="tags tags-link">#Animals</button>
// 				<button href="#" class="tags tags-link">#Events</button>
// 				<button href="#" class="tags tags-link">#Portrait</button>
// 			</nav>
// 		</header>
//   `;
// 	}
// }
