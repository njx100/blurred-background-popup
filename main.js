const btnEl = document.querySelector(".btn");
const popupBtnEl = document.querySelector(".popup-btn");
const containerEl = document.querySelector(".container");
const popupContainerEl =document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");
const inputEl = document.querySelector(".input");


function popUp() {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
}

function closePopup() {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
}


btnEl.addEventListener("click", popUp);
popupBtnEl.addEventListener("click", () => {
    closePopup();
    alert("you've successfully joined!");
});
closeIconEl.addEventListener("click", closePopup);