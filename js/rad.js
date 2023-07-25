const meupBtnDutch = document.querySelector(".meupBtnDutch")
const meupBtnEnglish = document.querySelector(".meupBtnEnglish")

const meupRadContainerDutch = document.querySelector(".meup-rad-container-dutch")
const meupRadDutchBtn = document.querySelector(".meup-rad-dutch")

const meupRadContainerEnglish = document.querySelector(".meup-rad-container-english")
const meupRadEnglishBtn = document.querySelector(".meup-rad-english")

const vakken = 24;
const anglePerVak = 360 / vakken;

meupBtnDutch.addEventListener('click', function () {
    meupRadContainerDutch.style.display = 'block'
    meupRadContainerEnglish.style.display = 'none'
});

meupBtnEnglish.addEventListener('click', function () {
    meupRadContainerDutch.style.display = 'none'
    meupRadContainerEnglish.style.display = 'block'
});



meupRadDutchBtn.addEventListener('click', function () {
    const angle = Math.floor(Math.random() * 360) * 10 + 1000;
    // const validAngle = Math.round(angle / anglePerVak) * anglePerVak;

    meupRadDutchBtn.style.transform = `rotate(${angle}deg)`;
    meupRadDutchBtn.style.transition = `transform 1s ease-out`;

});

meupRadEnglishBtn.addEventListener('click', function () {
    const angle = Math.floor(Math.random() * 360) * 10 + 1000;
    // const validAngle = Math.round(angle / anglePerVak) * anglePerVak;

    meupRadEnglishBtn.style.transform = `rotate(${angle}deg)`;
    meupRadEnglishBtn.style.transition = `transform 1s ease-out`;

});