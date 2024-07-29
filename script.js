let bar = document.getElementById("bar");
let song = document.getElementById("songs");
let controlIc = document.getElementById("ctrlic");

song.onloadedmetadata = function(){
    bar.max = song.duration;
    bar.value = song.currentTime;
}

function run() {
    if (controlIc.classList.contains("fa-pause")){
        song.pause();
        controlIc.classList.remove("fa-pause");
        controlIc.classList.add("fa-play");
    }
    else {
        song.play();
        controlIc.classList.add("fa-pause");
        controlIc.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(() => {
        bar.value = song.currentTime;
    }, 500);
}

bar.onchange = function() {
    song.play();
    song.currentTime = bar.value;
    controlIc.classList.add("fa-pause");
    controlIc.classList.remove("fa-play");
}

let songs = [
"https://archive.org/download/EdSheeranPerfect_20190202/Ed%20Sheeran%20-%20Perfect.mp3",
"https://ia601901.us.archive.org/30/items/love-me-like-you-do-ellie-goulding/Love%20Me%20Like%20You%20Do%20-%20Ellie%20Goulding.mp3",
"https://cdn.tunezjam.com/audio/Rema-Calm-Down-(TunezJam.com).mp3",
  "https://dn720301.ca.archive.org/0/items/hailee-steinfeld/Hailee%20Steinfeld%2C%20Alesso%20feat.%20Florida%20Georgia%20Line%2C%20WATT%20-%20Let%20Me%20Go.mp3"
  
];

let songTitles = [
    "Perfect - Ed Sheeran",
    "Love Me Like You Do - Ellie Goulding",
   "Calm Down - Rema",  
  "Let Me Go - Hailee Steinfeld"
 
];

let currentSongIndex = 0;

function changeSong(index) {
currentSongIndex = (currentSongIndex + index + songs.length) % songs.length;
song.src = songs[currentSongIndex];
song.play();
controlIc.classList.add("fa-pause");
controlIc.classList.remove("fa-play");

document.querySelector('h1').textContent = songTitles[currentSongIndex];
}

document.querySelector('.fa-chevron-left').onclick = () => changeSong(-1);
document.querySelector('.fa-chevron-right').onclick = () => changeSong(1);
