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
		this.DOM = document.createElement("button");
		if (typeof props.className === "string")
			props.className = [props.className];
		if (props.className2) props.className.push(props.className2);
		props.className.forEach((newClass) => {
			this.DOM.classList.add(newClass);
		});
		this.DOM.type = props.type;
		this.DOM.textContent = props.text;
		if (this.DOM.classList.contains("goToContent")) {
			window.onscroll = () => this.scrollHandler();
			this.DOM.onclick = this.goToContent;
		}
		if (this.DOM.classList.contains("btContact")) {
			this.DOM.onclick = this.goFormContact;
		}
		domtarget.appendChild(this.DOM);
		this.visible = false;
	}

	goFormContact() {
		const bground = document.querySelector(".bground");
		bground.setAttribute("visible", "true");
		// bground.style.display = "block";
		bground.parentElement.style.overflow = "hidden";
		console.log(bground);
	}

	goToContent() {
		window.location.href = "#main";
	}

	scrollHandler() {
		const shouldBeVisible = window.scrollY > 20;
		// console.log(" shouldBeVisible", shouldBeVisible, "isVisible", this.visible);
		if (this.visible === shouldBeVisible) return;
		this.DOM.setAttribute("visible", shouldBeVisible.toString());
		this.visible = shouldBeVisible;
		console.log(this);
	}
}
