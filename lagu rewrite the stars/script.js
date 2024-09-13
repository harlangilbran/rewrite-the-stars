document.getElementById("play-button").addEventListener("click", function () {
  var audio = document.getElementById("audio");
  audio.play();
  showLyrics();
});

document.getElementById("pause-button").addEventListener("click", function () {
  document.getElementById("audio").pause();
});

function showLyrics() {
  const lyrics = [
    "What if we rewrite the stars?",
    "Say you were made to be mine",
    "Nothing could keep us apart",
    "You'd be the one I was meant to find",
    "It's up to you, and it's up to me",
    "No one can say what we get to be",
    "So why don't we rewrite the stars?",
    "Maybe the world could be ours tonight",
  ];

  let line = document.getElementById("line");
  let i = 0;

  function updateLyrics() {
    line.innerText = lyrics[i];
    line.style.opacity = 1;

    setTimeout(() => {
      line.style.opacity = 0;
    }, 4000); // 4 detik untuk muncul dan menghilang

    i = (i + 1) % lyrics.length; // Ulang dari awal setelah lirik terakhir
  }

  updateLyrics();
  setInterval(updateLyrics, 5000); // Ulang setiap 5 detik
}
