let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let menuIcon = document.getElementById("menuIcon");
let volume = document.getElementById("volume");
let nextIcon = document.getElementById("nextIcon");

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
  volume.max = 100;
  volume.value = song.volume;
};

function playPause() {
  if (ctrlIcon.classList.contains("bx-play")) {
    song.play();
    ctrlIcon.classList.remove("bx-play");
    ctrlIcon.classList.add("bx-pause");
  } else if (ctrlIcon.classList.contains("bx-pause")) {
    song.pause();
    ctrlIcon.classList.add("bx-play");
    ctrlIcon.classList.remove("bx-pause");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("bx-play");
  ctrlIcon.classList.remove("bx-pause");
};

function toggleMenu() {
  // Check if the menu is currently open (visible)
  if (menu.style.display === "block") {
    // If open, hide the menu and switch icon back to "menu"
    menu.style.display = "none";
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
  } else {
    // If closed, show the menu and switch icon to "close (x)"
    menu.style.display = "block";
    menuIcon.classList.remove("bx-menu");
    menuIcon.classList.add("bx-x");
  }
}

volume.onchange = () => {
  song.volume = volume.value / 100;
};
