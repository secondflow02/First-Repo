window.onload = function () {
  const changeText = document.getElementById("display");
  changeText.textContent = "안녕하세요 반갑습니다";
};

const $changeColor = document.querySelectorAll(".tab");
const $selectText = document.querySelectorAll(".block");
$changeColor.forEach((el) => {
  el.addEventListener("click", (event) => {
    const { target } = event;
    $changeColor.forEach((el) => {
      if (el.classList.contains("on")) {
        el.classList.remove("on");
      }
      target.classList.add("on");
    });

    $selectText.forEach((l) => {
      if (!l.innerHTML.includes(el.innerHTML)) {
        l.style.display = "none";
      } else l.style.display = "block";
    });
  });
});
