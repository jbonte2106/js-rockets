var timer = null;

var changeState = function  (state) {
	document.body.className = 'body-state'+
		state; 

		if (state == 2) {
			timer = setInterval(function ()  {

		}, 1000);
			document.getElementById('countdown')
				innerHTML = 9;
		;
}}