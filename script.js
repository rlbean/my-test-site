console.log("Site script connected!");

// ===== Footer year (Lesson 5) =====
const yearSpan = document.querySelector("#year");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===== Copy email button (Lesson 6)=====
const copyBtn = document.querySelector("#copy-email");

if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("hello@example.com");
    copyBtn.textContent = "Copied!";
  });
}

// ===== Mobile menu (Lesson 7) =====
const menuBtn = document.querySelector("#menu-btn");
const mainNav = document.querySelector("#main-nav");

if(menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    const isOpen = mainNav.classList.contains("open");
    menuBtn.textContent = isOpen ? "\u2715 Close" : "\u2261 Menu";
  });
}

// ===== Dark mode (Lesson 8) =====
const themeBtn = document.querySelector("#theme-btn");

if(themeBtn){
  themeBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// ===== Tabs (Lesson 9) =====
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabPanels.forEach((p) => p.classList.remove("active"));

    button.classList.add("active");
    const panel = document.querySelector("#" + button.dataset.tab);
    panel.classList.add("active");
  });
});

// ===== Contact form (Lesson 10) =====
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const charCount = document.querySelector("#char-count");

if(contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    formStatus.textContent = `Thanks, ${name}! (Demo for: messages are not sent yet.)`;

    contactForm.reset();
    if(charCount) {
      charCount.textContent = "0 / 300";
    }
  });
}

//Character counter
const messageBox = document.querySelector("#message");
//const charCount = document.querySelector("#char-count");

if(messageBox && charCount) {
  messageBox.addEventListener("input", () => {
    charCount.textContent = `${messageBox.value.length} / 300`;
  });
}