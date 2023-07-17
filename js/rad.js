const meupBtn = document.querySelector(".meupBtn")
const drankBtn = document.querySelector(".drankBtn")

const meupRadContainer = document.querySelector(".meup-rad-container")
const meupRadBtn = document.querySelector(".meup-rad")

const drankRadContainer = document.querySelector(".drank-rad-container")
const drankRadBtn = document.querySelector(".drank-rad")

const vakken = 24;
const anglePerVak = 360 / vakken;

meupBtn.addEventListener('click', function () {
    meupRadContainer.style.display = 'block'
    drankRadContainer.style.display = 'none'
});

drankBtn.addEventListener('click', function () {
    meupRadContainer.style.display = 'none'
    drankRadContainer.style.display = 'block'
});



meupRadBtn.addEventListener('click', function () {
    const angle = Math.floor(Math.random() * 360) * 10 + 1000;
    // const validAngle = Math.round(angle / anglePerVak) * anglePerVak;

    meupRadBtn.style.transform = `rotate(${angle}deg)`;
    meupRadBtn.style.transition = `transform 1s ease-out`;

});

drankRadBtn.addEventListener('click', function () {
    const angle = Math.floor(Math.random() * 360) * 10 + 1000;
    // const validAngle = Math.round(angle / anglePerVak) * anglePerVak;

    drankRadBtn.style.transform = `rotate(${angle}deg)`;
    drankRadBtn.style.transition = `transform 1s ease-out`;

});