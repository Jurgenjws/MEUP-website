// krokodil
const playBtn = document.querySelector(".play")
const krokDicht = document.querySelector(".krokDicht")
const krokOpen = document.querySelector(".krokOpenImg")
const tanden = document.querySelector(".tanden")
let play = true;
let darkMode = document.body;

// open en dicht
playBtn.addEventListener('click', function () {
    console.log(play);

    if (play === true) {
        play = false;

        krokDicht.style.display = 'none'
        krokOpen.style.display = 'block'
        tanden.style.display = 'block'
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
        tand11.style.display = 'block'
        tand12.style.display = 'block'
        tand13.style.display = 'block'
        tand14.style.display = 'block'
        tand15.style.display = 'block'
        tand16.style.display = 'block'
        tand17.style.display = 'block'
        tand18.style.display = 'block'
        tand19.style.display = 'block'
        tand20.style.display = 'block'
    } else if (play === false) {
        play = true;

        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'none'
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
const tand11 = document.querySelector(".tand11 img")
const tand12 = document.querySelector(".tand12 img")
const tand13 = document.querySelector(".tand13 img")
const tand14 = document.querySelector(".tand14 img")
const tand15 = document.querySelector(".tand15 img")
const tand16 = document.querySelector(".tand16 img")
const tand17 = document.querySelector(".tand17 img")
const tand18 = document.querySelector(".tand18 img")
const tand19 = document.querySelector(".tand19 img")
const tand20 = document.querySelector(".tand20 img")
const hap = document.querySelector(".krok-container h2")
var tandenArray = ["tand1", "tand2", "tand3", "tand4", "tand5", "tand6", "tand7", "tand8", "tand9", "tand10", "tand11", "tand12", "tand13", "tand14", "tand15", "tand16", "tand17", "tand18", "tand19", "tand20"];

// random tand selectie
var willekeurigeTand = selecteerWillekeurigeTand();

function selecteerWillekeurigeTand() {
    return tandenArray[Math.floor(Math.random() * tandenArray.length)];
}

playBtn.addEventListener('click', function () {
    willekeurigeTand = selecteerWillekeurigeTand();
    console.log(willekeurigeTand);
});

tand1.addEventListener('click', function () {
    tand1.style.display = 'none'

    if (willekeurigeTand === "tand1") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand2.addEventListener('click', function () {
    tand2.style.display = 'none'

    if (willekeurigeTand === "tand2") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand3.addEventListener('click', function () {
    tand3.style.display = 'none'

    if (willekeurigeTand === "tand3") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand4.addEventListener('click', function () {
    tand4.style.display = 'none'

    if (willekeurigeTand === "tand4") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand5.addEventListener('click', function () {
    tand5.style.display = 'none'

    if (willekeurigeTand === "tand5") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand6.addEventListener('click', function () {
    tand6.style.display = 'none'

    if (willekeurigeTand === "tand6") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand7.addEventListener('click', function () {
    tand7.style.display = 'none'

    if (willekeurigeTand === "tand7") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand8.addEventListener('click', function () {
    tand8.style.display = 'none'

    if (willekeurigeTand === "tand8") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand9.addEventListener('click', function () {
    tand9.style.display = 'none'

    if (willekeurigeTand === "tand9") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand10.addEventListener('click', function () {
    tand10.style.display = 'none'

    if (willekeurigeTand === "tand10") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand11.addEventListener('click', function () {
    tand11.style.display = 'none'

    if (willekeurigeTand === "tand11") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand12.addEventListener('click', function () {
    tand12.style.display = 'none'

    if (willekeurigeTand === "tand12") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand13.addEventListener('click', function () {
    tand13.style.display = 'none'

    if (willekeurigeTand === "tand13") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand14.addEventListener('click', function () {
    tand14.style.display = 'none'

    if (willekeurigeTand === "tand14") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand15.addEventListener('click', function () {
    tand15.style.display = 'none'

    if (willekeurigeTand === "tand15") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand16.addEventListener('click', function () {
    tand16.style.display = 'none'

    if (willekeurigeTand === "tand16") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand17.addEventListener('click', function () {
    tand17.style.display = 'none'

    if (willekeurigeTand === "tand17") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand18.addEventListener('click', function () {
    tand18.style.display = 'none'

    if (willekeurigeTand === "tand18") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand19.addEventListener('click', function () {
    tand19.style.display = 'none'

    if (willekeurigeTand === "tand19") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});

tand20.addEventListener('click', function () {
    tand20.style.display = 'none'

    if (willekeurigeTand === "tand20") {
        play = false;
        krokDicht.style.display = 'block'
        krokOpen.style.display = 'none'
        tanden.style.display = 'none'
        hap.style.display = 'block'
    }
});