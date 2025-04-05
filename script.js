const startDate = new Date("2024-09-20");

function updateCounter() {
    const now = new Date();
    const diffTime = now - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffDays / 365);
    const months = Math.floor ((diffDays % 365) / 30);
    const days = diffDays % 30;

    document.getElementById("counter").innerText = `${years} anos, ${months} meses e ${days} dias`;
}

updateCounter();

document.getElementById("loveButton").addEventListener("click", () => {
    const letter = document.getElementById("loveLetter");
    letter.style.display = letter.style.display === "none" ? "block" : "none";
})

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
  
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  setInterval(createHeart, 300);