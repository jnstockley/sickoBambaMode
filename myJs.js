/* so i got pause/play working so now we just need 'on the fly' volume changing */

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

function resetVolume(){
	var sickoSlider = document.getElementById("sickoSlider");
	var bamabSlider = document.getElementById("bambaSlider");
	sickoSlider.value=50;
	bamabSlider.value=50;
}

function credFwd() {
    window.location = "credits.html";
}