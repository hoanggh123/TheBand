function buyStickets() {
    document.getElementById("modal-buyStickets").style.position = "fixed";

    document.getElementById("modal-body-form").style.display = "block";
    document.getElementById("modal-body").style.animation =
      "fadeIn linear 0.5s";
  }
function closeBuyStickets() {
    document.getElementById("modal-buyStickets").style.position = "";

    document.getElementById("modal-body-form").style.display = "none";
    document.getElementById("modal-body").style.animation =
      "fadeIn linear 0.5s";
    
}