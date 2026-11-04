const nightSky = document.getElementById("nightSky");

const numberOfStars = 250;

for (let i = 0; i < numberOfStars; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    // Random star position
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    // Random star size
    const size = Math.random() * 3 + 1;

    // Random animation duration
    const duration = Math.random() * 4 + 2;

    // Random animation delay
    const delay = Math.random() * 5;

    star.style.left = `${x}%`;
    star.style.top = `${y}%`;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    nightSky.appendChild(star);
}