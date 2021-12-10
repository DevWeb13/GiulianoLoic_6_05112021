export default function BtContact() {
	const btContacts = document.querySelectorAll(".btContact[type=button]");
	const bground = document.querySelector(".bground");

	/**
	 * Au clic sur un des boutons "Contactez moi" => Ouverture de la form-modal
	 */
	btContacts.forEach((btContact) =>
		btContact.addEventListener("click", function () {
			bground.setAttribute("visible", "true");
		})
	);
}
