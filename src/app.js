// import Header from "./components/header/header";
// import PhotographerCard from "./components/photographer-card/photographer-card";
// import FilterLink from "./components/filterLink/filterLink";
// // const { util } = require("webpack");

// // import Widget from "./components/widget/widget";
// // import FormModal from "./components/form-modal/form-modal";
// // import BtContact from "./components/btContact/btContact";

// let photographers = [];
// async function fetchPhotographers() {
// 	await fetch("./data/FishEyeData.json")
// 		.then((res) => res.json())
// 		.then((data) => (photographers = data.photographers));
// 	console.log(photographers);
// }
// // fetchPhotographers();
// /**
//  * Affichage de chaque description de photographe
//  *
//  * @param   {array}  photographers  Données des photographes
//  *
//  * @return  {promise}      Affichage de chaque description de photographe
//  */
// async function displayPhotographersDescriptions(photographers) {
// 	photographers
// 		.map((photographer) => {
// 			new PhotographerCard(document.body, {
// 				articleClassName: "photographer-card",
// 				btClassName: "photographer-card-link",
// 				imgLink: "./img/PhotographersIDPhotos/" + photographer.portrait,
// 				photoClassName: photographer.name.replace(" ", "_").toLowerCase(),
// 				nom: photographer.name,
// 				location: photographer.city + ", " + photographer.country,
// 				tagline: photographer.tagline,
// 				price: photographer.price + "€/jour",
// 				tags: photographer.tags,
// 				id: photographer.id,
// 			});
// 		})
// 		.join(" ");
// }

// new Header(document.body, { className: "header" });
// fetchPhotographers().then(() =>
// 	displayPhotographersDescriptions(photographers)
// );

// const tags = new FilterLink(document.querySelector("nav-card"), "prout");
// tags.render();
/* ******************************************************************************************************************************************************** */
const header = document.querySelector("header");
const main = document.querySelector("main");

let photographers = [];
// let photographersArray = [];
class photographerCard {
	constructor(name, id, city, country, tags, tagline, price, portrait) {
		this.name = name;
		this.id = id;
		this.city = city;
		this.country = country;
		this.tags = tags;
		this.tagline = tagline;
		this.price = price;
		this.portrait = portrait;
	}
}

const utils = {
	pageContent: function (headers, mains) {
		header.innerHTML = headers;
		main.innerHTML = mains;
	},

	fetchPhotographers: async function () {
		await fetch("./data/FishEyeData.json")
			.then((res) => res.json())
			.then((data) => (photographers = data.photographers));
	},

	deleteUndefinedTags: async function () {
		let tags = document.querySelectorAll(".filterLink");
		tags.forEach((tag) => {
			console.log(tag.innerHTML);
			if (tag.innerHTML === "#undefined") {
				tag.remove();
			}
		});
	},
};

const views = {
	lobby: async function () {
		await utils.fetchPhotographers();
		let photographersArray = photographers
			.map(
				(photographer) => /* html */ `
					<article class="photographer-card">
						<button class="photographer-card-link" onclick="this.photographer()" >
							<div class="photographer-card-link-imgContainer">
								<img src="./img/PhotographersIDPhotos/${photographer.portrait}" alt="" cover />
							</div>
							<h2>
							${photographer.name}
							</h2>
						</button>
						
						<p class="location">
							${photographer.country}, ${photographer.city}
						</p>
						<p class="tagline tagline_photographerPages">
							${photographer.tagline}
						</p>
						<p class="price">
							${photographer.price}
						</p>
						<nav>
							<button href="#" class="filterLink">#${photographer.tags[0]}</button>
							<button href="#" class="filterLink">#${photographer.tags[1]}</button>
							<button href="#" class="filterLink">#${photographer.tags[2]}</button>
							<button href="#" class="filterLink">#${photographer.tags[3]}</button>
						</nav>
					</article>
			`
			)
			.join("");

		utils.pageContent(
			/* html */ `
    <button class="logo" title="logo" onclick= this.lobby >
      <img src=" ./img/logo/logo.svg" alt="logo">
    </button>
    <button href="#" class="photographersLink">Nos photographes</button>
		<nav class="indexNav">
		<button href="#" class="filterLink">#Art</button>
		<button href="#" class="filterLink">#Fashion</button>
		<button href="#" class="filterLink">#Architecture</button>
		<button href="#" class="filterLink">#Travel</button>
		<button href="#" class="filterLink">#Sport</button>
		<button href="#" class="filterLink">#Animals</button>
		<button href="#" class="filterLink">#Events</button>
		<button href="#" class="filterLink">#Portrait</button>
		</nav>
  `,
			photographersArray
		);

		utils.deleteUndefinedTags();
	},

	photographer: function () {
		utils.pageContent(
			/* html */ `
    <button class="logo" title="logo" onclick=this.lobby>
      <img src=" ./img/logo/logo.svg" alt="logo">
    </button>`,
			"main"
		);
	},

	lightbox: function () {
		utils.pageContent(null, "main");
	},

	formModal: function () {
		utils.pageContent(null, "main");
	},
};

views.lobby();
