  document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-button');
            const menuItems = document.querySelectorAll('.menu-item');

            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    const category = this.dataset.category;

                    menuItems.forEach(item => {
                        if (category === 'all' || item.dataset.category === category) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
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



    
    // Initial check
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

   // Khi trang �齅� t廕ξ xong, th廙帷 thi �鰂廕》 m瓊 b礙n d⑹廙𢹂
document.addEventListener('DOMContentLoaded', function() {
    // L廕疸g nghe s廙� ki廙𡵞 di chuy廙�n chu廙脌 tr礙n to�慙 c廙苔 s廙�
    window.addEventListener('mousemove', function(e) {
        // L廕句 c獺c ph廕吵 t廙� c籀 ID 'taco1' v�� 'taco2'
        const taco1 = document.getElementById('taco1'); // Ph廕吵 t廙� taco th廙� nh廕另
        const taco2 = document.getElementById('taco2'); // Ph廕吵 t廙� taco th廙� hai
        
        // T穩nh to獺n v廙� tr穩 chu廙脌 d⑹廙𢹂 d廕》g ph廕吵 tr�m so v廙𢹂 k穩ch th⑹廙𢲷 c廙苔 s廙�
        const x = e.clientX / window.innerWidth;  // T廙� l廙� theo chi廙�u ngang
        const y = e.clientY / window.innerHeight;   // T廙� l廙� theo chi廙�u d廙㷼
        
        // C廕計 nh廕負 thu廙緽 t穩nh transform cho taco1: d廙醶h chuy廙�n v�� xoay theo t廙� l廙� chu廙脌
        taco1.style.transform = `translate(${x * 20}px, ${y * 20}px) rotate(${15 + x * 10}deg)`;
        // C廕計 nh廕負 thu廙緽 t穩nh transform cho taco2: d廙醶h chuy廙�n ng⑹廙θ l廕【 v�� xoay theo t廙� l廙� chu廙脌
        taco2.style.transform = `translate(${x * -15}px, ${y * 15}px) rotate(${-10 - y * 10}deg)`;
    });

    // Text highlight animation: chuy廙�n �𤒹�飃 m�抦 ch廙� cho c獺c ph廕吵 t廙� c籀 class 'year-highlight'
    const yearHighlights = document.querySelectorAll('.year-highlight');
    yearHighlights.forEach(highlight => {
        setInterval(() => { // L廕搆 l廕【 m廙𡟙 3 gi璽y
            highlight.style.color = '#c84c28';  // �靟�飃 sang m�抦 �𤒹�� cam
            setTimeout(() => {
                highlight.style.color = '#ffbe0b'; // Sau 800ms �𤒹�飃 sang m�抦 v�慙g
            }, 800);
            setTimeout(() => {
                highlight.style.color = '#c84c28'; // Sau 1600ms quay l廕【 m�抦 �𤒹�� cam
            }, 1600);
        }, 3000);
    });

    // Pulse animation cho c獺c �鰂廕》 v�n trong .history-box
    const paragraphs = document.querySelectorAll('.history-box p');
    paragraphs.forEach((paragraph, index) => {
        setInterval(() => { // M廙𡟙 kho廕τg th廙𩥉 gian t穩nh theo index (�𤒹� t廕︽ hi廙杮 廙姊g xen k廕�)
            paragraph.style.textShadow = '0 0 1px rgba(200, 76, 40, 0.3)'; // Th礙m hi廙杮 廙姊g b籀ng nh廕�
            setTimeout(() => {
                paragraph.style.textShadow = 'none'; // Sau 800ms, x籀a hi廙杮 廙姊g b籀ng
            }, 800);
        }, 3000 + (index * 1000)); // M廙𡟙 �鰂廕》 c籀 �𤒹�� tr廙� kh獺c nhau
    });
});


// JavaScript cho website Tica's Taco
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle: chuy廙�n �𤒹�飃 hi廙�n th廙� menu khi nh廕叼 v�䰄 n繳t mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show'); // Th礙m ho廕搾 lo廕【 b廙� l廙徱 'show' �𤒹� hi廙�n th廙� menu
        });
    }
    
    // Dropdown menu functionality for desktop & mobile
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    dropdownItems.forEach(item => {
        // Cho thi廕篙 b廙� di �𤒹�㷌g: b廕負 dropdown khi nh廕叼
        item.addEventListener('click', function(e) {
            if (window.innerWidth < 768) {
                e.preventDefault(); // Ng�n ch廕搖 h�慙h �𤒹�㷌g m廕搾 �𤒹�𡃉h (v穩 d廙�: chuy廙�n trang)
                this.classList.toggle('active'); // Chuy廙�n �𤒹�飃 tr廕》g th獺i active
            }
        });
        
        // Cho desktop: hi廙�n th廙� dropdown khi di chu廙脌 v�䰄 v�� 廕姊 khi r廙𩥉 chu廙脌
        if (window.innerWidth >= 768) {
            item.addEventListener('mouseenter', function() {
                this.classList.add('active'); // Th礙m l廙徱 active khi di chu廙脌 v�䰄
            });
            item.addEventListener('mouseleave', function() {
                this.classList.remove('active'); // Lo廕【 b廙� l廙徱 active khi di chu廙脌 ra
            });
        }
    });
    
    // Search functionality: x廙� l羸 form t穫m ki廕禦
    const searchForm = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-container input');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ng�n ch廕搖 form submit m廕搾 �𤒹�𡃉h
            const searchTerm = searchInput.value.trim(); // L廕句 t廙� kh籀a v�� lo廕【 b廙� kho廕τg tr廕疸g
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`); // Hi廙�n th廙� th繫ng b獺o t廙� kh籀a
                // C籀 th廙� t穩ch h廙φ ch廙妾 n�ng t穫m ki廕禦 th廙帷 t廕� 廙� �齅▕
            }
        });
    }
    
    // T廕︽ pattern ch矇o cho hero section (n廕簑 c廕吵)
    function createDiagonalPattern() {
        const hero = document.getElementById('hero');
        if (hero) {
            // Ch廙� n�懢 c籀 th廙� th礙m m瓊 t廕︽ SVG ho廕搾 pattern ph廙妾 t廕︾
            console.log('Hero section pattern applied');
        }
    }
    createDiagonalPattern();
    
    // Responsive adjustments: x廙� l羸 menu khi thay �𤒹�飃 k穩ch th⑹廙𢲷 c廙苔 s廙�
    function handleResponsive() {
        const width = window.innerWidth;
        if (width >= 768) {
            navMenu.classList.remove('show'); // 廕盯 menu mobile n廕簑 k穩ch th⑹廙𢲷 c廙苔 s廙� l廙𣌟
        }
    }
    
    // L廕疸g nghe s廙� ki廙𡵞 thay �𤒹�飃 k穩ch th⑹廙𢲷 c廙苔 s廙�
    window.addEventListener('resize', handleResponsive);
    handleResponsive();
});


// Scroll reveal animation cho About Section
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-container");

    function revealOnScroll() {
        const sectionTop = aboutSection.getBoundingClientRect().top; // V廙� tr穩 tr礙n m�慙 h穫nh
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            aboutSection.classList.add("show"); // Hi廙�n th廙� section khi n廕彩 trong viewport
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Ki廙�m tra ngay khi trang t廕ξ n廕簑 section �齅� n廕彩 trong viewport
});


// Scroll reveal cho Featured Dishes Section
document.addEventListener("DOMContentLoaded", function () {
    const featuredSection = document.querySelector("#featured-dishes");
    const dishCards = document.querySelectorAll(".dish-card");

    function revealOnScroll() {
        const sectionTop = featuredSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            featuredSection.classList.add("show"); // Hi廙�n th廙� section khi cu廙㷌 �𤒹瑪n

            // Hi廙�n th廙� t廙南g card v廙𢹂 �𤒹�� tr廙� kh獺c nhau �𤒹� t廕︽ hi廙杮 廙姊g
            dishCards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 200);
            });
            // Lo廕【 b廙� s廙� ki廙𡵞 scroll sau khi ch廕『 xong
            window.removeEventListener("scroll", revealOnScroll);
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});


// S廙� d廙叩g Intersection Observer cho c獺c icon-item
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".icon-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // N廕簑 ph廕吵 t廙� xu廕另 hi廙𡵞 trong viewport, th礙m class 'visible'
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    // N廕簑 kh繫ng, lo廕【 b廙� class 'visible' �𤒹� cho ph矇p animation l廕搆 l廕【
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.3 } // Khi 30% ph廕吵 t廙� xu廕另 hi廙𡵞, g廙幂 callback
    );

    items.forEach((item) => {
        observer.observe(item); // Theo d繭i t廙南g ph廕吵 t廙�
    });
});


// Kh廙齚 t廕︽ th⑹ vi廙𡵞 AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
});


// S廙� d廙叩g Intersection Observer cho c獺c ph廕吵 t廙� 廕姊 (.hidden) v�� hi廙�n th廙� khi cu廙㷌
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Hi廙�n th廙� ph廕吵 t廙� khi xu廕另 hi廙𡵞
            } else {
                entry.target.classList.remove("show"); // 廕盯 ph廕吵 t廙� khi kh繫ng c簷n trong viewport (n廕簑 mu廙𤉋)
            }
        });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
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


// �懚》h d廕只 menu hi廙𡵞 t廕【 d廙帶 tr礙n URL
document.addEventListener("DOMContentLoaded", function() {
    let currentPage = window.location.pathname.split("/").pop(); // L廕句 t礙n file hi廙𡵞 t廕【 t廙� URL
    let menuItems = document.querySelectorAll(".nav-menu a");
    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("active"); // Th礙m l廙徱 'active' v�䰄 menu t⑹①ng 廙姊g
        }
    });
});
 document.addEventListener("DOMContentLoaded", function () {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100); // Delay ensures proper execution
            }
        }
    });