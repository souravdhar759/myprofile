
    let clip = document.querySelector(".vid")
    clip.addEventListener("mouseover", function (e) {
      clip.play();
   })
   clip.addEventListener("mouseout", function (e) {
    clip.pause();
 })