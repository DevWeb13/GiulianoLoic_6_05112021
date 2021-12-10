export default class Header {
	constructor(domTarget, props) {
		this.DOM = document.getElementById("index-header");

		domTarget.appendChild(this.DOM);
		this.className = props.className;
		this.DOM.classList.add(this.className);
		domTarget.appendChild(this.DOM);

		this.render();
	}
	render() {
		this.DOM.innerHTML = /* html */ `
    <button class="logo" title="logo" onclick="document.location.href='index.html'">
      <img src=" ./img/logo/logo.svg" alt="logo">
    </button>
    <button href="#" class="photographersLink">Nos photographes</button>
		<nav class="indexNav">
		<button href="#" class="filterLink">#Art</button>
		<button href="#" class="filterLink">#Fashion</button>
		<button href="#" class="filterLink">#Architecture</button>
		<button href="#" class="filterLink">#Travel</button>
		<button href="#" class="filterLink">#Sport</button>
		<button href="#" class="filterLink">#Animals</button>
		<button href="#" class="filterLink">#Events</button>
		<button href="#" class="filterLink">#Portrait</button>
		</nav>
  `;
	}
}
