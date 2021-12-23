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
		this.className = [props.className];
		if (props.className2) this.className.push(props.className2);
		this.type = props.type;
		this.text = props.text;
		this.render();
	}
	render() {
		const button = document.createElement("button");
		this.className.forEach((newClass) => {
			button.classList.add(newClass);
		});
		button.type = this.type;
		this.DOM.appendChild(button);
		button.textContent = this.text;
		this.goToContentManager(button);
	}

	goToContentManager(button) {
		if (button.classList.contains("goToContent")) {
			document.addEventListener("scroll", () => {
				if (window.scrollY > 20) {
					button.setAttribute("visible", "true");
					button.addEventListener("click", () => {
						window.location.href = "#main";
					});
				} else {
					button.removeAttribute("visible");
				}
			});
		}
	}
}
