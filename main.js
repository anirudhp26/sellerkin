document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const methodsContainer = document.getElementById("methodsContainer");
    const letterH = document.getElementById("letter-heading");
    const letter = document.getElementById("letter");
    toggleButton.addEventListener("click", function () {
        if (methodsContainer.classList.contains("hidden")) {
            methodsContainer.classList.remove("hidden");
            letterH.style.display = "flex";
            letter.style.display = "block";
            methodsContainer.style.maxHeight = methodsContainer.scrollHeight + "px";
            toggleButton.style.display = "none"
        }
    });
});
