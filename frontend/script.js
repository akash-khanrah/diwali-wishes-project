
const canvas = document.getElementById("blastCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let particles = [];

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 12 + 4; 
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.friction = 0.95;
        this.gravity = 0.1;
    }
    update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.015; 
    }
    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fill();
    }
}

function skyShotBlast(x, y) {
    const colors = ['#ff0000', '#ff9900', '#ffcc00', '#00ffff', '#ff00ff', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < 150; i++) {
        particles.push(new Particle(x, y, color));
    }
}

function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    particles.forEach((p, index) => {
        if (p.alpha <= 0) particles.splice(index, 1);
        else { p.update(); p.draw(); }
    });
    requestAnimationFrame(animateCanvas);
}
animateCanvas();

function startInfiniteDiwali() {
    setInterval(() => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * (window.innerHeight / 1.5); 
        skyShotBlast(randomX, randomY);

        let pop = new Audio("https://assets.mixkit.co/active_storage/sfx/170/170-preview.mp3");
        pop.volume = 0.2;
        pop.play().catch(e => {});
    }, 800); 
}

async function checkLogin() {
    const user = document.getElementById("username").value;
    const passInput = document.getElementById("password");
    const pass = passInput.value;
    
    const rocketSound = document.getElementById("rocket-sound");
    const bgLoopSound = document.getElementById("bg-loop-sound");
    const boomSound = document.getElementById("boom-sound");

    if (user === "") {
        alert("Enter your name first!");
        return;
    }

    try {
        const response = await fetch("https://diwali-wishes-project-1.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: user, password: pass })
        });

        const data = await response.json();

        if (data.success) {
            rocketSound.volume = 1.0;
            rocketSound.play().catch(e => console.log(e));

            document.getElementById("login-container").style.display = "none";
            document.body.style.background = "#000000"; 

            setTimeout(() => {
                boomSound.volume = 1.0;
                boomSound.play();
                bgLoopSound.volume = 0.5;
                bgLoopSound.play();

                document.body.classList.add("festive-bg");
                document.body.classList.add("flash-screen");

                startInfiniteDiwali();

                document.getElementById("celebration-container").style.display = "block";
                document.getElementById("user-greeting").innerText = data.name;
            }, 1500); 

        } else {
            passInput.value = ""; 
            passInput.classList.add("error-blink");
            passInput.focus();
            
            setTimeout(() => {
                passInput.classList.remove("error-blink");
            }, 500);
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Server not running. Start FastAPI.");
    }
}