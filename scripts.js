const flightDiv = document.getElementById("flightDiv");

function logFairings(item) {
	let launchDiv = document.createElement("div");
	launchDiv.classList.add("launchDiv");
	launchDiv.innerHTML = `
    <div loading="lazy">
        <img class="flightImg" src=${item.links.flickr.original[0]}>
    </div>
    <div loading="lazy" class="details">
        <p>Flight Number: ${item.flight_number}</p>
        <h2>Mission Name: ${item.name}</h2>
        <p>Flight Details: ${item.details}</p>
    </div>
    `;
	flightDiv.append(launchDiv);
}

fetch("https://api.spacexdata.com/v4/launches/")
	.then((res) => res.json())
	.then((data) => {
		// console.log(data[0].fairings);
		trimmedData = data.slice(13);
		trimmedData.forEach(logFairings);
	});
