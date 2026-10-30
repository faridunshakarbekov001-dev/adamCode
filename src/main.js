const projects = [
  {
    slug: "forma",
    title: "Forma Studio",
    subtitle: "Вещи, которые остаются.",
    year: "2025",
    role: "Fullstack · Архитектура приложения",
    type: "E-commerce",
    stack: "PHP · Laravel · MySQL · Stripe",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Светлый интерьер с предметами предметного дизайна",
    color: "sand",
    summary:
      "Независимой студии предметного дизайна нужен был интернет-магазин, который объединит выразительный каталог, безопасное оформление заказа и удобное управление товарами.",
    challenge:
      "Каталог с вариантами товаров обновлялся вручную, заказы приходили из нескольких каналов, а оформление покупки требовало лишних шагов.",
    solution:
      "Создал приложение на Laravel: каталог и корзину, обработку заказов, интеграцию оплаты и административную панель. Настроил реляционную схему данных и серверную валидацию.",
    result:
      "Каталог, оплата и управление заказами работают в одной системе. Путь от выбора товара до заказа стал короче, а обновления каталога команда выполняет самостоятельно.",
    metric: "+32%",
    metricLabel: "к конверсии в корзину",
  },
  {
    slug: "northstar",
    title: "Northstar",
    subtitle: "Понятная картина роста.",
    year: "2024",
    role: "Fullstack · API · Аналитика",
    type: "SaaS",
    stack: "PHP · Laravel · PostgreSQL · Redis",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Аналитические графики на экране ноутбука",
    color: "blue",
    summary:
      "Northstar собирает ключевые бизнес-метрики SaaS-команды в одном месте. Нужна была серверная основа, которая надёжно агрегирует данные и отдаёт их через API интерфейсу панели.",
    challenge:
      "Данные поступали из нескольких источников, отчёты обновлялись с задержкой, а доступ к финансовым метрикам нужно было разграничить между ролями.",
    solution:
      "Разработал Laravel API, фоновые задачи для импорта метрик и ролевую авторизацию. PostgreSQL хранит историю показателей, Redis ускоряет часто используемые сводки.",
    result:
      "Отчёты обновляются автоматически, доступ к данным контролируется ролями, а команда может подключать новые источники через API.",
    metric: "−60%",
    metricLabel: "времени на еженедельный отчёт",
  },
  {
    slug: "fieldnotes",
    title: "Field Notes",
    subtitle: "Истории, которые ведут дальше.",
    year: "2024",
    role: "Fullstack · CMS · Производительность",
    type: "Editorial",
    stack: "PHP · WordPress · MySQL · JavaScript",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Горный пейзаж в мягком вечернем свете",
    color: "green",
    summary:
      "Field Notes — журнал независимых авторов о путешествиях. Редакции нужна была понятная CMS, чтобы самостоятельно управлять публикациями, авторами и медиа.",
    challenge:
      "Редакторы не могли менять структуру публикаций без помощи разработчика, а неоптимизированные изображения замедляли сайт.",
    solution:
      "Настроил WordPress на PHP с типами записей для статей и авторов, редакторскими ролями и шаблонами публикаций. Добавил оптимизацию изображений и адаптивный frontend на HTML, CSS и JavaScript.",
    result:
      "Редакция самостоятельно управляет материалами и авторами, а страницы быстро загружаются на мобильных устройствах.",
    metric: "0.2с",
    metricLabel: "до первого содержимого",
  },
  {
    slug: "kinfolk",
    title: "Kinfolk Market",
    subtitle: "Маленький маркет с большим выбором.",
    year: "2023",
    role: "Fullstack · E-commerce · Интеграции",
    type: "Marketplace",
    stack: "PHP · Symfony · MySQL · Stripe",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=90",
    imageAlt: "Покупатель оплачивает покупку банковской картой",
    color: "pink",
    summary:
      "Маркетплейс объединяет независимые бренды и позволяет покупателю оформить одну корзину с товарами от разных продавцов.",
    challenge:
      "Нужно было разделить каталог, продавцов, остатки и заказы, сохранив единый checkout и корректный расчёт оплаты.",
    solution:
      "Построил backend на Symfony и MySQL: профили продавцов, каталог, общую корзину, оформление заказа и интеграцию с платёжным шлюзом. Добавил проверку данных и обработку статусов оплаты.",
    result:
      "Покупатель оформляет общий заказ, а продавцы управляют собственными товарами через отдельные роли и административные страницы.",
    metric: "1 заказ",
    metricLabel: "для нескольких независимых брендов",
  },
];

const currentPath = window.location.pathname.split("/").pop() || "index.html";
const currentSection =
  currentPath === "index.html" ? "home" : currentPath.replace(".html", "");

document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.dataset.nav === currentSection)
    link.setAttribute("aria-current", "page");
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Открыть меню" : "Закрыть меню",
  );
  siteNav?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Открыть меню");
    siteNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  });
});

const filterButtons = document.querySelectorAll("[data-filter]");
const filterCards = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    filterCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const projectRoot = document.querySelector("#project-detail");

if (projectRoot) {
  const slug = new URLSearchParams(window.location.search).get("slug");
  const project = projects.find((item) => item.slug === slug);

  if (project) {
    const nextProject =
      projects[(projects.indexOf(project) + 1) % projects.length];
    document.title = `${project.title} — Алекс Морозов`;
    projectRoot.innerHTML = `
      <section class="case-intro page-wrap">
        <a class="case-back" href="projects.html"><span aria-hidden="true">←</span> Все проекты</a>
        <p class="eyebrow"><span class="eyebrow-line"></span> ${project.type} · ${project.year}</p>
        <div class="case-title-row"><h1>${project.title}<span class="accent-dot">.</span></h1><p>${project.subtitle}</p></div>
        <div class="case-hero-image case-${project.color}"><img src="${project.image}" alt="${project.imageAlt}" /><span class="case-hero-caption">${project.title} · ${project.year}</span></div>
        <div class="case-meta"><div><span>Моя роль</span><strong>${project.role}</strong></div><div><span>Направление</span><strong>${project.type}</strong></div><div><span>Инструменты</span><strong>${project.stack}</strong></div><div><span>Год</span><strong>${project.year}</strong></div></div>
      </section>
      <section class="case-overview page-wrap"><p class="eyebrow">01 — Контекст</p><div class="case-overview-copy"><h2>Задача — сделать сложное простым<span class="accent-dot">.</span></h2><p>${project.summary}</p></div></section>
      <section class="case-split page-wrap"><article><span class="case-step">02 — Вызов</span><h2>Что мешало</h2><p>${project.challenge}</p></article><article><span class="case-step">03 — Решение</span><h2>Что изменили</h2><p>${project.solution}</p></article></section>
      <section class="case-outcome page-wrap"><div><p class="eyebrow">04 — Результат</p><h2>Работа, которую<br />можно измерить<span class="accent-dot">.</span></h2><p>${project.result}</p></div><div class="metric-block"><strong>${project.metric}</strong><span>${project.metricLabel}</span></div></section>
      <section class="case-next page-wrap"><p class="eyebrow">Следующий кейс</p><a href="project.html?slug=${nextProject.slug}">${nextProject.title} <span>↗</span></a></section>
      <section class="page-cta page-wrap"><p class="eyebrow">Есть похожая задача?</p><a href="contact.html" class="cta-link">Давайте обсудим <span>↗</span></a></section>
    `;
  } else {
    document.title = "Проект не найден — Алекс Морозов";
    projectRoot.innerHTML =
      '<section class="page-wrap project-not-found"><p class="eyebrow">Кейс не найден</p><h1>Похоже, ссылка<br />устарела<span class="accent-dot">.</span></h1><a class="button button-dark" href="projects.html">Все проекты <span aria-hidden="true">↗</span></a></section>';
  }
}

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = String(formData.get("name"));
  const email = String(formData.get("email"));
  const type = String(formData.get("project-type"));
  const message = String(formData.get("message"));
  const subject = encodeURIComponent(`Проект: ${type} — ${name}`);
  const body = encodeURIComponent(`${message}\n\nОт: ${name}\nEmail: ${email}`);

  if (formStatus) formStatus.textContent = "Открываю ваше почтовое приложение…";
  window.location.href = `mailto:hello@alexmorozov.dev?subject=${subject}&body=${body}`;
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
