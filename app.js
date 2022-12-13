window.addEventListener("hashchange", () => {
  if (
    window.location.hash &&
    window.location.hash.startsWith("#slider-span")
  ) {
    document.getElementById("carousel").scrollIntoView();
  }
});