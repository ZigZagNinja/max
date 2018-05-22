
//variables
//kreisberechnung
let kreisbr = 0;
let startVonBr = 0;
let nummer;
let radius;
let durchmesser;
let umfang;
let flächeninhalt;
let uhrreplace;

//countdown
let shouldCountdown = 0;
let countdownFrom;

//reminder
let shouldRemind = 0;
var minsNumber;

//aufschreiben
let aufschreiben = 0;

//allowed to restart
let allowedToRestart = 1;


//konsolenbutton
function konsolenEingabe(){finalTranscripts = "konsoleneingabe"; makeAnswer();}


function makeAnswer(){


	let lowFinalTranscripts = finalTranscripts.toLowerCase();

	if(lowFinalTranscripts !== ''){
		console.log("lowFinalTranscripts  "+lowFinalTranscripts);
		//lowFinalTranscripts.replace(/\s/, '');

		//initialize
		if(lowFinalTranscripts === "max" || lowFinalTranscripts === " max"){answer = 'Wie kann ich helfen?'; sayAnswer(answer);}


		//console
		else if(lowFinalTranscripts.includes("konsolen eingabe") || lowFinalTranscripts.includes("konsoleneingabe")){
			let promt = prompt("eingabe?", "max");
		    if (promt == null || promt == "") {
		        sayAnswer("fehler");
		    }else{
		            lowFinalTranscripts = promt;
		    }
		}

		//weather
		else if(lowFinalTranscripts.includes("wetter")){
			let city = lowFinalTranscripts.replace("wetter ", "");

			//get rid of spacebar at front
			city = city.replace(/\s/, '');

			function getWeather(city){
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function(){
					if(this.readyState == 4 && this.status == 200){
						//response in javascript not Json
						let response = JSON.parse(xhttp.responseText);

						//degrees celcius
						let celcius = Math.floor(Number(response.list[0].main.temp))-273;
						let rain = response.list[0].weather[0].description;


						//answer
						let rainMessage;
						if(rain.includes("rain")){rainMessage = " und es regnet";}else{rainMessage = " und es regnet nicht"}
						answer = "In "+city+" sind es "+celcius+" grad celsius"+rainMessage;
						sayAnswer(answer);
					}
				}
				xhttp.open("GET", "http://api.openweathermap.org/data/2.5/find?q="+city+"&appid=4fc754d8203ce8d87e71e5f473929967", true);
				xhttp.send();
			}
			getWeather(city);
		}//weather end




		//kreisberechnung start
		else if(lowFinalTranscripts.includes("kreis berechn") || lowFinalTranscripts.includes("kreisberechnung")){
			kreisbr = 1;
			sayAnswer("Was hast du gegeben?");
			allowedToRestart = 0;
		}
		else if(lowFinalTranscripts.includes("radius") && kreisbr === 1 && startVonBr === 0){sayAnswer("wie ist der wert?"); startVonBr = 1;}
		else if(lowFinalTranscripts.includes(" durchmesser") && kreisbr === 1 && startVonBr === 0){sayAnswer("wie ist der wert?"); startVonBr = 2;}
		else if(lowFinalTranscripts.includes(" umfang") && kreisbr === 1 && startVonBr === 0){sayAnswer("wie ist der wert?"); startVonBr = 3;}
		else if(lowFinalTranscripts.includes(" flächeninhalt") && kreisbr === 1 && startVonBr === 0){sayAnswer("wie ist der wert?"); startVonBr = 4;}

		if(kreisbr === 1){
			switch(startVonBr){
				case 1:
					//radius given
					//debug
					if(lowFinalTranscripts.includes("uhr")){uhrreplace = lowFinalTranscripts.replace("uhr", ""); console.log(uhrreplace);nummer = Number(uhrreplace);}
					else{
						nummer = Number(lowFinalTranscripts);
					}
					if(isNaN(nummer)){}else{
						radius = nummer;
						durchmesser = Math.floor(radius*2);
						umfang = Math.floor(Math.PI*durchmesser);
						flächeninhalt = Math.floor(Math.PI*(radius*radius));

						sayAnswerSlow("der durchmesser beträgt "+durchmesser+"der umfang beträgt "+umfang+"der flächeninhalt beträgt "+flächeninhalt);

						//initialize for next use
						kreisbr = 0;
						startVonBr = 0;
						allowedToRestart = 1;
					}
				break;
				case 2:
					//durchmesser given
					//debug
					if(lowFinalTranscripts.includes("uhr")){uhrreplace = lowFinalTranscripts.replace("uhr", ""); console.log(uhrreplace);}

					nummer = Number(uhrreplace);
					if(isNaN(nummer)){}else{
						durchmesser = nummer;
						radius = Math.floor(durchmesser/2);
						umfang = Math.floor(Math.PI*durchmesser);
						flächeninhalt = Math.floor(Math.PI*(radius*radius));

						sayAnswerSlow("der radius beträgt "+radius+"der umfang beträgt "+umfang+"der flächeninhalt beträgt "+flächeninhalt);

						//initialize for next use
						kreisbr = 0;
						startVonBr = 0;
						allowedToRestart = 1;
					}
				break;
				case 3:
					//umfang given
					//debug
					if(lowFinalTranscripts.includes("uhr")){uhrreplace = lowFinalTranscripts.replace("uhr", ""); console.log(uhrreplace);}

					nummer = Number(uhrreplace);
					if(isNaN(nummer)){}else{
						umfang = nummer;
						durchmesser = Math.floor(umfang/Math.PI);
						radius = Math.floor(durchmesser/2);
						flächeninhalt = Math.floor(Math.PI*(radius*radius));

						sayAnswerSlow("der radius beträgt "+radius+"der durchmesser beträgt "+durchmesser+"der flächeninhalt beträgt "+flächeninhalt);

						//initialize for next use
						kreisbr = 0;
						startVonBr = 0;
						allowedToRestart = 1;
					}
				break;
				case 4:
					//umfang given
					//debug
					if(lowFinalTranscripts.includes("uhr")){uhrreplace = lowFinalTranscripts.replace("uhr", ""); console.log(uhrreplace);}

					nummer = Number(uhrreplace);
					if(isNaN(nummer)){}else{
						flächeninhalt = nummer;
						radius = Math.floor(Math.sqrt(flächeninhalt/Math.PI));
						durchmesser = Math.floor(radius*2);
						umfang = Math.floor(Math.PI*durchmesser);

						sayAnswerSlow("der radius beträgt "+radius+"der durchmesser beträgt "+durchmesser+"der umfang beträgt "+umfang);

						//initialize for next use
						kreisbr = 0;
						startVonBr = 0;
						allowedToRestart = 1;
					}
			}
		}//kreisberechnung end


		//münze werfen 
		if(lowFinalTranscripts.includes("münze")){if(Math.floor(Math.random()*100) > 50){sayAnswer("Es ist Zahl");}else{sayAnswer("Es ist kopf");}}


		//wlan passwort
		else if(lowFinalTranscripts.includes("internet passwort") || lowFinalTranscripts.includes("wlan passwort")){allowedToRestart = 0; sayAnswerSlow("78948689112362167665"); allowedToRestart = 1;}


		//countdown start
		else if(lowFinalTranscripts.includes("runterzähl")){
			sayAnswer("wie lange?");
			shouldCountdown = 1;
			allowedToRestart = 0;
		}
		if(shouldCountdown === 1){
			if(lowFinalTranscripts.includes("sekunden")){
				let time = lowFinalTranscripts.replace("sekunden", "")
				let sekunden = Number(time);

				var countdowninterval = setInterval(function(){
					if(sekunden >= 0){
						sayAnswerFast(sekunden);
						sekunden--;
					}else{sayAnswer("fertig"); clearInterval(countdowninterval);}
					
				},1000);
				
				shouldCountdown = 0;
				allowedToRestart = 1;
			}
		}//countdown end


		//reload
		if(lowFinalTranscripts.includes("neu start") || lowFinalTranscripts.includes("neustart")){sayAnswer("");location.reload();}


		//wikipedia search
		else if(lowFinalTranscripts.includes("wikipedia")){
			let searchFor;
			if(lowFinalTranscripts.includes("schreiben")){
			    var wikSearch = prompt("Bitte Suchbegriff eingeben:", "dog");
			    if (wikSearch == null || wikSearch == "") {
			       	sayAnswer("fehler");
			    } else {
			        searchFor = wikSearch;
			    }
			}else{
				searchFor = lowFinalTranscripts.replace("wikipedia","");
			}


			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(this.readyState == 4 && this.status == 200){
					let response = JSON.parse(xhttp.responseText);

					let description = response.extract

					sayAnswer("nur verfügbar auf englisch, wechsele zu englisch")
					sayAnswerEng(description);
				}
			}
				xhttp.open("GET", "https://en.wikipedia.org/api/rest_v1/page/summary/"+searchFor, true);
				xhttp.send();
		}//wikipedia end


		//danke
		else if(lowFinalTranscripts.includes("dank")){sayAnswer("gerne doch")}
	

		//remember me in minutes
		else if(lowFinalTranscripts.includes("erinnere mich in")){
			let mins = lowFinalTranscripts.replace("erinnere mich in", "");
			mins = mins.replace("minuten", "");
			//get rid of spaces
			mins = mins.replace(/\s/g, '');
			//convert to seconds
			mins = mins + "000";
			//number
			minsNumber = Number(mins);
			//convert to minutes
			minsNumber = minsNumber * 60;

			sayAnswer("an was soll ich dich erinnern?")
			shouldRemind = 1;
			allowedToRestart = 0;
		}
		if(shouldRemind === 1){
			if(!lowFinalTranscripts.includes("erinnere mich in")){
				let shouldRemindOf = lowFinalTranscripts;
				setTimeout(function(){sayAnswer("Ich sollte dich an das hier erinnern,"+shouldRemindOf); allowedToRestart = 1;},minsNumber);
				shouldRemind = 0;
			}
		}//reminder end


		//twitch api
		if(lowFinalTranscripts.includes("twitch")){
			let streamer
			if(lowFinalTranscripts.includes("schreiben")){
			    var person = prompt("Bitte streamer eingeben:", "Ninja");
			    if (person == null || person == "") {
			       	sayAnswer("fehler");
			    } else {
			        streamer = person;
			    }
			}else{
				streamer = lowFinalTranscripts.replace("twitch", "");
				streamer = streamer.replace(/\s/g,"");
			}

			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(this.readyState == 4 && this.status == 200){
					//response in javascript not Json
					var response = JSON.parse(xhttp.responseText);

					if(response.stream === null){
						sayAnswer(streamer+" ist nicht online");
					}else{
						sayAnswer(streamer+" ist online");
					}
				}
			}
			xhttp.open("GET", "https://wind-bow.glitch.me/twitch-api/streams/"+ streamer, true);
			xhttp.send();
		}//twitch api end


		//frog gif
		else if(lowFinalTranscripts.includes("frösche")){
			sayAnswer("Ich hoffe du bist zufrieden.")
			for(let i = 1; i<50; i++){
				var docs = document.getElementById("f"+i);
				docs.setAttribute("src", "images/frog.gif");
			}	
		}//frog end


		//music 
		else if(lowFinalTranscripts.includes("musik")){
			let titel;
			allowedToRestart = 0;

			let allOptions = ["donner", "gemacht", "kontrolle", "nervig", "nummer", "schulden", "wir werden dich rocken", "rap god", "kranker junge"];

			if(lowFinalTranscripts.includes("zufällig") || lowFinalTranscripts.includes("zufall")){
				titel = allOptions[Math.floor(Math.random()*allOptions.length)];
				titel = titel.replace(/\s/g,"");
				var audio = new Audio("sounds/musik/"+titel+".mp3");
				audio.play();
			}
			else if(lowFinalTranscripts.includes("optionen")){
				for(let i = 0; allOptions.length>i; i++){
					sayAnswer(allOptions[i]);
				}
			}else{
				if(lowFinalTranscripts.includes("schreiben")){
			    	let promt = prompt("Bitte Lied eingeben:", "you owe me");
			    if (promt == null || promt == "") {
			       	sayAnswer("fehler");
			    } else {
			        titel = promt;
			    }
				}else{
					titel = lowFinalTranscripts.replace("musik", "");
					titel = titel.replace(/\s/g,"");
				}

				var audio = new Audio("sounds/musik/"+titel+".mp3");
				audio.play();
				}
		}


		//synonyms
		else if(lowFinalTranscripts.includes("synonyme für")){
			allowedToRestart = 0;
			let word = lowFinalTranscripts.replace("synonyme für", "")
			if(word.includes("was sind")){
				word = word.replace("was sind", "");
			}
			word = word.replace(/\s/g, "");

			let xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(this.readyState == 4 && this.status == 200){
					let response = JSON.parse(xhr.responseText);

					let firstLoop = 0;
					while(response.synsets[0].terms.length > firstLoop){
						sayAnswer(response.synsets[0].terms[firstLoop].term);
						firstLoop++;
					}
					if(firstLoop >= response.synsets[0].terms.length){
						var secondLoop = 0;
						while(response.synsets[1].terms.length > secondLoop){
							sayAnswer(response.synsets[1].terms[secondLoop].term)
							secondLoop++;
						}
						if(secondLoop >= response.synsets[1].terms.length){secondLoop = 0; firstLoop = 0; allowedToRestart = 1;}
					}
					

				}
			}
				xhr.open("GET", "https://www.openthesaurus.de/synonyme/search?q="+word+"&format=application/json&substring=false", true);
				xhr.send();
		}


		//joke (work in progress)
		else if(lowFinalTranscripts.includes("witz")){
			let xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(this.readyState == 4 && this.status == 200){
					let response = JSON.parse(xhr.responseText);

					sayAnswer("nur verfügbar auf englisch, wechsele zu englisch")
					sayAnswerEng(response.joke);
				}
			}
				xhr.open("GET", "http://webknox.com:8080/jokes/random?maxLength=100&apiKey=bfcgibabebqcbanprukiqsjspibfhdx", true);
				xhr.send();
		}		


		//vorlesen
		else if(lowFinalTranscripts.includes("vorlesen")){allowedToRestart = 0; promt("bitte text eingeben zum vorlesen", "hallo", lowFinalTranscripts); allowedToRestart = 1;}


		//speech to text
		else if(lowFinalTranscripts.includes("aufschreiben")){
			sayAnswer("leg los");
			aufschreiben = 1;
			allowedToRestart = 0;
			lowFinalTranscripts = "";
		}
		if(aufschreiben === 1){
			document.getElementById("aufschreiben").innerHTML = document.getElementById("aufschreiben").innerHTML + lowFinalTranscripts;
		}


		//time
		if(lowFinalTranscripts.includes("wie spät ist es")){
			var today = new Date();
			var h = today.getHours();
			var m = today.getMinutes();
			    
			sayAnswer("es ist "+h+" uhr "+m);
		}
		//time end


		//game
		else if(lowFinalTranscripts.includes("spiel")){window.document.location.href = "https://zigzagninja.github.io/3d-game/";}


		startConverting();

	}//lowFinalTranscripts not empty end
}//makeAnswer() end



setInterval(function(){
	if(allowedToRestart === 1){location.reload();}
},30000);
