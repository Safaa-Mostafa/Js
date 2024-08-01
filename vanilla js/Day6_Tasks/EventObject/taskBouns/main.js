function appear(TypeElement, i) {
  const el = document.querySelector(`#${TypeElement}`);
  if (TypeElement == "password") {
    const type = el.getAttribute("type") === "text" ? "password" : "text";
    console.log(type);
    el.setAttribute("type", type);
    if (i.classList.contains("fa-eye-slash")) {
      i.classList.add("fa-eye");
      i.classList.remove("fa-eye-slash");
    } else {
      i.classList.add("fa-eye-slash");
      i.classList.remove("fa-eye");
    }
  } else {
    const type = el.getAttribute("type") === "text" ? "password" : "text";
    el.setAttribute("type", type);
    if (i.classList.contains("fa-eye-slash")) {
      i.classList.add("fa-eye");
      i.classList.remove("fa-eye-slash");
    } else {
      i.classList.add("fa-eye-slash");
      i.classList.remove("fa-eye");
    }
  }
}
