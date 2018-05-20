
//global final recognition
var finalTranscripts = '';

var r = document.getElementById('result');

	if('webkitSpeechRecognition' in window){
		var speechRecognizer = new webkitSpeechRecognition();
		speechRecognizer.continuous = true;
		speechRecognizer.interimResults = true;
		//language
		speechRecognizer.lang = 'de-DE';
		speechRecognizer.start();

		speechRecognizer.onresult = function(event){
			var interimTranscripts = '';
			finalTranscripts = '';
			for(var i = event.resultIndex; i < event.results.length; i++){
				var transcript = event.results[i][0].transcript;
				if(event.results[i].isFinal){
					finalTranscripts += transcript;
				}else{
					interimTranscripts += transcript;
				}
			}

			//make Answer in other js file
			makeAnswer();
		};
			speechRecognizer.onerror = function (event) {
		};
		
		//browser doesnt support
		}else{
			console.log("outdated browser please update");
		}



			
