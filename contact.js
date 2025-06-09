document.addEventListener('DOMContentLoaded', function() {
    const bannerContainers = document.querySelectorAll('.banner-image-container');

    bannerContainers.forEach(container => {
        const bannerText = container.querySelector('.banner-text');

        container.addEventListener('mouseenter', function() {
            // Animate image container
            this.style.transform = 'scale(1.05) translateY(-10px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; // Add transition for smooth effect

            // Animate text
            bannerText.style.fontSize = '5.5em'; // Slightly larger text on hover
            bannerText.style.transition = 'font-size 0.3s ease'; // Add transition for text size
        });

        container.addEventListener('mouseleave', function() {
            // Revert image container to original state
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'; // Ensure transition on mouseout as well

            // Revert text to original size
            bannerText.style.fontSize = '5em'; // Original text size
            bannerText.style.transition = 'font-size 0.3s ease'; // Ensure transition on text size mouseout
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    const contactForm = document.querySelector('.contact-form'); // Get the contact form element

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('active');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('active');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 85)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });

        // Handle contact form visibility based on scroll position
        if (contactForm) {
            if (elementInView(contactForm, 85)) {
                // Form is in view, make it visible
                contactForm.classList.add('form-visible');
            } else {
                // Form is out of view, hide it
                contactForm.classList.remove('form-visible');
            }
        }
    };

    // Initial check
    handleScrollAnimation();

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // ... rest of your Javascript ...
});
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Dropdown functionality
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            if (window.innerWidth < 768) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });

        if (window.innerWidth >= 768) {
            item.addEventListener('mouseenter', function () {
                this.classList.add('active');
            });

            item.addEventListener('mouseleave', function () {
                this.classList.remove('active');
            });
        }
    });

    // Search functionality
    const searchForm = document.querySelector('.search-container');
    const searchInput = searchForm?.querySelector('input');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
            }
        });
    }

    // Image Slider Functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    let currentIndex = 0;
    let slideInterval;

    function updateSlider() { // S廙苔 廙� �齅▕, b廙� tham s廙� index
        if (!slider) return;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // t穩nh to獺n currentIndex 廙� �齅▕
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // t穩nh to獺n currentIndex 廙� �齅▕
        updateSlider();
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    if (prevArrow) prevArrow.addEventListener("click", () => { prevSlide(); stopAutoSlide(); startAutoSlide(); });
    if (nextArrow) nextArrow.addEventListener("click", () => { nextSlide(); stopAutoSlide(); startAutoSlide(); });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index; // g獺n currentIndex tr廙帷 ti廕穆 t廙� index c廙吧 dot
            updateSlider();
            stopAutoSlide();
            startAutoSlide();
        });
    });

    const sliderContainer = document.querySelector(".slider-container");
    if (sliderContainer) {
        sliderContainer.addEventListener("mouseenter", stopAutoSlide);
        sliderContainer.addEventListener("mouseleave", startAutoSlide);
    }

    startAutoSlide();
    // Handle responsive menu
    function handleResponsive() {
        if (window.innerWidth >= 768) {
            navMenu?.classList.remove('active');
        }
    }

    window.addEventListener('resize', handleResponsive);
    handleResponsive();
});


// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('active');
    };
    
    const hideScrollElement = (element) => {
        element.classList.remove('active');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 85)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Initial check
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Parallax effect for taco icons
    window.addEventListener('mousemove', function(e) {
        const taco1 = document.getElementById('taco1');
        const taco2 = document.getElementById('taco2');
        
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        taco1.style.transform = `translate(${x * 20}px, ${y * 20}px) rotate(${15 + x * 10}deg)`;
        taco2.style.transform = `translate(${x * -15}px, ${y * 15}px) rotate(${-10 - y * 10}deg)`;
    });

    // Text highlight animation
    const yearHighlights = document.querySelectorAll('.year-highlight');
    yearHighlights.forEach(highlight => {
        setInterval(() => {
            highlight.style.color = '#c84c28';
            setTimeout(() => {
                highlight.style.color = '#ffbe0b';
            }, 800);
            setTimeout(() => {
                highlight.style.color = '#c84c28';
            }, 1600);
        }, 3000);
    });

    // Add subtle pulse animation to paragraphs
    const paragraphs = document.querySelectorAll('.history-box p');
    paragraphs.forEach((paragraph, index) => {
        setInterval(() => {
            paragraph.style.textShadow = '0 0 1px rgba(200, 76, 40, 0.3)';
            setTimeout(() => {
                paragraph.style.textShadow = 'none';
            }, 800);
        }, 3000 + (index * 1000));
    });
});

