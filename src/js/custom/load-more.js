function openPanel(panel) {
  panel.setAttribute("aria-hidden", "false");
  panel.style.height = panel.scrollHeight + "px";
  const onEnd = () => {
    panel.style.height = "auto";
    panel.removeEventListener("transitionend", onEnd);
  };
  panel.addEventListener("transitionend", onEnd);
}

function closePanel(panel) {
  panel.style.height = panel.scrollHeight + "px";
  requestAnimationFrame(() => {
    panel.style.height = "0px";
  });
  const onEnd = () => {
    panel.setAttribute("aria-hidden", "true");
    panel.removeEventListener("transitionend", onEnd);
  };
  panel.addEventListener("transitionend", onEnd);
}

document.querySelectorAll(" .expand-btn").forEach((btn) => {
  const panel = document.getElementById(btn.getAttribute("aria-controls"));
  if (!panel) return;
  panel.style.height = "0px";
  panel.setAttribute("aria-hidden", "true");
  btn.addEventListener("click", () => {
    btn.setAttribute("aria-expanded", "true");
    openPanel(panel);
    btn.style.display = "none";
  });
});
