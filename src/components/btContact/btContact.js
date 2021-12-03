const btContacts = document.querySelectorAll(".btContact[type=button]");

/**
 * Au clic sur un des boutons "Contactez moi" => Ouverture de la form-modal
 */
btContacts.forEach((btContact) =>
	btContact.addEventListener("click", function () {
		bground.setAttribute("visible", "true");
	})
);
