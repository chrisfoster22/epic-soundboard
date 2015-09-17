$(document).ready(function(){

	var playing = "";
	$(".music-btn").on("click", function(){
		var current = "#" + event.target.id + " audio";
		if (playing === current){
			$(current)[0].pause();
			$(current)[0].currentTime = 0;
			playing = "";
		}
		else {
			$(current)[0].play();
			playing = current;
		}
	});
	
});