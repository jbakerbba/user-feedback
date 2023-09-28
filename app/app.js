//exits modal when user clicks outside shape
function initListeners() {
    $("#log-button").on("click", (e) => {
        $("#modal").toggle();
    });
    $(".close").on("click", (e) => {
        $("#modal").toggle();
    });
}

$(document).ready(function () {
    initListeners();
});

const changeText = document.querySelector("#submitBtn");
const logSuccess = document.querySelector
("#log-button");

changeText.addEventListener("click", function() {
  logSuccess.textContent = "Logged-In";
});