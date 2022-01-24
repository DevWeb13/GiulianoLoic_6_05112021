let data;
let photographer;
let mediasChosen = [];
async function fetchPhotographers() {
	const res = await fetch("./data/FishEyeData.json");
	data = await res.json();
	return data.photographers;
}

/**
 * @param {any} id
 */
async function fetchChosenPhotographer(id) {
	await fetchPhotographers();
	data.photographers.forEach((data) => {
		if (data.id == id) {
			photographer = data;
		}
	});
	return photographer;
}

/**
 * @param {any} id
 */
async function fetchChosenMedia(id) {
	const res = await fetch("./data/FishEyeData.json");
	data = await res.json();
	data.media.forEach((data) => {
		if (data.photographerId == id) {
			mediasChosen.push(data);
		}
	});
	return mediasChosen;
}

export { fetchChosenMedia, fetchPhotographers, fetchChosenPhotographer };
