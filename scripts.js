$(document).ready(function(){

	var playing = "";
	$(".music-btn").on("click", function(){
		var target = event.target;
		var musicSource = "";
		if ($(target).parent().attr("class") !== "music-board") {
			musicSource = $(target).parentsUntil(".music-board").last()[0].id;
		}
		else {
			musicSource = target.id;
		}
		var slider = "#" + musicSource + " .slider";
		var current = "#" + musicSource + " audio";
		if (playing === current){
			slideStop(slider);
			$(current)[0].pause();
			$(current)[0].currentTime = 0;
			playing = "";
		}
		else if (playing != "" && playing !=current) {
			$(playing)[0].pause();
			$(playing)[0].currentTime = 0;
			var playingSlider = $(playing).siblings()[0].children[0];
			slideStop(playingSlider);
			$(current)[0].play();
			playing = current;
			slidePlay(slider);
		}
		else {
			slidePlay(slider);
			$(current)[0].play();
			playing = current;
		}
	});
	
});

var slidePlay = function(slider) {
	$(slider).animate({
		marginLeft: "+=72"
	}, 500);
}

var slideStop = function(slider) {
	$(slider).animate({
		marginLeft: "-=72"
	}, 500);
}