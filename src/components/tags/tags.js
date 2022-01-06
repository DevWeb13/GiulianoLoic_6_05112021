import MainLobby from "../main-lobby/main-lobby";

export default class Tags {
	constructor(
		domTarget,
		photographers,
		tag,
		className,
		className2,
		tagsChecked
	) {
		this.photographers = photographers;
		this.tag = tag;
		this.className = [className];
		if (className2) {
			this.className.push(className2);
		}
		this.tagsChecked = tagsChecked;
		this.DOM = document.createElement("button");
		this.className.forEach((newClass) => {
			this.DOM.classList.add(newClass);
		});
		this.DOM.textContent = "#" + this.tag;
		domTarget.appendChild(this.DOM);
		this.DOM.onclick = () => this.tagsManage(this.DOM);
		this.addDisabled(this.DOM);
	}

	tagsManage(element) {
		this.tagsCheckedManager(element);
		this.pagesManager();
	}

	pagesManager() {
		if (window.location.pathname.split("/").pop() == "") {
			const body = document.querySelector("body");
			if (document.querySelector("main")) {
				body.removeChild(document.querySelector("main"));
			}
			new MainLobby(body, {
				photographers: this.photographers,
				tagsChecked: this.tagsChecked,
			});
		} else {
			window.location.href = "?tag=" + this.tag;
		}
	}

	tagsCheckedManager(element) {
		if (!element.hasAttribute("isChecked")) {
			element.setAttribute("isChecked", "true");
			this.tagsChecked.push(element.innerHTML);
		} else {
			element.removeAttribute("isChecked");
			this.tagsChecked.splice(this.tagsChecked.indexOf(element.innerHTML), 1);
		}
	}

	addDisabled(button) {
		if (this.className.length === 1) {
			button.disabled = true;
		}
	}
}
