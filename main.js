// ready start
$(document).ready(() => {
  // click tank
  $('#tank').on("click", () => {
    $('#tankMenu').toggle();
  });
  // click damage
  $('#damage').on("click", () => {
    $('#damageMenu').toggle();
  });
  // click support
  $('#support').on("click", () => {
    $('#supportMenu').toggle();
  });
});
  // ready end
