function sayAnswer(textI){
	var u = new SpeechSynthesisUtterance();
	u.text = textI;
	u.lang = 'de-DE';
	u.rate = 1.2;
	u.pitch = 0.1;
	speechSynthesis.speak(u);
}

function sayAnswerSlow(textI){
	var u = new SpeechSynthesisUtterance();
	u.text = textI;
	u.lang = 'de-DE';
	u.rate = 0.5;
	u.pitch = 0.1;
	speechSynthesis.speak(u);
}

function sayAnswerFast(textI){
	var u = new SpeechSynthesisUtterance();
	u.text = textI;
	u.lang = 'de-DE';
	u.rate = 2.3;
	u.pitch = 0.1;
	speechSynthesis.speak(u);
}

function sayAnswerEng(textI){
	var u = new SpeechSynthesisUtterance();
	u.text = textI;
	u.lang = 'en-US';
	u.rate = 1.2;
	u.pitch = 0.1;
	speechSynthesis.speak(u);
}