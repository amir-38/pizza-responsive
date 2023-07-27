const tabs = document.querySelectorAll(".lin");

const tabContent = document.querySelectorAll(".tab");
for (let lin of tabs) {
  lin.addEventListener("click", function () {
    del();
    lin.classList.add("active");
    tabDel();
    const target = lin.dataset.tabTarget;
    const targetEleme = document.querySelector(target);
    targetEleme.classList.add("active");
  });
}
function del() {
  for (let lin of tabs) {
    lin.classList.remove("active");
  }
}
function tabDel() {
  for (tab of tabContent) {
    tab.classList.remove("active");
  }
}
