const tubelight = () => {

	let title = document.getElementById("bublconditon");
	
	for( x=1; x < 6; x++) {
		let bulb = document.getElementById('light'.concat(x));
		
		if (bulb.src.match("bulb_off.jpg")){
			bulb.src = "bulb_on.jpg";
			title.innerHTML = "Light On";
			title.style.color = "red"

		}else {
			bulb.src = "bulb_off.jpg";
			title.innerHTML = "Light Off"
			title.style.color = "black"
		}
	}
}
	