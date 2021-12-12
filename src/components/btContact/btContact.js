// export default function BtContact() {
// 	const btContacts = document.querySelectorAll(".btContact[type=button]");
// 	const bground = document.querySelector(".bground");

// 	/**
// 	 * Au clic sur un des boutons "Contactez moi" => Ouverture de la form-modal
// 	 */
// 	btContacts.forEach((btContact) =>
// 		btContact.addEventListener("click", function () {
// 			bground.setAttribute("visible", "true");
// 		})
// 	);
// }

export default class BtContact {
	constructor(domtarget, props) {
		this.DOM = domtarget;
		this.className = props.className;
		this.type = props.type;
		this.text = props.text;
		this.render();
	}
	render() {
		this.DOM.innerHTML += /* html */ `
		<button class="${this.className}" type="${this.type}">
    	${this.text}
		</button>
		
		`;
	}
}
