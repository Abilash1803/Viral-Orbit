// ============================================
// ENHANCED UI EFFECTS & INTERACTIONS
// ============================================

// Scroll Progress Indicator
function updateScrollProgress() {
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// Parallax Effect for Hero Section
function initParallax() {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }
}

// Typing Effect for Hero Title
function typingEffect() {
    const highlightText = document.querySelector('.hero-section .highlight');
    if (highlightText) {
        const text = highlightText.textContent;
        highlightText.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < text.length) {
                highlightText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
}

// Magnetic Button Effect
function magneticButtons() {
    const buttons = document.querySelectorAll('.btn-gradient, .btn-light');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// Card Reveal on Scroll
function revealOnScroll() {
    const cards = document.querySelectorAll('.feature-card, .pricing-card, .service-card, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Cursor Trail Effect
function cursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        dot.style.left = e.pageX + 'px';
        dot.style.top = e.pageY + 'px';
        document.body.appendChild(dot);
        
        trail.push(dot);
        
        if (trail.length > trailLength) {
            const oldDot = trail.shift();
            oldDot.remove();
        }
        
        setTimeout(() => {
            dot.style.opacity = '0';
            setTimeout(() => dot.remove(), 300);
        }, 100);
    });
}

// Stats Counter Animation
function animateStats() {
    const stats = document.querySelectorAll('.stats-section h2');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        let current = 0;
        const increment = target / 100;
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + suffix;
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(stat);
    });
}

// Floating Elements
function createFloatingElements() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    
    for (let i = 0; i < 5; i++) {
        const float = document.createElement('div');
        float.className = 'floating-element';
        float.style.left = Math.random() * 100 + '%';
        float.style.top = Math.random() * 100 + '%';
        float.style.animationDelay = Math.random() * 5 + 's';
        hero.appendChild(float);
    }
}

// Navbar Color Change on Scroll
function navbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Pricing Card Click Effect
function pricingCardEffect() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('click', function() {
            pricingCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

// Testimonial Slider Auto-play
function testimonialAutoSlide() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    
    setInterval(() => {
        testimonials.forEach((t, i) => {
            t.style.opacity = i === currentIndex ? '1' : '0.5';
            t.style.transform = i === currentIndex ? 'scale(1)' : 'scale(0.95)';
        });
        
        currentIndex = (currentIndex + 1) % testimonials.length;
    }, 3000);
}

// Icon Hover Glow
function iconGlowEffect() {
    const icons = document.querySelectorAll('.icon-box, .service-icon');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(233, 30, 140, 0.6)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
}

// Initialize all effects
document.addEventListener('DOMContentLoaded', () => {
    updateScrollProgress();
    magneticButtons();
    revealOnScroll();
    animateStats();
    navbarScrollEffect();
    pricingCardEffect();
    iconGlowEffect();
    
    console.log('✨ All UI effects initialized!');
});
