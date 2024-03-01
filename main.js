const questions = [
  {
    question: "Are You Over The Age of 25?",
    answer: "",
  },
  {
    question: "Are you on Medicare or Medicaid?",
    answer: "",
  },
];
let questionIndex = 0;
const questionsContainer = document.getElementById("questions");
const questionContent = document.getElementById("question-content");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const congratulations_template = `
<div class=" text-center">
<h2 class=" border-t">CONGRATULATIONS,
    You're
    Eligible!</h2>
<p >
    <b>Last Step:</b>You must
    <span class="underline">Call Now</span>
    to receive your <span style="color:red;">Free Credits</span>
    with Medical, Dental &amp; Vision coverage.

</p>
<p >Call before enrollment closes!</p>
<a href="tel:+18882277051"

    class="  btn w-full block">Call
    Now (888) 227-7051</a>
<p >ACT FAST! Due to high call demand, your hotline will remain available for
    the
    next: <span >00:00</span> </p>
</div>

`;
questionContent.innerHTML = `<p class='question text-center'>${questions[questionIndex].question}</p>`;
yesButton.addEventListener("click", () => {
  if (questionIndex == 0) {
    questions[0].answer = "yes";
    return (questionContent.innerHTML = `<p class='question text-center'>${
      questions[++questionIndex].question
    }</p>`);
  }
  if (questions[questionIndex]) {
    questions[questionIndex].answer = "yes";
    if (questions[++questionIndex])
      return (questionContent.innerHTML = `<p class='question text-center'>${questions[questionIndex].question}</p>`);
    if (questions[0].answer == "no" && questions[1].answer == "no") {
      return (questionsContainer.innerHTML = congratulations_template);
    } else {
      return (questionsContainer.innerHTML = `
        <h2 class=" text-center">Unfortunately, we can't Qualify you at the moment</h2>
        `);
    }
  }
});
noButton.addEventListener("click", () => {
  if (questionIndex == 0) {
    questions[0].answer = "no";
    return (questionContent.innerHTML = `<p >${
      questions[++questionIndex].question
    }</p>`);
  }
  if (questions[questionIndex]) {
    questions[questionIndex].answer = "no";
    if (questions[++questionIndex])
      return (questionContent.innerHTML = `<p>${questions[questionIndex].question}</p>`);

    if (questions[0].answer == "no" && questions[1].answer == "no") {
      return (questionsContainer.innerHTML = congratulations_template);
    } else {
      return (questionsContainer.innerHTML = `
      <h2>Unfortunately, we can't Qualify you at the moment</h2>
      `);
    }
  }
});
