document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");
    const moveUpElements = document.querySelectorAll(".move-up");

    function checkScroll() {
        const triggerPoint = window.innerHeight * 0.75;

        fadeInElements.forEach((element) => {
            if (element.getBoundingClientRect().top < triggerPoint) {
                element.style.opacity = "1";
                element.style.transform = "translateX(0)";
            }
        });

        moveUpElements.forEach((element) => {
            if (element.getBoundingClientRect().top < triggerPoint) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
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

    // Search functionality (c籀 th廙� 廕τh h⑹廙俲g �𤒹瑪n hi廙�n th廙� header)
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

    // Handle responsive menu
    function handleResponsive() {
        if (window.innerWidth >= 768) {
            navMenu?.classList.remove('active');
        }
    }

    window.addEventListener('resize', handleResponsive);
    handleResponsive();
});

// JavaScript for Tica's Taco Restaurant Website (ph廕吵 n�懢 c籀 v廕� l�� l廕搆 l廕【)
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Dropdown menu functionality for desktop+++++++++++++++++++++
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
    
    // Add diagonal pattern to hero section (kh繫ng li礙n quan �𤒹瑪n header nh⑹ng �𤒹� �齅▕ �𤒹� b廕》 tham kh廕υ)
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
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const navMenu = document.querySelector("nav ul");

    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        menuBtn.classList.toggle("active");
    });
});

