function toggleNavbar() {
  var navbara = document.getElementById("link_a");
  var navbarb = document.getElementById("link_b");
  var navbarc = document.getElementById("link_c");
  var navbard = document.getElementById("link_d");
  var navbare = document.getElementById("link_e");
  if (navbara.style.display === "none") {
    navbara.style.display = "block";
  } else {
    navbara.style.display = "none";
  }
  if (navbarb.style.display === "none") {
    navbarb.style.display = "block";
  } else {
    navbarb.style.display = "none";
  }
  if (navbarc.style.display === "none") {
    navbarc.style.display = "block";
  } else {
    navbarc.style.display = "none";
  }
  if (navbard.style.display === "none") {
    navbard.style.display = "block";
  } else {
    navbard.style.display = "none";
  }
  if (navbare.style.display === "none") {
    navbare.style.display = "block";
  } else {
    navbare.style.display = "none";
  }
}

var year = new Date().getFullYear();
var copyrightText = document.createTextNode("\u00A9 " + year + " Ars Dev");
document.getElementById("copyright").appendChild(copyrightText);