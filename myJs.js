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