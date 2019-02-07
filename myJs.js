/* By Mason Ansari */
function playSicko() {
    var sickomode = document.getElementById("sicko");
    sickomode.play();
}

function pauseSicko() {
    var sickomode = document.getElementById("sicko");
    sickomode.pause();
}

function playBamba() {
    var mobamba = document.getElementById("bamba");
    mobamba.play();
}

function pauseBamba() {
    var mobamba = document.getElementById("bamba");
    mobamba.pause();
}

function sweetJesus() {
    playSicko();
    playBamba();
}

function pauseBoth() {
    pauseSicko();
    pauseBamba();
}

/*By Jack Stockley*/
function sickoVolume(){
	var sickomode = document.getElementById("sicko");
	var sickoSlider = document.getElementById("sickoSlider");
	sickomode.volume=sickoSlider.value/100;
}

function bamaVolume(){
	var mobamaba = document.getElementById("bamba");
	var bamabSlider = document.getElementById("bambaSlider");
	mobamaba.volume=bamabSlider.value/100;
}

/*By Raj Joshi*/
function resetVolume(){
	var sickoSlider = document.getElementById("sickoSlider");
	var bamabSlider = document.getElementById("bambaSlider");
	sickoSlider.value=50;
	bamabSlider.value=50;
	sickomode.volume=.5;
	mobamba.volume=.5;
}

function credFwd() {
    window.location = "credits.html";
}

/*By Jack Stockley*/
function sweetVictory() {
	var sweetVictory = document.getElementById("sweetVictory");
	sweetVictory.style.visibility = "visible";
	sweetVictory.play();
	setTimeout(function(){
		sweetVictory.style.visibility="hidden";
	}, 82000);
}