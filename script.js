// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Background on Scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

const navHighlight = () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-links a[href*=${sectionId}]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-links a[href*=${sectionId}]`)?.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', navHighlight);

// Convert common video links into embeddable URLs for slider video slots.
const getEmbeddedVideoUrl = (url) => {
    if (!url) {
        return null;
    }

    const trimmedUrl = url.trim();

    if (/\.mp4($|\?)/i.test(trimmedUrl)) {
        return { type: 'mp4', url: trimmedUrl };
    }

    try {
        const parsedUrl = new URL(trimmedUrl);
        const host = parsedUrl.hostname.replace('www.', '');

        if (host === 'youtube.com' || host === 'm.youtube.com') {
            const videoId = parsedUrl.searchParams.get('v');
            if (videoId) {
                return { type: 'embed', url: `https://www.youtube.com/embed/${videoId}` };
            }
        }

        if (host === 'youtu.be') {
            const videoId = parsedUrl.pathname.slice(1);
            if (videoId) {
                return { type: 'embed', url: `https://www.youtube.com/embed/${videoId}` };
            }
        }

        if (host === 'vimeo.com') {
            const videoId = parsedUrl.pathname.split('/').filter(Boolean)[0];
            if (videoId) {
                return { type: 'embed', url: `https://player.vimeo.com/video/${videoId}` };
            }
        }
    } catch (error) {
        return null;
    }

    return null;
};

document.querySelectorAll('.slide-video[data-video-url]').forEach((videoSlide) => {
    const videoUrl = videoSlide.getAttribute('data-video-url');
    const embedded = getEmbeddedVideoUrl(videoUrl);

    if (!embedded) {
        return;
    }

    if (embedded.type === 'embed') {
        const iframe = videoSlide.querySelector('iframe');
        if (iframe) {
            iframe.src = embedded.url;
        }
        return;
    }

    if (embedded.type === 'mp4') {
        const iframe = videoSlide.querySelector('iframe');
        if (iframe) {
            iframe.remove();
        }

        const video = document.createElement('video');
        video.controls = true;
        video.preload = 'metadata';
        video.src = embedded.url;
        videoSlide.appendChild(video);
    }
});

// Simple reusable slider logic for project and experience media sections
const mediaSliders = document.querySelectorAll('.media-slider');

mediaSliders.forEach((slider) => {
    const track = slider.querySelector('.slider-track');
    const slides = slider.querySelectorAll('.slide-placeholder, .slide-image, .slide-video');
    const prevBtn = slider.querySelector('.slider-btn.prev');
    const nextBtn = slider.querySelector('.slider-btn.next');
    let currentIndex = 0;

    if (!track || slides.length === 0 || !prevBtn || !nextBtn) {
        return;
    }

    const updateSlider = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const goPrev = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    };

    const goNext = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    };

    prevBtn.addEventListener('click', () => {
        goPrev();
    });

    nextBtn.addEventListener('click', () => {
        goNext();
    });

    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) < 40) {
            return;
        }

        if (swipeDistance > 0) {
            goPrev();
        } else {
            goNext();
        }
    }, { passive: true });
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--secondary-color);
    }
    .nav-links a.active::after {
        width: 100%;
    }
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Log website load
console.log('Welcome to my portfolio website! 🚀');
console.log('Feel free to reach out if you have any questions.');
