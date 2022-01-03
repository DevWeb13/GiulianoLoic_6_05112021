// export default function FormModal() {
// 	/**
// 	 * Bouton croix fermeture form-modal
// 	 */
// 	const btClose = document.querySelector(".close");
// 	/**
// 	 * Background de form-modal
// 	 */
// 	const bground = document.querySelector(".bground");
// 	/**
// 	 * Boutons submit de form-modal
// 	 */
// 	const btSubmits = document.querySelectorAll("button[type=submit]");
// 	/**
// 	 * Inputs de [type=text]
// 	 */
// 	const inputsTexts = document.querySelectorAll("input[type=text]");
// 	/**
// 	 * Input Email
// 	 */
// 	const inputEmail = document.getElementById("email");
// 	/**
// 	 * Tableau formDatas
// 	 */
// 	const formDatas = document.querySelectorAll(".formData");
// 	const formModal = document.querySelector(".form-modal");
// 	const textArea = document.querySelector("textarea");
// 	const form = document.querySelector("form[name=reserve]");
// 	console.log(form);
// 	/* ************* REGEX **************************************************************** */
// 	/**
// 	 * Regex (< 2 characters; Pas de chiffres)
// 	 */
// 	const firstLastRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
// 	/**
// 	 * Regex de vérification d'email
// 	 */
// 	const emailRegex =
// 		/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/; // Vérification d'email

// 	/**
// 	 * Vérifie si toutes les données entrées par l'utilisateur sont valide.
// 	 * Si les données sont validées on les affiche dans la console
// 	 * et le message de validation apparait.
// 	 *
// 	 * @param   {any}  btSubmits  [btSubmits description]
// 	 * @param   {any}  formDatas  [formDatas description]
// 	 *
// 	 * @return  {void}             Affiche les données et le message de validation si les données sont validées.
// 	 */
// 	function submit(btSubmits, formDatas) {
// 		btSubmits.forEach((btSubmit) =>
// 			btSubmit.addEventListener("click", function (e) {
// 				e.preventDefault();
// 				if (verifDataValid(formDatas)) {
// 					createValidText(btSubmits, btClose);
// 					form.reset();
// 					formDatas.forEach((formData) => {
// 						formData.removeAttribute("data-valid");
// 					});
// 					console.log("data valide");
// 					// if ok => log + affiche valid message
// 				}

// 				// else => msg error
// 				console.log("test");
// 			})
// 		);
// 	}

// 	/**
// 	 * Affiche le message de validation
// 	 * @return  {void}  Affiche le message de validation / Change les attributs des boutons de la modal
// 	 */
// 	function createValidText(btSubmits, btClose) {
// 		const validDiv = document.createElement("div");
// 		validDiv.id = "validDiv";
// 		formModal.appendChild(validDiv);
// 		validDiv.innerHTML = "<p>Merci ! Votre message a bien été envoyé.</p>";
// 		btClose.addEventListener("click", function () {
// 			formModal.removeChild(document.getElementById("validDiv"));
// 		});
// 		// btSubmits.forEach((btSubmit) => {
// 		// 	// btSubmit.setAttribute("type", "button");
// 		// 	// btSubmit.setAttribute("value", "Fermer");
// 		// 	// btSubmit.setAttribute("name", "button");
// 		// 	// btClose.setAttribute("name", "button");
// 		// });
// 	}

// 	/**
// 	 * Verification que tous les elements du tableau formDatas ont l'attribut "data-valid"
// 	 *
// 	 * @param   {Array}  formDatas  Tableau formDatas
// 	 *
// 	 * @return  {Boolean}             Tous les elements ont l'attribut "data-valid" => true;
// 	 */
// 	function verifDataValid(formDatas) {
// 		if (
// 			(
// 				formDatas[0] &&
// 				formDatas[1] &&
// 				formDatas[2] &&
// 				formDatas[3]
// 			).hasAttribute("data-valid")
// 		) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}

// 	function hideError(cible) {
// 		cible.removeAttribute("data-error-visible");
// 		cible.removeAttribute("data-error");
// 		cible.setAttribute("data-valid", "true");
// 	}
// 	function showError(cible, errorText) {
// 		cible.removeAttribute("data-valid");
// 		cible.setAttribute("data-error-visible", "true");
// 		cible.setAttribute("data-error", errorText);
// 	}

// 	function verifMessage(textArea) {
// 		textArea.addEventListener("input", function (e) {
// 			let textAreaValue = e.target.value.trim();
// 			let cible = textArea.parentNode;
// 			if (textAreaValue.length < 8) {
// 				showError(cible, "Veuillez entrer 8 caractéres minimum");
// 			} else {
// 				hideError(cible);
// 			}
// 		});
// 	}

// 	/**
// 	 * Vérification de la valeur entrée par l'utilisateur pour l'Email
// 	 *
// 	 * @param   {any}  inputEmail  Input Email
// 	 *
// 	 * @return  {void}              Affiche le message d'erreur si l'Email n'est pas valide
// 	 */
// 	function verifEmail(inputEmail) {
// 		inputEmail.addEventListener("input", function (e) {
// 			let value = e.target.value;
// 			let cible = inputEmail.parentNode;
// 			if (!emailRegex.test(value)) {
// 				showError(cible, "Veuillez entrez une adresse email valide");
// 			} else {
// 				hideError(cible);
// 			}
// 		});
// 	}

// 	/**
// 	 * Vérification des valeurs entrées par l'utilisateur pour le Nom et le Prénom
// 	 *
// 	 * @param   {any}  inputsTexts  Inputs de [type=text]
// 	 *
// 	 * @return  {void}              Affiche le message d'erreur si l'entrée n'est pas valide
// 	 */
// 	function verifNameAndSurname(inputsTexts) {
// 		inputsTexts.forEach((inputText) =>
// 			inputText.addEventListener("input", function (e) {
// 				let textValue = e.target.value.trim();
// 				let cible = inputText.parentNode;
// 				if (textValue.length < 2) {
// 					showError(cible, "Veuillez entrer 2 caractéres minimum");
// 				} else if (!firstLastRegex.test(textValue)) {
// 					showError(
// 						cible,
// 						"Veuillez entrez seulement des caractéres litterales"
// 					);
// 				} else {
// 					hideError(cible);
// 				}
// 			})
// 		);
// 	}

// 	/**
// 	 * Au clic sur la croix => Fermeture de form-modal
// 	 */
// 	btClose.addEventListener("click", function () {
// 		bground.removeAttribute("visible");
// 	});

// 	verifNameAndSurname(inputsTexts);
// 	verifEmail(inputEmail);
// 	verifMessage(textArea);
// 	submit(btSubmits, formDatas);
// }
export default class FormModal {
	constructor(domTarget, props) {
		this.name = props.name;

		this.DOM = document.createElement("div");
		this.DOM.classList.add("bground");
		this.DOM.style.display = "none";
		domTarget.appendChild(this.DOM);
		this.content = document.createElement("div");
		this.content.classList.add("content");
		this.DOM.appendChild(this.content);
		this.close = document.createElement("button");
		this.close.classList.add("close");
		this.close.type = "button";
		this.close.onclick = () => {
			this.closeFormContact();
		};
		this.content.appendChild(this.close);
		this.formModal = document.createElement("div");
		this.formModal.classList.add("form-modal");
		this.content.appendChild(this.formModal);
		this.h1 = document.createElement("h1");
		this.h1.innerHTML = `Contactez-moi<br>${this.name}`;
		this.formModal.appendChild(this.h1);
		console.log(this.DOM);
	}

	closeFormContact() {
		this.DOM.style.display = "none";
	}
}
