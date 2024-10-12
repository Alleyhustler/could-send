document.addEventListener('DOMContentLoaded', () => {
    // Moon Button Animation
    const moonButton = document.getElementById('moonButton');
    moonButton.addEventListener('click', () => {
        moonButton.textContent = "SENDING";
        moonButton.style.backgroundColor = '#4caf50';

        // Fun rocket animation (just for fun)
        let rocket = document.createElement('div');
        rocket.textContent = '🚀';
        rocket.style.position = 'absolute';
        rocket.style.fontSize = '50px';
        rocket.style.left = '50%';
        rocket.style.transform = 'translateX(-50%)';
        document.body.appendChild(rocket);

        let yPosition = window.innerHeight;

        const moveRocket = setInterval(() => {
            yPosition -= 5;
            rocket.style.top = yPosition + 'px';

            if (yPosition < -50) {
                clearInterval(moveRocket);
                document.body.removeChild(rocket);
            }
        }, 10);
    });
});
