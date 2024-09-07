(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function showPopup(content) {
  document.getElementById("popupText").innerText = content;
  document.getElementById("popupOverlay").style.display = "flex";
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const portfolioSection = document.getElementById("portfolio");

  function changeBackgroundColor(colorClass) {
    
    portfolioSection.classList.remove("bg-color-1", "bg-color-2", "bg-color-3");
    
    portfolioSection.classList.add(colorClass);
  }

  document.querySelectorAll(".project-title").forEach(title => {
    title.addEventListener("click", function () {
      const colorClass = this.dataset.color;
      changeBackgroundColor(colorClass);
    });
  });
});