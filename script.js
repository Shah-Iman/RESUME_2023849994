// MALAYSIA TIME
function updateTime() {
  const malaysiaTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kuala_Lumpur"
  });
  document.getElementById("demo").innerHTML = malaysiaTime + " (MYT)";
}
setInterval(updateTime, 1000);
updateTime();

// MUSIC NOTICE
const musicNotice = document.getElementById("musicNotice");
const bgm = document.getElementById("bgm");
let isPlaying = false;

// Step 1: Popup fade + move to top-left
setTimeout(() => {
  musicNotice.classList.add("hide");
}, 3000);

// Step 2: Toggle music when clicked
musicNotice.addEventListener("click", function() {
  // Only clickable after it becomes mini
  if (musicNotice.classList.contains("hide")) {
    if (isPlaying) {
      bgm.pause();
      isPlaying = false;
    } else {
      bgm.volume = 0.5;
      bgm.play();
      isPlaying = true;
    }
  }
});