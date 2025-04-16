document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#f9f871"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#f9f871",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (document.querySelector('.nav-links').classList.contains('active')) {
                    document.querySelector('.nav-links').classList.remove('active');
                    document.querySelector('.hamburger').classList.remove('active');
                }
            }
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    function revealOnScroll() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on page load

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const startCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            
            const updateCounter = () => {
                const increment = target / speed;
                
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCounter();
        });
    };

    // Start counter when section is in view
    const aboutSection = document.getElementById('about');
    
    if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startCounters();
                observer.unobserve(aboutSection);
            }
        }, { threshold: 0.5 });
        
        observer.observe(aboutSection);
    }

    // Moon Button enhanced animation
    const moonButton = document.getElementById('moonButton');
    
    if (moonButton) {
        moonButton.addEventListener('click', () => {
            // Change button text and style
            moonButton.textContent = "SENDING...";
            moonButton.style.background = "linear-gradient(45deg, #4caf50, #45a049)";
            
            // Create multiple rockets
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    createRocket();
                }, i * 200);
            }
            
            // Reset button after animation
            setTimeout(() => {
                moonButton.textContent = "SEND IT TO THE MOON";
                moonButton.style.background = "linear-gradient(45deg, #ffcc29, #f8a01a)";
            }, 3000);
        });
    }

    // Create rocket animation
    function createRocket() {
        const rocketContainer = document.getElementById('rocket-container');
        
        if (!rocketContainer) return;
        
        const rocket = document.createElement('div');
        rocket.className = 'rocket';
        rocket.textContent = '🚀';
        
        // Random position
        const randomX = Math.random() * window.innerWidth;
        rocket.style.left = `${randomX}px`;
        rocket.style.top = `${window.innerHeight}px`;
        
        rocketContainer.appendChild(rocket);
        
        // Animate rocket
        setTimeout(() => {
            rocket.style.top = `-100px`;
            rocket.style.left = `${randomX + (Math.random() * 200 - 100)}px`;
        }, 10);
        
        // Remove rocket after animation
        setTimeout(() => {
            rocketContainer.removeChild(rocket);
        }, 3000);
    }

    // Initialize Tokenomics Chart
    const tokenomicsChart = document.getElementById('tokenomicsChart');
    
    if (tokenomicsChart) {
        const ctx = tokenomicsChart.getContext('2d');
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Community', 'Liquidity Pool', 'Team'],
                datasets: [{
                    data: [55, 40, 5],
                    backgroundColor: [
                        '#f9f871',  // Primary color
                        '#4ecdc4',  // Accent color
                        '#ff6b6b',  // Secondary color
                    ],
                    borderColor: 'rgba(26, 26, 46, 0.8)',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#ffffff',
                            font: {
                                size: 14,
                                family: "'Montserrat', sans-serif"
                            },
                            padding: 20
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }
});
