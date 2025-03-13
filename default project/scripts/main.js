const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/youtube_video.png");
  } else {
    myImage.setAttribute("src", "phoenix-logo.svg");
  }
});
