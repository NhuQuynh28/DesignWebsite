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
    // For mobile
    if (window.innerWidth < 768) {
        item.addEventListener('click', function(e) {
            // Only prevent default if clicking directly on the main item
            // Allow clicks to propagate normally for child links
            if (e.target === this || e.target.classList.contains('dropdown-toggle')) {
                e.preventDefault();
                this.classList.toggle('active');
            }
            // Links inside will work normally
        });
    }
    
    // For desktop
    if (window.innerWidth >= 768) {
        item.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        item.addEventListener('mouseleave', function() {
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


// JavaScript for Tica's Taco Restaurant Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Dropdown menu functionality for desktop
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    
    dropdownItems.forEach(item => {
        // For mobile touchscreen
        item.addEventListener('click', function(e) {
            if (window.innerWidth < 768) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
        
        // For desktop hover
        if (window.innerWidth >= 768) {
            item.addEventListener('mouseenter', function() {
                this.classList.add('active');
            });
            
            item.addEventListener('mouseleave', function() {
                this.classList.remove('active');
            });
        }
    });
    
	
	
    // Search functionality
    const searchForm = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-container input');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
                // Implement actual search functionality here
            }
        });
    }
    
    // Add diagonal pattern to hero section
    function createDiagonalPattern() {
        const hero = document.getElementById('hero');
        if (hero) {
            // Create SVG pattern if needed for more complex designs
            console.log('Hero section pattern applied');
        }
    }
    
    createDiagonalPattern();
    
    // Responsive adjustments
    function handleResponsive() {
        const width = window.innerWidth;
        
        // Adjust menu for different screen sizes
        if (width >= 768) {
            navMenu.classList.remove('show'); // Hide mobile menu if screen size increases
        }
    }
    
    // Listen for resize events
    window.addEventListener('resize', handleResponsive);
    
    // Initialize responsive adjustments
    handleResponsive();
});




document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-container");

    function revealOnScroll() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            aboutSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // G廙幂 ngay khi t廕ξ trang n廕簑 section �齅� n廕彩 trong viewport
});

document.addEventListener("DOMContentLoaded", function () {
    const featuredSection = document.querySelector("#featured-dishes");
    const dishCards = document.querySelectorAll(".dish-card");

    function revealOnScroll() {
        const sectionTop = featuredSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Ch廙� hi廙�n th廙� khi cu廙㷌 xu廙𤉋g �𤒹瑪n n籀
        if (sectionTop < windowHeight - 100) {
            featuredSection.classList.add("show");

            dishCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 200);
            });

            window.removeEventListener("scroll", revealOnScroll); // Ch廙� ch廕『 1 l廕吵
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});



document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".icon-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible"); // Animation ch廕『 l廕【 khi cu廙㷌 l礙n
                }
            });
        },
        { threshold: 0.3 }
    );

    items.forEach((item) => {
        observer.observe(item);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // B廙� �魀 n廕簑 mu廙𤉋 hi廙杮 廙姊g l廕搆 l廕【
            }
        });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", function () {
            // L廕句 ph廕吵 t廙� URL hi廙𡵞 t廕【
            let hash = window.location.hash;
            if (hash) {
                let target = document.querySelector(hash);
                if (target) {
                    setTimeout(() => {
                        target.scrollIntoView({ behavior: "smooth" });
                    }, 500);
                }
            }

            // X廙� l羸 cu廙㷌 m⑹廙ㄅ khi nh廕叩 v�䰄 link tr礙n trang home.html
            document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
                anchor.addEventListener("click", function (e) {
                    e.preventDefault();
                    let targetID = this.getAttribute("href").split("#")[1];
                    let targetElement = document.getElementById(targetID);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" });
                    }
                });
            });
        });
	
	
	document.addEventListener("DOMContentLoaded", function() {
            let currentPage = window.location.pathname.split("/").pop(); // L廕句 t礙n file hi廙𡵞 t廕【
            let menuItems = document.querySelectorAll(".nav-menu a");

            menuItems.forEach(item => {
                if (item.getAttribute("href") === currentPage) {
                    item.classList.add("active"); // Th礙m class 'active' v�䰄 menu hi廙𡵞 t廕【
                }
            });
        });
		
		
		document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash) {
        let target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth" });
            }, 100); // �靟誨i m廙脌 ch繳t �𤒹� trang t廕ξ xong r廙𧗽 cu廙㷌
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash) {
        let target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth" });
            }, 100); // �靟誨i m廙脌 ch繳t �𤒹� trang t廕ξ xong r廙𧗽 cu廙㷌
        }
    }
});


document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash) {
        let target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth" });
            }, 100); // �靟誨i m廙脌 ch繳t �𤒹� trang t廕ξ xong r廙𧗽 cu廙㷌
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // L廕句 tham s廙� t廙� URL
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTarget = urlParams.get("scroll");

    // N廕簑 c籀 tham s廙� scroll, cu廙㷌 �𤒹瑪n ph廕吵 t⑹①ng 廙姊g
    if (scrollTarget) {
      const targetElement = document.getElementById(scrollTarget);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
  
  
// Smooth scrolling cho c獺c li礙n k廕篙 c籀 class 'smooth-scroll'
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Ng�n h�慙h �𤒹�㷌g m廕搾 �𤒹�𡃉h c廙吧 th廕� <a>
            const targetId = this.getAttribute('href'); // L廕句 gi獺 tr廙� href (�齅苞h �𤒹瑪n)
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Cu廙㷌 �𤒹瑪n v廙� tr穩 c廙吧 ph廕吵 t廙� v廙𢹂 kho廕τg c獺ch �魀廙�u ch廙纤h 20px
                    behavior: "smooth" // Hi廙杮 廙姊g cu廙㷌 m⑹廙ㄅ
                });
            }
        });
    });
});


// Cu廙㷌 �𤒹瑪n ph廕吵 Reviews khi nh廕叼 v�䰄 n繳t c籀 ID 'scrollToReviews'
document.getElementById("scrollToReviews").addEventListener("click", function(event) {
    event.preventDefault(); // Ng�n h�慙h �𤒹�㷌g m廕搾 �𤒹�𡃉h c廙吧 th廕� <a>
    document.getElementById("testimonials").scrollIntoView({
        behavior: "smooth", // Hi廙杮 廙姊g tr⑹廙ㄅ m⑹廙ㄅ
        block: "start" // Cu廙㷌 �𤒹瑪n �𤒹漣u ph廕吵 t廙�
    });
});

 document.addEventListener("DOMContentLoaded", function () {
    // L廕句 tham s廙� t廙� URL
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTarget = urlParams.get("scroll");

    // N廕簑 c籀 tham s廙� scroll, cu廙㷌 �𤒹瑪n ph廕吵 t⑹①ng 廙姊g
    if (scrollTarget) {
      const targetElement = document.getElementById(scrollTarget);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  });