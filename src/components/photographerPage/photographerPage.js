import Header from "../header/header";
import PhotographerMain from "../photographer-main/photographer-main";
import FormModal from "../form-modal/form-modal";

export default class PhotographerPage {
	constructor(domTarget, props) {
		this.tagsChecked = [];
		this.id = props.id;
		this.photographer = props.photographer;
		this.mediasChosen = props.mediasChosen;
		new Header(
			domTarget,
			null,
			this.tagsChecked,
			"header",
			"header-photographer"
		);
		new PhotographerMain(domTarget, {
			photographer: this.photographer,
			mediasChosen: this.mediasChosen,
			id: this.id,
		});
		new FormModal(domTarget, { name: this.photographer.name });
	}
}
