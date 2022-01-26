/**
 * Composant formulaire de contact
 */
export default class FormModal {
	/**
	 * @param {{ appendChild: (arg0: HTMLDivElement) => void; }} domTarget
	 * @param {{ name: any; }} props
	 */
	constructor(domTarget, props) {
		this.name = props.name;
		this.DOM = document.createElement("div");
		this.DOM.classList.add("bground");
		domTarget.appendChild(this.DOM);
		this.content = document.createElement("div");
		this.content.classList.add("content");
		this.DOM.appendChild(this.content);
		this.insertBtClose();
		this.insertFormModal();
	}
	/**
	 * Insertion du formulaire
	 */
	insertFormModal() {
		this.formModal = document.createElement("div");
		this.formModal.classList.add("form-modal");
		this.content.appendChild(this.formModal);
		this.insertName();
		this.insertForm();
		this.createInput(
			"first",
			"Prénom",
			"text",
			"First name",
			this.name.slice(0, this.name.indexOf(" "))
		);
		this.createInput(
			"last",
			"Nom",
			"text",
			"Last name",
			this.name.slice(this.name.indexOf(" ") + 1, this.name.length)
		);
		this.createInput(
			"email",
			"Email",
			"email",
			"Email",
			this.name.replace(" ", "_") + "@photo.com"
		);
		this.createTextArea("message");
		this.insertBtSubmit("mobile");
		this.insertBtSubmit("desktop");
	}

	/**
	 * @param {string} screenSize
	 */
	insertBtSubmit(screenSize) {
		this.btSubmit = document.createElement("button");
		this.btSubmit.classList.add(
			"btContact",
			"btContact-" + screenSize,
			"btContact-" + screenSize + "-modal"
		);
		this.btSubmit.type = "submit";
		this.btSubmit.textContent = "Envoyer";
		this.btSubmit.setAttribute("aria-label", "Send");
		this.form.appendChild(this.btSubmit);
		this.btSubmit.onclick = (e) => {
			this.btSubmitManager(e);
		};
	}

	/**
	 * @param {MouseEvent} e
	 */
	btSubmitManager(e) {
		e.preventDefault();
		this.formChildrens = this.form.children;
		this.formDatas = [];
		for (let i = 0; i < this.formChildrens.length; i++) {
			let elm = this.formChildrens[i];
			if (elm.classList.contains("formData")) {
				this.formDatas.push(elm);
			}
		}
		if (this.verifDataValid(this.formDatas) === undefined) {
			const prenom = this.formDatas[0].children[1].value;
			const nom = this.formDatas[1].children[1].value;
			const email = this.formDatas[2].children[1].value;
			const message = this.formDatas[3].children[1].value;
			console.log(
				`Prenom: ${prenom}, Nom: ${nom}, Email: ${email}, Message: ${message}`
			);
			this.content.removeChild(this.formModal);
			this.validDiv = document.createElement("div");
			this.validDiv.classList.add("validDiv");
			this.validDiv.textContent =
				"Votre message a bien été envoyé à " + this.name;
			this.content.appendChild(this.validDiv);

			this.close.onclick = () => {
				this.closeFormContact();
				this.content.removeChild(this.validDiv);
				this.insertFormModal();
			};
		}
	}

	/**
	 * @param {string | any[]} formDatas
	 * @return {boolean} return true si aucune erreur
	 */
	verifDataValid(formDatas) {
		for (let i = 0; i < formDatas.length; i++) {
			const elm = formDatas[i];
			if (!elm.hasAttribute("data-valid")) {
				elm.setAttribute("data-error-visible", "true");
				return false;
			}
		}
	}

	/**
	 * @param {string} forClassIdNameValue
	 */
	createTextArea(forClassIdNameValue) {
		this.insertFormData();
		this.label = document.createElement("label");
		this.label.setAttribute("for", forClassIdNameValue);
		this.label.classList.add(forClassIdNameValue);
		this.label.textContent = "Votre message";
		this.formData.appendChild(this.label);
		this.textArea = document.createElement("textarea");
		this.textArea.classList.add("text-area", "text-control");
		this.textArea.id = forClassIdNameValue;
		this.textArea.name = forClassIdNameValue;
		this.textArea.rows = 10;
		this.textArea.cols = 38;
		this.textArea.placeholder = "Minimum: 8 caractéres";
		this.textArea.required = true;
		this.textArea.setAttribute("aria-required", "true");
		this.formData.appendChild(this.textArea);
		this.verifMessage();
	}
	/**
	 * Verification de la bonne saisie du message
	 */
	verifMessage() {
		this.textArea.oninput = (e) => {
			// @ts-ignore
			let textAreaValue = e.target.value.trim();
			let cible = this.textArea.parentElement;
			if (textAreaValue.length < 8) {
				this.showError(cible, "Veuillez entrer 8 caractéres minimum");
			} else {
				this.hideError(cible);
			}
		};
	}
	/**
	 * @param {string} forIdNameValue	 Valeur du "for", "id", "name" des elements
	 * @param {string} labelText			 Texte du "label"
	 * @param {string} inputType			 Attribut "type" de l'input
	 * @param {string} ariaLabel			 Attribut "aria-label" de l'element
	 * @param {string} placeholder	Attribut "placeholder"
	 */
	createInput(forIdNameValue, labelText, inputType, ariaLabel, placeholder) {
		this.insertFormData();
		this.label = document.createElement("label");
		this.label.setAttribute("for", forIdNameValue);
		this.label.textContent = labelText;
		this.formData.appendChild(this.label);
		this.input = document.createElement("input");
		this.input.classList.add("text-control");
		this.input.setAttribute("aria-label", ariaLabel);
		this.input.type = inputType;
		this.input.id = forIdNameValue;
		this.input.name = forIdNameValue;
		this.input.placeholder = placeholder;
		this.input.required = true;
		this.input.setAttribute("aria-required", "true");
		this.formData.appendChild(this.input);
		this.verifInput(inputType);
	}
	/**
	 * Verification saisie de l'input selon son type
	 *
	 * @param {string} inputType
	 */
	verifInput(inputType) {
		if (inputType === "text") {
			return this.verifNameSurname();
		}
		this.verifEmail();
	}
	verifNameSurname() {
		/**
		 * Regex (< 2 characters; Pas de chiffres)
		 */
		const firstLastRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
		this.input.oninput = (e) => {
			// @ts-ignore
			let textValue = e.target.value.trim();
			// @ts-ignore
			let cible = e.target.parentNode;
			if (textValue.length < 2) {
				console.log(-2);
				this.showError(cible, "Veuillez entrer 2 caractéres minimum");
			} else if (!firstLastRegex.test(textValue)) {
				this.showError(
					cible,
					"Veuillez entrez seulement des caractéres litterales"
				);
			} else {
				this.hideError(cible);
			}
		};
		return;
	}
	verifEmail() {
		/**
		 * Regex de vérification d'email
		 */
		const emailRegex =
			/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/; // Vérification d'email
		this.input.oninput = (e) => {
			// @ts-ignore
			let textValue = e.target.value.trim();
			// @ts-ignore
			let cible = e.target.parentNode;
			if (!emailRegex.test(textValue)) {
				this.showError(cible, "Veuillez entrez une adresse email valide");
			} else {
				this.hideError(cible);
			}
		};
	}

	/**
	 * @param {HTMLElement} cible	Element avec erreur
	 * @param {string} errorText	Texte correspondant à l'erreur
	 */
	showError(cible, errorText) {
		cible.removeAttribute("data-valid");
		cible.setAttribute("data-error-visible", "true");
		cible.setAttribute("data-error", errorText);
	}

	/**
	 * @param {HTMLElement} cible		Element sans erreur
	 */
	hideError(cible) {
		cible.removeAttribute("data-error-visible");
		cible.removeAttribute("data-error");
		cible.setAttribute("data-valid", "true");
	}
	/**
	 * Insertion div "formData" qui est le container de chaque input/textArea
	 */
	insertFormData() {
		this.formData = document.createElement("div");
		this.formData.classList.add("formData");
		this.form.appendChild(this.formData);
	}
	/**
	 * Insertion de la balise form
	 */
	insertForm() {
		this.form = document.createElement("form");
		this.form.name = "reserve";
		this.form.action = "index.html";
		this.form.method = "get";
		this.formModal.appendChild(this.form);
	}
	/**
	 * Insertion du nom
	 */
	insertName() {
		this.h1 = document.createElement("h1");
		this.h1.innerHTML = `Contactez-moi<br>${this.name}`;
		this.formModal.appendChild(this.h1);
	}
	/**
	 * Affichage du bouton de fermeture (croix)
	 */
	insertBtClose() {
		this.close = document.createElement("button");
		this.close.classList.add("close");
		this.close.type = "button";
		this.close.title = "Close Contact form";
		this.close.onclick = () => {
			this.closeFormContact();
		};
		this.content.appendChild(this.close);
	}
	/**
	 * Gestion du bouton close (croix)
	 */
	closeFormContact() {
		this.DOM.removeAttribute("visible");
		this.DOM.parentElement.style.overflow = "auto";
		this.reactivBackgroundBoutons();
	}
	/**
	 * Réactivation des boutons d'arriére plan du formulaire lors de sa fermeture
	 */
	reactivBackgroundBoutons() {
		this.buttons = document.querySelectorAll("button");
		for (let i = 0; i < this.buttons.length; i++) {
			const elm = this.buttons[i];
			elm.removeAttribute("disabled");
		}
		this.widgetLabel = document.getElementById("select");
		this.widgetLabel.setAttribute("tabindex", "0");
	}
}
