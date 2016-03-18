var checkbox = $( "input:checkbox" );
var radioState = false;
var spinning = false;

$(".turn-on-off").on('click', function() {

		if(checkbox.prop("checked") === false) {
			radioState = true;
			$("audio").trigger("play");
			$(".left-bass").toggleClass( "scaled" );
			$(".right-bass").toggleClass( "scaled" );
		}
		else {
			radioState = false;
			$("audio").trigger("pause");
			$(".left-bass").toggleClass( "scaled" );
			$(".right-bass").toggleClass( "scaled" );
		}
});


function changeSrc(mySource) {
	var radios = document.querySelectorAll('.radio');
	for (var i = 0; i < radios.length; i++){
		if(radios[i].className.indexOf('active') != -1){
			radios[i].classList.remove('active');
		}
	}

	mySource.className += " active";
	var newpos = $(mySource).data("pos");

	$(".counterline").css("left", newpos);

	if (radioState === false) {
		var newsrc = $(mySource).data("src");

		$("source").attr("src", newsrc);
		$("audio").trigger("pause");
    	$("audio").load();
	}
	else {

		var newsrc = $(mySource).data("src");

		$("source").attr("src", newsrc);
		$("audio").trigger("pause");
    	$("audio").load();
    	$("audio").oncanplaythrough = $("audio").trigger("play");
	}
}

$(".spin").on('click', function() {
	$(".view").toggleClass("spinner");

	if(spinning === false) {
		$(".spin").html("STOP SPINNING");
		spinning = true;
	}
	else {
		$(".spin").html("MAKE ME SPIN");
		spinning = false;
	}
});