	$(document).ready(function(){
		$('.slider').slider({full_width: false, height:250});
		$(".button-collapse").sideNav();
		$('.dropdown-button').dropdown({
			inDuration: 300,
			outDuration: 225,
			constrain_width: true, // Does not change width of dropdown to that of the activator
			hover: true, // Activate on hover
			gutter: 0, // Spacing from edge
			belowOrigin: false // Displays dropdown below the button
		});
		$('.openBox').materialbox();
	})	