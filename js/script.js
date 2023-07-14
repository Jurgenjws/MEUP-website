// krokodil
const playBtn = document.querySelector(".play")
const krokDicht = document.querySelector(".krokDicht")
const krokOpen = document.querySelector(".krokOpen")
const tanden1 = document.querySelector(".tanden")
let play = true;
let darkMode = document.body;

// open en dicht
playBtn.addEventListener('click', function () {
    console.log(play);

    if (play === true) {
        play = false;

        krokDicht.style.display = 'none'
        krokOpen.style.display = 'block'
        tanden1.style.display = 'block'
        tand1.style.display = 'block'
        tand2.style.display = 'block'
        tand3.style.display = 'block'
        tand4.style.display = 'block'
        tand5.style.display = 'block'
        tand6.style.display = 'block'
        tand7.style.display = 'block'
        tand8.style.display = 'block'
        tand9.style.display = 'block'
        tand10.style.display = 'block'
        // tanden.style.opacity= '0'
    } else if (play === false) {
        play = true;

        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden1.style.display = 'none'
        // hap.style.display = 'block'
    }
});

// klikbaar maken
const tand1 = document.querySelector(".tand1 img")
const tand2 = document.querySelector(".tand2 img")
const tand3 = document.querySelector(".tand3 img")
const tand4 = document.querySelector(".tand4 img")
const tand5 = document.querySelector(".tand5 img")
const tand6 = document.querySelector(".tand6 img")
const tand7 = document.querySelector(".tand7 img")
const tand8 = document.querySelector(".tand8 img")
const tand9 = document.querySelector(".tand9 img")
const tand10 = document.querySelector(".tand10 img")
const hap = document.querySelector(".krok-container h2")
var tanden2 = ["tand1", "tand2", "tand3", "tand4", "tand5", "tand6", "tand7", "tand8", "tand9", "tand10"];

var willekeurigeTand = tanden2[Math.floor(Math.random() * tanden2.length)];
console.log(willekeurigeTand);

// playBtn.addEventListener('click', function () {
//     return tanden2[Math.floor(Math.random() * tanden2.length)];
// });

tand1.addEventListener('click', function () {
    tand1.style.display = 'none'

    if (willekeurigeTand === "tand1") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden1.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand2.addEventListener('click', function () {
    tand2.style.display = 'none'

    if (willekeurigeTand === "tand2") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden1.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand3.addEventListener('click', function () {
    tand3.style.display = 'none'

    if (willekeurigeTand === "tand3") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden1.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand4.addEventListener('click', function () {
    tand4.style.display = 'none'

    if (willekeurigeTand === "tand4") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden1.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand5.addEventListener('click', function () {
    tand5.style.display = 'none'

    if (willekeurigeTand === "tand5") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden1.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand6.addEventListener('click', function () {
    tand6.style.display = 'none'

    if (willekeurigeTand === "tand6") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden1.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand7.addEventListener('click', function () {
    tand7.style.display = 'none'

    if (willekeurigeTand === "tand7") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden1.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand8.addEventListener('click', function () {
    tand8.style.display = 'none'

    if (willekeurigeTand === "tand8") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden1.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand9.addEventListener('click', function () {
    tand9.style.display = 'none'

    if (willekeurigeTand === "tand9") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden1.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand10.addEventListener('click', function () {
    tand10.style.display = 'none'

    if (willekeurigeTand === "tand10") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden1.style.display = 'none'
        hap.style.display = 'block'
    }
});