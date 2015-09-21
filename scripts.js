$(document).ready(function(){

	var playing = "";
	$(".music-btn").on("click", function(){
		var target = event.target;
		var musicSource = "";
		var targetId = $(target).parentsUntil(".music-board").last()[0].id;
		var slider = "#" + targetId + " .slider";
		if ($(target).parent().attr("class") !== "music-board") {
			musicSource = targetId;
		}
		else {
			musicSource = target.id;
		}
		var current = "#" + musicSource + " audio";
		if (playing === current){
			slideStop(slider);
			$(current)[0].pause();
			$(current)[0].currentTime = 0;
			playing = "";
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