$('.carousel').carousel({
  interval: 5000,
  pause: 'off'
})


var paused = false;

$('.carousel').click(function() {
	if (paused) {
		$( ".carousel" ).carousel('cycle');
		paused = false;
	}
	else {
		$( ".carousel" ).carousel('pause');
		paused = true;
	}
});