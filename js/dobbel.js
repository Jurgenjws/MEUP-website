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

dobbel1.addEventListener('click', function () {
    willekeurigedobbel = selecteerWillekeurigedobbel();
    console.log(willekeurigedobbel);

    const angle = Math.floor(Math.random() * 360) * 10 + 10000;

    if (willekeurigedobbel === "dobbel1") {
        dobbel1.style.top = '50%'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel1.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel2") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '50%'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel2.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel3") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '50%'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel3.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel4") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '50%'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel4.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel5") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '50%'
        dobbel6.style.top = '-1000px'
        dobbel5.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel6") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '50%'
        dobbel6.style.transform = `rotate(${angle}deg)`;
    }
});

dobbel2.addEventListener('click', function () {
    willekeurigedobbel = selecteerWillekeurigedobbel();
    console.log(willekeurigedobbel);

    const angle = Math.floor(Math.random() * 360) * 10 + 1000;

    if (willekeurigedobbel === "dobbel1") {
        dobbel1.style.top = '50%'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel1.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel2") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '50%'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel2.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel3") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '50%'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel3.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel4") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '50%'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel4.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel5") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '50%'
        dobbel6.style.top = '-1000px'
        dobbel5.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel6") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '50%'
        dobbel6.style.transform = `rotate(${angle}deg)`;
    }
});

dobbel3.addEventListener('click', function () {
    willekeurigedobbel = selecteerWillekeurigedobbel();
    console.log(willekeurigedobbel);

    const angle = Math.floor(Math.random() * 360) * 10 + 1000;

    if (willekeurigedobbel === "dobbel1") {
        dobbel1.style.top = '50%'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel1.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel2") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '50%'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel2.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel3") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '50%'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel3.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel4") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '50%'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel4.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel5") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '50%'
        dobbel6.style.top = '-1000px'
        dobbel5.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel6") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '50%'
        dobbel6.style.transform = `rotate(${angle}deg)`;
    }
});

dobbel4.addEventListener('click', function () {
    willekeurigedobbel = selecteerWillekeurigedobbel();
    console.log(willekeurigedobbel);

    const angle = Math.floor(Math.random() * 360) * 10 + 1000;

    if (willekeurigedobbel === "dobbel1") {
        dobbel1.style.top = '50%'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel1.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel2") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '50%'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel2.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel3") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '50%'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel3.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel4") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '50%'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel4.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel5") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '50%'
        dobbel6.style.top = '-1000px'
        dobbel5.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel6") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '50%'
        dobbel6.style.transform = `rotate(${angle}deg)`;
    }
});

dobbel5.addEventListener('click', function () {
    willekeurigedobbel = selecteerWillekeurigedobbel();
    console.log(willekeurigedobbel);

    const angle = Math.floor(Math.random() * 360) * 10 + 1000;

    if (willekeurigedobbel === "dobbel1") {
        dobbel1.style.top = '50%'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel1.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel2") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '50%'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel2.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel3") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '50%'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel3.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel4") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '50%'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel4.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel5") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '50%'
        dobbel6.style.top = '-1000px'
        dobbel5.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel6") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '50%'
        dobbel6.style.transform = `rotate(${angle}deg)`;
    }
});

dobbel6.addEventListener('click', function () {
    willekeurigedobbel = selecteerWillekeurigedobbel();
    console.log(willekeurigedobbel);

    const angle = Math.floor(Math.random() * 360) * 10 + 1000;

    if (willekeurigedobbel === "dobbel1") {
        dobbel1.style.top = '50%'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel1.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel2") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '50%'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel2.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel3") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '50%'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel3.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel4") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '50%'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '-1000px'
        dobbel4.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel5") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '50%'
        dobbel6.style.top = '-1000px'
        dobbel5.style.transform = `rotate(${angle}deg)`;
    } else if (willekeurigedobbel === "dobbel6") {
        dobbel1.style.top = '-1000px'
        dobbel2.style.top = '-1000px'
        dobbel3.style.top = '-1000px'
        dobbel4.style.top = '-1000px'
        dobbel5.style.top = '-1000px'
        dobbel6.style.top = '50%'
        dobbel6.style.transform = `rotate(${angle}deg)`;
    }
});