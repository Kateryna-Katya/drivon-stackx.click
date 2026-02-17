/* Drivon Stackx - Core Engine 
   Dependencies: GSAP, ScrollTrigger, Three.js, Swiper, SplitType, Lucide
*/

document.addEventListener('DOMContentLoaded', () => {
    // 0. Initialization
    lucide.createIcons();
    gsap.registerPlugin(ScrollTrigger);

    // 1. MOBILE MENU LOGIC
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        burger.classList.toggle('burger--active');
        mobileMenu.classList.toggle('mobile-menu--active');
        document.body.style.overflow = mobileMenu.classList.contains('mobile-menu--active') ? 'hidden' : '';
        
        if(mobileMenu.classList.contains('mobile-menu--active')) {
            gsap.to(mobileLinks, {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                delay: 0.3,
                ease: "power2.out"
            });
        }
    };

    burger.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

    // 2. THREE.JS HERO BACKGROUND (Optimized)
    const initHeroScene = () => {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas || window.innerWidth < 768) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const group = new THREE.Group();
        const geometry = new THREE.BufferGeometry();
        const points = [];
        for (let i = 0; i < 200; i++) {
            points.push((Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60);
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
        
        const material = new THREE.PointsMaterial({ color: 0xc5a687, size: 0.2 });
        const system = new THREE.Points(geometry, material);
        group.add(system);
        scene.add(group);

        const animate = () => {
            requestAnimationFrame(animate);
            group.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    };

    // 3. HERO TEXT ANIMATION
    const initHeroText = () => {
        const title = new SplitType('.hero__title', { types: 'words' });
        gsap.from(title.words, {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            ease: "power4.out",
            delay: 0.5
        });
        gsap.from('.hero__badge, .hero__btns', {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 1
        });
    };

    // 4. DEEP STRATEGIES ANIMATION (The "Deep" Part)
    const initStrategies = () => {
        const cards = document.querySelectorAll('.strategy-card');
        
        cards.forEach((card) => {
            const icon = card.querySelector('.strategy-card__icon');
            const title = card.querySelector('.strategy-card__title');
            const text = card.querySelector('.strategy-card__text');
            const num = card.querySelector('.strategy-card__number');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });

            tl.from(card, { scale: 0.9, opacity: 0, duration: 0.6 })
              .from(icon, { y: 20, opacity: 0, duration: 0.4 }, "-=0.2")
              .from(title, { x: -20, opacity: 0, duration: 0.4 }, "-=0.2")
              .from(text, { opacity: 0, duration: 0.4 }, "-=0.2")
              .from(num, { scale: 0, opacity: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3");
        });
    };

    // 5. SWIPER & BLOG
    const initSliders = () => {
        new Swiper('.cases-slider', {
            loop: true,
            pagination: { el: '.swiper-pagination' },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
        });
    };

    // 6. FORM LOGIC & CAPTCHA
    const initForm = () => {
        const form = document.getElementById('contact-form');
        if(!form) return;

        const captchaEl = document.getElementById('captcha-question');
        const n1 = Math.floor(Math.random() * 10), n2 = Math.floor(Math.random() * 10);
        captchaEl.innerText = `${n1} + ${n2} = ?`;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const ans = document.getElementById('captcha-answer').value;
            if(parseInt(ans) === (n1+n2)) {
                const msg = document.getElementById('form-message');
                msg.innerText = "Успешно отправлено!";
                msg.className = "form__message form__message--success";
                form.reset();
            } else {
                alert("Ошибка капчи");
            }
        });
    };

    // 7. COOKIES
    const initCookies = () => {
        const popup = document.getElementById('cookie-popup');
        if(!localStorage.getItem('cookie_ok')) {
            setTimeout(() => popup.classList.add('cookie-popup--show'), 2000);
        }
        document.getElementById('cookie-accept').onclick = () => {
            localStorage.setItem('cookie_ok', 'true');
            popup.classList.remove('cookie-popup--show');
        };
    };

    // RUN ALL
    initHeroScene();
    initHeroText();
    initStrategies();
    initSliders();
    initForm();
    initCookies();
});