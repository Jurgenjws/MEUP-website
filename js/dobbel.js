const dobbelBtn = document.querySelector(".stenen img")
const dobbel1 = document.querySelector(".dobbel1")
const dobbel2 = document.querySelector(".dobbel2")
const dobbel3 = document.querySelector(".dobbel3")
const dobbel4 = document.querySelector(".dobbel4")
const dobbel5 = document.querySelector(".dobbel5")
const dobbel6 = document.querySelector(".dobbel6")
var dobbelArray = ["dobbel1", "dobbel2", "dobbel3", "dobbel4", "dobbel5", "dobbel6"];

// random dobbel selectie
var willekeurigedobbel = selecteerWillekeurigedobbel();

function selecteerWillekeurigedobbel() {
    return dobbelArray[Math.floor(Math.random() * dobbelArray.length)];
}

dobbelBtn.addEventListener('click', function () {
    willekeurigedobbel = selecteerWillekeurigedobbel();
    console.log(willekeurigedobbel);

    const angle = Math.floor(Math.random() * 360) * 10 + 1000;

    dobbelBtn.style.transform = `rotate(${angle}deg)`;
    // dobbel1.style.transform = `rotate(${angle}deg)`;
    // dobbel2.style.transform = `rotate(${angle}deg)`;
    // dobbel3.style.transform = `rotate(${angle}deg)`;
    // dobbel4.style.transform = `rotate(${angle}deg)`;
    // dobbel5.style.transform = `rotate(${angle}deg)`;
    // dobbel6.style.transform = `rotate(${angle}deg)`;
    dobbelBtn.style.transition = `transform 2s ease-out`;
    // dobbel1.style.transform = `transform 2s ease-out`;
    // dobbel2.style.transform = `transform 2s ease-out`;
    // dobbel3.style.transform = `transform 2s ease-out`;
    // dobbel4.style.transform = `transform 2s ease-out`;
    // dobbel5.style.transform = `transform 2s ease-out`;
    // dobbel6.style.transform = `transform 2s ease-out`;



    if (willekeurigedobbel === "dobbel1") {
        dobbel1.style.display = 'block'
        dobbel2.style.display = 'none'
        dobbel3.style.display = 'none'
        dobbel4.style.display = 'none'
        dobbel5.style.display = 'none'
        dobbel6.style.display = 'none'
    }

    if (willekeurigedobbel === "dobbel2") {
        dobbel1.style.display = 'none'
        dobbel2.style.display = 'block'
        dobbel3.style.display = 'none'
        dobbel4.style.display = 'none'
        dobbel5.style.display = 'none'
        dobbel6.style.display = 'none'
    }

    if (willekeurigedobbel === "dobbel3") {
        dobbel1.style.display = 'none'
        dobbel2.style.display = 'none'
        dobbel3.style.display = 'block'
        dobbel4.style.display = 'none'
        dobbel5.style.display = 'none'
        dobbel6.style.display = 'none'
    }

    if (willekeurigedobbel === "dobbel4") {
        dobbel1.style.display = 'none'
        dobbel2.style.display = 'none'
        dobbel3.style.display = 'none'
        dobbel4.style.display = 'block'
        dobbel5.style.display = 'none'
        dobbel6.style.display = 'none'
    }

    if (willekeurigedobbel === "dobbel5") {
        dobbel1.style.display = 'none'
        dobbel2.style.display = 'none'
        dobbel3.style.display = 'none'
        dobbel4.style.display = 'none'
        dobbel5.style.display = 'block'
        dobbel6.style.display = 'none'
    }

    if (willekeurigedobbel === "dobbel6") {
        dobbel1.style.display = 'none'
        dobbel2.style.display = 'none'
        dobbel3.style.display = 'none'
        dobbel4.style.display = 'none'
        dobbel5.style.display = 'none'
        dobbel6.style.display = 'block'
    }

});