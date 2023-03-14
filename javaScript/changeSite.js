let btnGauche = decument.getElementById("btnGauche");
let btnDroite = decument.getElementById("btnDroite");
let mesMacket = document.getElementsByClassName("mesMacket");

function goDroite1() {
    mesMacket.style.animation = "moveMacketAction1 4s forwards";
}

mesMacket.addEventListener("moveMacketAction1start", StartAnimation1);

class StartAnimation1 {
    constructor() {
        this.innerHTML = "StartAnimation1 event occured - The animation has started";
    }
}
