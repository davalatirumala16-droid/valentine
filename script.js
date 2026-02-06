/* ===== GLOBAL MUSIC ===== */
let bgMusic;

/* ===== MESSAGE ===== */
const msg = `I can't wait for the day we no longer have to count the miles.
Until then, know that I love you more than ever ❤️❤️.

Will you be my Valentine forever ♾️❤️?`;

/* ===== TYPING EFFECT ===== */
let i = 0;
const speed = 50;

function typingEffect() {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return;

  if (i < msg.length) {
    typingEl.innerHTML += msg.charAt(i);
    i++;
    setTimeout(typingEffect, speed);
  }
}
typingEffect();

/* ===== YES CLICK (GLOBAL FUNCTION) ===== */
function yesClick() {
  console.log("YES clicked"); // 🔥 DEBUG LINE

  // 🎵 Play music
  if (!bgMusic) {
    bgMusic = new Audio("music/bgm.mp3");
    bgMusic.loop = true;
    bgMusic.volume = 0.7;

    bgMusic.play().catch(err => {
      console.log("Music error:", err);
    });
  }

  // 💖 Change screen
  document.body.innerHTML = `
    <div class="bg-blur"></div>
    <div class="overlay">
      <div class="message-box">
        <h1>Happy Valentine’s Day ❤️</h1>
        <p>
          TO MY FOREVER..!!<br>
          YOU ARE THE GREATEST BLESSING TO ME &<br>
          I STOP LOVING YOU WHEN FEB/30 ARRIVES 💕
        </p>
      </div>
    </div>
  `;

  // 💕 Floating hearts
  setInterval(createHeart, 500);
}

/* ===== HEARTS ===== */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 15 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

/* ===== NO BUTTON ===== */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  function moveButton() {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 70 + "vh";
    noBtn.style.left = Math.random() * 70 + "vw";
  }

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);
}
