/**
 * Drivon Stackx - Core Engine (Stable v3)
 * Исправлена проблема "пустых карточек" и точность ScrollTrigger.
 */

window.addEventListener('load', () => {
    // Регистрация плагина и первая отрисовка иконок
    gsap.registerPlugin(ScrollTrigger);
    lucide.createIcons();

    /** 1. МОБИЛЬНОЕ МЕНЮ */
    const initMobileMenu = () => {
        const burger = document.querySelector('#burger');
        const menu = document.querySelector('#mobile-menu');
        const links = document.querySelectorAll('.mobile-link');
        if (!burger || !menu) return;

        const toggle = () => {
            const isActive = menu.classList.toggle('mobile-menu--active');
            burger.classList.toggle('burger--active');
            document.body.style.overflow = isActive ? 'hidden' : '';
            if (isActive) {
                gsap.fromTo(links, { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, delay: 0.2 });
            }
        };
        burger.addEventListener('click', toggle);
        links.forEach(link => link.addEventListener('click', toggle));
    };

    /** 2. THREE.JS HERO */
    const initHero3D = () => {
        const canvas = document.querySelector('#hero-canvas');
        if (!canvas || window.innerWidth < 768) return;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.z = 30;

        const group = new THREE.Group();
        const geometry = new THREE.IcosahedronGeometry(10, 1);
        const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x4a3b34, wireframe: true, transparent: true, opacity: 0.2 }));
        const points = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xc5a687, size: 0.4 }));
        group.add(mesh, points);
        scene.add(group);

        const animate = () => {
            requestAnimationFrame(animate);
            group.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();
    };

    /** 3. HERO TEXT */
    const initHeroText = () => {
        const title = document.querySelector('.hero__title');
        if (!title) return;
        new SplitType(title, { types: 'words' });
        gsap.timeline()
            .from('.hero__badge', { opacity: 0, y: 20 })
            .from('.hero__title .word', { opacity: 0, y: 30, stagger: 0.05, duration: 0.8 })
            .from('.hero__subtitle, .hero__btns', { opacity: 0, y: 20, stagger: 0.1 }, "-=0.4");
    };

    /** 4. СТРАТЕГИИ - ИСПРАВЛЕННАЯ ПОДГРУЗКА */
    const initStrategies = () => {
        const cards = document.querySelectorAll('.strategy-card');
        if (cards.length === 0) return;

        cards.forEach((card) => {
            // Ищем внутренние элементы
            const icon = card.querySelector('.strategy-card__icon');
            const title = card.querySelector('.strategy-card__title');
            const text = card.querySelector('.strategy-card__text');
            const num = card.querySelector('.strategy-card__number');

            // Основной таймлайн появления карточки
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });

            // Анимируем "К" финальному состоянию (opacity: 1)
            tl.to(card, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
              .from(icon, { scale: 0.5, opacity: 0, duration: 0.4 }, "-=0.3")
              .from([title, text], { y: 15, opacity: 0, stagger: 0.1, duration: 0.4 }, "-=0.2")
              .from(num, { x: 20, opacity: 0, duration: 0.4 }, "-=0.2");
        });
    };

    /** 5. ОСТАЛЬНЫЕ МОДУЛИ */
    const initCases = () => {
        if (document.querySelector('.cases-slider')) {
            new Swiper('.cases-slider', {
                loop: true,
                pagination: { el: '.swiper-pagination', clickable: true },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            });
        }
    };

    const initContactForm = () => {
        const form = document.querySelector('#contact-form');
        if (!form) return;
        const captchaEl = document.querySelector('#captcha-question');
        const n1 = Math.floor(Math.random()*10), n2 = Math.floor(Math.random()*10);
        if (captchaEl) captchaEl.innerText = `${n1} + ${n2} = ?`;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const ans = parseInt(document.querySelector('#captcha-answer').value);
            if (ans === (n1 + n2)) {
                document.getElementById('form-message').className = "form__message form__message--success";
                document.getElementById('form-message').innerText = "Успешно отправлено!";
                form.reset();
                lucide.createIcons();
            }
        });
    };

    /** ЗАПУСК И ПЕРЕСЧЕТ */
    initMobileMenu();
    initHero3D();
    initHeroText();
    initStrategies();
    initCases();
    initContactForm();

    // Финальный штрих: пересчитываем всё после того, как иконки и шрифты встали
    setTimeout(() => {
        ScrollTrigger.refresh();
        lucide.createIcons(); // Повторно на случай, если иконки внутри карт не отрисовались
    }, 500);
});