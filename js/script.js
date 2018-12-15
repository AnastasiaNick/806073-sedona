var link = document.querySelector(".modal-open-button");
var popup = document.querySelector(".modal-search");
var arrivalDate = popup.querySelector("[name=arrival-date]")

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
	arrivalDate.focus();
})
