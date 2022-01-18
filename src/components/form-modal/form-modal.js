export default class FormModal {
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

	insertFormModal() {
		this.formModal = document.createElement("div");
		this.formModal.classList.add("form-modal");
		this.content.appendChild(this.formModal);
		this.insertName();
		this.insertForm();
		this.createInput("first", "Prénom", "text");
		this.createInput("last", "Nom", "text");
		this.createInput("email", "Email", "email");
		this.createTextArea("message");
		this.insertBtSubmit("mobile");
		this.insertBtSubmit("desktop");
	}

	insertBtSubmit(screenSize) {
		this.btSubmit = document.createElement("button");
		this.btSubmit.classList.add(
			"btContact",
			"btContact-" + screenSize,
			"btContact-" + screenSize + "-modal"
		);
		this.btSubmit.type = "submit";
		this.btSubmit.textContent = "Envoyer";
		this.form.appendChild(this.btSubmit);
		this.btSubmit.onclick = (e) => {
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
				console.log(this.formDatas);

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
					"Votre méssage a bien été envoyé à " + this.name;
				this.content.appendChild(this.validDiv);

				this.close.onclick = () => {
					this.closeFormContact();
					this.content.removeChild(this.validDiv);
					this.insertFormModal();
				};
			} else {
				// alert("Veuillez remplir correctement le formulaire");
			}
		};
	}

	verifDataValid(formDatas) {
		for (let i = 0; i < formDatas.length; i++) {
			const elm = formDatas[i];
			if (!elm.hasAttribute("data-valid")) {
				elm.setAttribute("data-error-visible", "true");
				return false;
			}
		}
	}

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
		this.formData.appendChild(this.textArea);
		this.verifMessage();
	}

	verifMessage() {
		this.textArea.oninput = (e) => {
			let textAreaValue = e.target.value.trim();
			let cible = this.textArea.parentNode;
			if (textAreaValue.length < 8) {
				this.showError(cible, "Veuillez entrer 8 caractéres minimum");
			} else {
				this.hideError(cible);
			}
		};
	}

	createInput(forIdNameValue, labelText, inputType) {
		this.insertFormData();
		this.label = document.createElement("label");
		this.label.setAttribute("for", forIdNameValue);
		this.label.textContent = labelText;
		this.formData.appendChild(this.label);
		this.input = document.createElement("input");
		this.input.classList.add("text-control");
		this.input.type = inputType;
		this.input.id = forIdNameValue;
		this.input.name = forIdNameValue;
		this.formData.appendChild(this.input);
		this.verifInput(inputType);
	}

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

	showError(cible, errorText) {
		cible.removeAttribute("data-valid");
		cible.setAttribute("data-error-visible", "true");
		cible.setAttribute("data-error", errorText);
	}

	hideError(cible) {
		cible.removeAttribute("data-error-visible");
		cible.removeAttribute("data-error");
		cible.setAttribute("data-valid", "true");
	}

	insertFormData() {
		this.formData = document.createElement("div");
		this.formData.classList.add("formData");
		this.form.appendChild(this.formData);
	}

	insertForm() {
		this.form = document.createElement("form");
		this.form.name = "reserve";
		this.form.action = "index.html";
		this.form.method = "get";
		this.formModal.appendChild(this.form);
	}

	insertName() {
		this.h1 = document.createElement("h1");
		this.h1.innerHTML = `Contactez-moi<br>${this.name}`;
		this.formModal.appendChild(this.h1);
	}

	insertBtClose() {
		this.close = document.createElement("button");
		this.close.classList.add("close");
		this.close.type = "button";
		this.close.onclick = () => {
			this.closeFormContact();
		};
		this.content.appendChild(this.close);
	}

	closeFormContact() {
		this.DOM.removeAttribute("visible");
		this.DOM.parentElement.style.overflow = "auto";
		this.reactivBackgroundBoutons();
	}

	reactivBackgroundBoutons() {
		this.buttons = document.querySelectorAll("button");
		for (let i = 0; i < this.buttons.length; i++) {
			const elm = this.buttons[i];
			console.log(elm);
			elm.removeAttribute("disabled");
		}
		this.widgetLabel = document.getElementById("select");
		this.widgetLabel.setAttribute("tabindex", "0");
	}
}
