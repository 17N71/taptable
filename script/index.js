const menuOc = document.querySelector("button[type='button'].menu-oc"); // !
const listContainer = document.getElementsByClassName("list-container")[0];
const aboutbtn = document.getElementsByClassName("aboutbtn")[0];
const condCooper = document.getElementsByClassName("condcooper")[0];
const aboutCompanyTitle = document.querySelector(".about_company-title");
const listLink = document.querySelectorAll("a.list-link");
const dataRotate = document.querySelectorAll("[data-rotate]"); // ! sarqel foreach ov
const dataRotateSet = Array.from(dataRotate);
const regBtn = document.getElementsByClassName("reg-btn")[0];
const register = document.querySelector(".register");
const form = document.querySelector(".modal form")[0];
const login = document.querySelector(".login");
const modalClose = document.querySelector("button.modal-close");
const modalCont = document.querySelector(".modal-container");
const modal = document.getElementsByClassName("modal")[0];
const atrSrc = document.getElementsByClassName("atr-src")[0];
const toTop = document.getElementsByClassName("to-top")[0];
const termsOfCooperationTitle = document.getElementsByClassName(
  "terms_of_cooperation-title"
)[0];
let flagRotate = false;
// all variables
const arrOfLinks = Array.from(listLink);
// array of all link from header
arrOfLinks.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
});
modal.addEventListener("click", function (mev) {
  mev.stopPropagation();
});

// turn off link event
menuOc.addEventListener("click", function () {
  listContainer.classList.toggle("active");
  if (listContainer.classList.contains("active")) {
    listContainer.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    document.body.addEventListener("click", function () {
      listContainer.classList.remove("active");
    });
  }
});
// menu open and close
function viewfunc(element) {
  setTimeout(() => {
    element.scrollIntoView({ blok: "center", behavior: "smooth" });
    listContainer.classList.remove("active");
  }, 100);
}

aboutbtn.addEventListener("click", () => viewfunc(aboutCompanyTitle), true);
condCooper.addEventListener(
  "click",
  () => viewfunc(termsOfCooperationTitle),
  true
);
//  scroll into 'About company' section
dataRotateSet.forEach((item) => {
  item.addEventListener("click", function () {
    flagRotate = !flagRotate;
    if (flagRotate) {
      register.style.cssText = `
    opacity: 1;
    visibility: visible;
    transform: rotateY(0deg);
  `;
      login.style.cssText = `
    opacity: 0;
    visibility: hidden;
    transform: rotateY(180deg);
  `;
    }
    if (flagRotate == false) {
      register.style.cssText = `
    opacity: 0;
    visibility: hidden;
    transform: rotateY(180deg);
  `;
      login.style.cssText = `
    opacity: 1;
    visibility: visible;
    transform: rotateY(0deg);
  `;
    }
  });
});

regBtn.addEventListener("click", function () {
  modal.classList.add("modified");
  document.body.classList.add("lock");
  document.body.style.paddingRight = "10px";
});
modalClose.addEventListener("click", function () {
  document.body.classList.remove("lock");
  modal.classList.remove("modified");
  document.body.style.paddingRight = "0px";
});
//  ! atropos
function atroposCall() {
  const myAtropos1 = Atropos({
    el: ".at1",
  });
  const myAtropos2 = Atropos({
    el: ".at2",
  });
  const myAtropos3 = Atropos({
    el: ".at3",
  });
  const myAtropos4 = Atropos({
    el: ".at4",
  });
  const myAtropos5 = Atropos({
    el: ".at5",
  });
  const myAtropos6 = Atropos({
    el: ".at6",
  });
}
if (window.innerWidth >= 768) {
  atroposCall();
}
// END ATROPOS
window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    atroposCall();
  }
});
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop >= 150) {
    toTop.classList.add("scrolled");
  } else {
    toTop.classList.remove("scrolled");
  }
});
const toTopScroll = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, 100);
};
toTop.addEventListener("click", toTopScroll, true);

modalCont.addEventListener("click", function (e) {
  e.stopPropagation();
});
modal.addEventListener("click", function () {
  modal.classList.remove("modified");
  document.body.classList.remove("lock");
  document.body.style.paddingRight = "0px";
});
