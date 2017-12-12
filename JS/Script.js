<!DOCTYPE .html>
<html>
<head>
	<title>JS Rockets</title>
	<script type="text/javascript">
		var sayMyName = function (name) {
			alert('My name is: ' +name);
		}
		var car = {
			make: 'VW',
			type: 'Polo',
			colour: 'Blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats:[
				'seat1',
				'seat2',
				'seat3',
				'seat4'
			],
			turnOn: function () {
				this.isTurnedOn = true;
			},
			fly: function () {
				alert ('fly')
			},
			switchCar:function (isOn) {
				console.log ('turn car' + isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			}
		};		
	console.log('hello there friends!');
</script>
</head>
<body>

</body>
<h1>Hello JS Rockets</h1>
</html>