// 2초 후 커서 애니메이션 제거
setTimeout(() => {
  const title = document.querySelector(".title");
  title.style.borderRight = "none";
}, 3500); // 타이핑 애니메이션 시간과 동일

const title = document.querySelector(".title");
const startBtn = document.querySelector(".start-button");

// 타이핑 애니메이션은 2초, steps(4, end)
// 끝난 후 버튼 보이도록 2초 뒤 실행
setTimeout(() => {
  startBtn.classList.add("show-button");
}, 4200); // 타이핑 애니메이션 지속 시간과 동일하게 설정
