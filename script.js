const menus = [...document.getElementsByClassName("menu")];
const triggers = [...document.getElementsByClassName("menu-trigger")];

triggers.map((trigger) => {
  trigger.addEventListener("click", () => {
    menus.map((menu) => {
      menu.classList.toggle("ativo");
    });
  });
});
