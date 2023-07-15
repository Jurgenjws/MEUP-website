const imgBtn = document.querySelector(".rad")
const vakken = 24;
const anglePerVak = 360 / vakken;
const minAngleVerschil = 30;

imgBtn.addEventListener('click', function () {
    const angle = Math.floor(Math.random() * 360) * 10 + 1000;
    const validAngle = Math.round(angle / anglePerVak) * anglePerVak;

    imgBtn.style.transform = `rotate(${validAngle}deg)`;
    imgBtn.style.transition = `transform 1s ease-out`;

});