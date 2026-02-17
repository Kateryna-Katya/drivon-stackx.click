<?php

$fullDomain = strtolower($_SERVER['HTTP_HOST'] ?? '');
$fullDomain = explode(':', $fullDomain)[0];

$parts = explode('.', $fullDomain);
$domainSlug = count($parts) >= 2
        ? $parts[count($parts) - 2]
        : $fullDomain;

$domainTitle = ucwords(str_replace('-', ' ', $domainSlug));

?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 24H12V26H6V24ZM6 18H18V20H6V18ZM6 12H26V14H6V12ZM6 6H26V8H6V6Z' fill='%23c5a687'/%3E%3Cpath d='M22 18L26 14L30 18' stroke='%23c5a687' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?= $domainTitle ?> — Карьерный апгрейд и стратегии роста
    </title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
        rel="stylesheet">

    <script src="https://unpkg.com/lucide@latest"></script>

    <link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
</head>

<body>

    <header class="header" id="header">
        <div class="container header__container">
            <a href="./#hero" class="logo">
                <span class="logo__text">
                    <?= $domainTitle ?>
                </span>
            </a>

            <nav class="nav" id="nav">
                <ul class="nav__list">
                    <li><a href="./#hero" class="nav__link">Главная</a></li>
                    <li><a href="./#strategies" class="nav__link">Стратегии</a></li>
                    <li><a href="./#experience" class="nav__link">Экспертиза</a></li>
                    <li><a href="./#cases" class="nav__link">Кейсы</a></li>
                    <li><a href="./#blog" class="nav__link">Блог</a></li>
                </ul>
            </nav>

            <a href="./#contact" class="btn btn--outline header__btn">
                <span>Связаться</span>
                <i data-lucide="arrow-up-right"></i>
            </a>

<button class="burger" id="burger" aria-label="Открыть меню">
    <div class="burger__line"></div>
    <div class="burger__line"></div>
    <div class="burger__line"></div>
</button>
        </div>
    </header>
    <main class="legal-page">
    <section class="pages">
        <div class="container">
            <span class="section-tag">Privacy Policy</span>
            <h1>Политика конфиденциальности</h1>

            <div class="legal-content">
                <div class="policy-hero-card">
                    <p>
                        Политика конфиденциальности распространяется на персональные данные,
                        предоставляемые клиентами <strong><?= $domainTitle ?></strong>, как для оказания услуг по карьерному консультированию, так и для других взаимодействий в электронном
                        формате.
                    </p>
                </div>

                <div class="policy-notice">
                    <p>
                        <strong><?= $domainTitle ?></strong> оставляет за собой право вносить изменения в положения Политики. Обратите внимание, что наши услуги могут содержать ссылки на ресурсы третьих лиц. Предоставляя свои данные, вы даете полное согласие на их обработку способами, предусмотренными настоящей Политикой в соответствии с GDPR и законодательством Великобритании.
                    </p>
                </div>

                <h2>Порядок сбора, хранения и уничтожения</h2>
                <div class="storage-info">
                    <div class="storage-item">
                        <i data-lucide="history"></i>
                        <span>Срок хранения до <strong>75 лет</strong></span>
                    </div>
                    <div class="storage-item">
                        <i data-lucide="user-check"></i>
                        <span>Только с вашего согласия</span>
                    </div>
                </div>
                
                
                
                <p>
                    Для предотвращения утечки данных мы используем полный комплекс мер информационной безопасности. Уничтожение или блокирование данных осуществляется по запросу клиента или при достижении целей сбора.
                </p>

                <div class="data-collection-grid">
                    <div class="data-box">
                        <h3><i data-lucide="cpu"></i> Техническая информация</h3>
                        <ul>
                            <li>IP-адрес и время доступа</li>
                            <li>Источники перехода на <strong><?= $fullDomain ?></strong></li>
                            <li>Данные браузера и просмотры блоков</li>
                        </ul>
                    </div>
                    <div class="data-box">
                        <h3><i data-lucide="contact"></i> Персонализация</h3>
                        <ul>
                            <li>Имя пользователя</li>
                            <li>E-mail и номер телефона</li>
                            <li>Данные о контрактах и услугах</li>
                        </ul>
                    </div>
                </div>

                <h2>Цели обработки персональных данных</h2>
                <ul class="legal-list">
                    <li>Предоставление доступа к инновационной платформе карьерного роста.</li>
                    <li>Учет пожеланий при разработке новых стратегий и решений.</li>
                    <li>Информирование об акциях и материалах экспертного блога.</li>
                    <li>Обеспечение качественной обратной связи.</li>
                </ul>

                <h2>Использование Cookies</h2>
                <p>
                    Файлы cookie позволяют нам анализировать трафик и сохранять ваши предпочтения (например, настройки региона Великобритания), чтобы сделать использование <strong><?= $fullDomain ?></strong> удобнее. Вы можете отключить их в настройках браузера.
                </p>

                <div class="rights-block">
                    <h2>Ваши права</h2>
                    <p>
                        Если вы хотите отредактировать свои данные или прекратить их обработку, свяжитесь с командой <strong><?= $domainTitle ?></strong>:
                    </p>
                    <a href="mailto:support@<?= $fullDomain ?>" class="contact-btn">support@<?= $fullDomain ?></a>
                </div>
            </div>
        </div>
    </section>
</main>


    <footer class="footer">
        <div class="container">
            <div class="footer__grid">
                <div class="footer__col">
                    <a href="./#hero" class="logo logo--footer">
                        <span class="logo__text">
                            <?= $domainTitle ?>
                        </span>
                    </a>
                    <p class="footer__description">
                        Технологии, которые работают на вас. Постройте карьеру, которая станет вашим главным активом в
                        эпоху перемен.
                    </p>
                </div>

                <div class="footer__col">
                    <h4 class="footer__title">Навигация</h4>
                    <ul class="footer__menu">
                        <li><a href="./#hero">Главная</a></li>
                        <li><a href="./#strategies">Стратегии роста</a></li>
                        <li><a href="./#experience">Ваша экспертиза</a></li>
                        <li><a href="./#cases">История успеха</a></li>
                    </ul>
                </div>

                <div class="footer__col">
                    <h4 class="footer__title">Документы</h4>
                    <ul class="footer__menu">
                        <li><a href="./privacy.php">Privacy Policy</a></li>
                        <li><a href="./cookies.php">Cookie Policy</a></li>
                        <li><a href="./terms.php">Terms of Use</a></li>
                        <li><a href="./return.php">Refund Policy</a></li>
                        <li><a href="./disclaimer.php">Disclaimer</a></li>
                        <li><a href="./personal-data-policy.php">Data Policy</a></li>
                    </ul>
                </div>

                <div class="footer__col">
                    <h4 class="footer__title">Контакты</h4>
                    <ul class="footer__contacts">
                        <li>
                            <i data-lucide="phone"></i>
                            <a href="tel:+442008571973">+44 20 0857 1973</a>
                        </li>
                        <li>
                            <i data-lucide="mail"></i>
                            <a href="mailto:hello@<?= $fullDomain ?>">hello@
                                <?= $fullDomain ?>
                            </a>
                        </li>
                        <li>
                            <i data-lucide="map-pin"></i>
                            <span>24 Old Bond St, London W1S 4AL, United Kingdom</span>
                        </li>
                    </ul>
                    <a href="./contact.php" class="footer__link-contact">Страница контактов</a>
                </div>
            </div>

            <div class="footer__bottom">
                <p>&copy;
                    <?= date('Y') ?>
                    <?= $domainTitle ?>. Все права защищены. Предложение активно в странах ЕС и Великобритании.
                </p>
            </div>
        </div>
    </footer>
    <div class="mobile-menu" id="mobile-menu">
        <nav class="mobile-nav">
            <ul>
                <li><a href="./#hero" class="mobile-link">Главная</a></li>
                <li><a href="./#strategies" class="mobile-link">Стратегии</a></li>
                <li><a href="./#experience" class="mobile-link">Экспертиза</a></li>
                <li><a href="./#cases" class="mobile-link">Кейсы</a></li>
                <li><a href="./#blog" class="mobile-link">Блог</a></li>
                <li><a href="./#contact" class="mobile-link">Связаться</a></li>
            </ul>
        </nav>
    </div>
<div id="cookie-popup" class="cookie-popup">
    <div class="cookie-popup__content">
        <p>Этот сайт использует cookies для улучшения работы. Подробнее — в нашей <a href="./cookies.php">Cookie
                политике</a>.</p>
        <button id="cookie-accept" class="btn btn--outline btn--small">Принять</button>
    </div>
</div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://unpkg.com/split-type"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="script.js"></script>
</body>

</html>