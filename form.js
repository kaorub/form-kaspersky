document.addEventListener("DOMContentLoaded", function(event) { 
	var json = {
		"languages": [
			{
				"name": "ru",
				"text": "Приветственная кнопка",
				"rtl": false
			}, {
				"name": "en",
				"text": "Greeting",
				"rtl": false
			}, {
				"name": "he",
				"text": "היי",
				"rtl": true
			}
		]
	}
	var button = document.getElementById('button');
	var button_style = document.getElementById('button').style;
	var languages = json.languages;
	for (var i=0; i<languages.length; i++) {
		button.innerHTML = languages.text
		if (languages[i].rtl) {
			button_style.direction = "rtl";
		}
		// setTimeOut(3000);
	}
});