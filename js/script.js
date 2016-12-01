$(document).ready(function() {

	$("#diminuir").on('click', function(e) {
		e.preventDefault();
		decreaseFontSize();
	});

	$("#normal").on('click', function(e) {
		e.preventDefault();
		standardFontSize();
	});
	
	$("#aumentar").on('click', function(e) {
		e.preventDefault();
		increaseFontSize();
	});

});