document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    e.preventDefault();
    const url = e.target.href;

    document.startViewTransition(() => {
      window.location.href = url;
    });
  }
});

// const payApi = document.getElementById("payApi");
// const characterCounter = document.getElementById("characterCounter");
// const moodLogger = document.getElementById("moodLogger");

// payApi.addEventListener("click", () => {
//   document.location.href = "https://github.com/AAKKUS1/projet3-pay-api";
// });
// characterCounter.addEventListener("click", () => {
//   document.location.href = "https://github.com/AAKKUS1/AAKKUS1.github.io";
// });
// moodLogger.addEventListener("click", () => {
//   document.location.href =
//     "https://github.com/AAKKUS1/exam-final-dom-javascript";
// });
