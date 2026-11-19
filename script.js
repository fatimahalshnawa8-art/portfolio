document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio JS connected successfully!");
 
  const contactLink = document.querySelector('#contact a[href^="mailto:"]');
  if (contactLink) {
    contactLink.addEventListener("click", () => {
      console.log("Opening contact email client...");
    });
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.type = "button";
  toggleBtn.id = "theme-toggle";
  toggleBtn.setAttribute("aria-label", "Toggle color mode");

  const updateIcon = (isDark) => {
    toggleBtn.textContent = isDark ? "◐" : "🌙";
  };

  const savedDark = localStorage.getItem("theme") === "dark";
  if (savedDark) {
    document.body.classList.add("dark-mode");
  }
  updateIcon(savedDark);

  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    updateIcon(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});
