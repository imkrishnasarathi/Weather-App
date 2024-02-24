const logo = document.querySelector("#logo");
logo.addEventListener("mouseover", () => {
    logo.style.cursor = "pointer";
});
logo.addEventListener("click", () => {
    window.location.href = "/";
})