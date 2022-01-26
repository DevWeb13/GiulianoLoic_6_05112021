import Header from "../header/header";
import BtContact from "../btContact/btContact";
import MainLobby from "..//main-lobby/main-lobby";

export default class Index {
	constructor(domTarget, props) {
		this.photographers = props.photographers;
		this.tagsChecked = [];
		this.url = new URL(window.location.href);
		this.tag = this.url.searchParams.get("tag");
		if (this.tag) {
			this.tagsChecked.push("#" + this.tag);
		}
		new Header(domTarget, this.photographers, this.tagsChecked, "header");
		new BtContact(domTarget, {
			className: "goToContent",
			className2: null,
			type: "button",
			text: "Passer au contenu",
			name: "",
		});
		new MainLobby(domTarget, {
			photographers: this.photographers,
			tagsChecked: this.tagsChecked,
		});
	}
}
