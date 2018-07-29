
		function allowDrop(ev) {
		
    ev.preventDefault();
	
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
	
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
		var aud3 = new Audio();
		aud3.src = 'sounds/yes.mp3';
		aud3.play();
	document.getElementsByClassName("next")[0].disabled=false;
		
	

}

	