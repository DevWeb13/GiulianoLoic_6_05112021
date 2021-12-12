let data;

async function fetchPhotographers() {
	const res = await fetch("./data/FishEyeData.json");
	data = await res.json();
	return data.photographers;
}

export { fetchPhotographers };
