document.addEventListener('DOMContentLoaded', () => {

    // Header Scroll Effect
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');

            // Hamburger Animation (Optional: can add class and CSS for X shape)
            hamburger.classList.toggle('is-active');
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                hamburger.classList.remove('is-active');
            }
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust for fixed header
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Form Submission Prevent Default (for structural purposes)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('お問い合わせありがとうございます。このフォームはデモ用です。');
            form.reset();
        });
    }

    // FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-q');
        if (question) {
            question.addEventListener('click', () => {
                // オプション: 他のFAQを開いた時に今開いているものを閉じる場合は以下のコメントアウトを外す
                // faqItems.forEach(faq => {
                //     if (faq !== item) {
                //         faq.classList.remove('active');
                //     }
                // });
                item.classList.toggle('active');
            });
        }
    });
});
