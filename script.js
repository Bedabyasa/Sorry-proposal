const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="yes-page">
            <h1>She said YES 💍❤️</h1>

           

            <p>
                “I’m truly sorry for hurting you—your happiness means everything to me.
I promise to listen, understand, and love you better every single day.” 💖,<br>
                Love u babyyy .<br><br>
                You are my today, my tomorrow, and my forever 💖
            </p>

            <h2>I love you endlessly 😘</h2>
        </div>
    `;
});
