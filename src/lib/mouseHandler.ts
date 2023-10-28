window.addEventListener("mousemove", (e) => {
  const el = e.target as HTMLElement;
  if (el.classList.contains("card")) {
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", e.clientX - rect.x - 88 + "px");
    el.style.setProperty("--mouse-y", e.clientY - rect.y - 88 + "px");

    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;

    const percentageY = (e.clientX - centerX) / (centerX - rect.x);
    const percentageX = (e.clientY - centerY) / (centerY - rect.y);

    const maxDegrees = 10;

    el.style.setProperty("--rotate-y", -percentageY * maxDegrees + "deg");
    el.style.setProperty("--rotate-x", percentageX * maxDegrees + "deg");
  }
});
