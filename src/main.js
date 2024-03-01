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
<div class="lg:py-5 lg:px-16 text-center">
<h2 class=" border-t-8 pt-10 text-4xl font-bold border-[#00007c]">CONGRATULATIONS,
    You're
    Eligible!</h2>
<p class="text-3xl   py-4 ">
    <b>Last Step:</b>You must
    <span class="underline">Call Now</span>
    to receive your <span class="text-red-400">Free Credits</span>
    with Medical, Dental &amp; Vision coverage.

</p>
<p class="text-3xl py-3">Call before enrollment closes!</p>
<a href="tel:+18882277051"
    class=" bg-blue-500 block w-full text-[25px] rounded-md font-bold text-white my-3 p-4">Call
    Now (888) 227-7051</a>
<p class="text-2xl py-2">ACT FAST! Due to high call demand, your hotline will remain available for
    the
    next: <span class="text-red-400">00:00</span> </p>
</div>

`;
questionContent.innerHTML = `<p class='w-fit mx-auto text-3xl p-3'>${questions[questionIndex].question}</p>`;
yesButton.addEventListener("click", () => {
  if (questionIndex == 0) {
    questions[0].answer = "yes";
    return (questionContent.innerHTML = `<p class='w-fit mx-auto text-3xl p-3'>${
      questions[++questionIndex].question
    }</p>`);
  }
  if (questions[questionIndex]) {
    questions[questionIndex].answer = "yes";
    if (questions[++questionIndex])
      return (questionContent.innerHTML = `<p class='w-fit mx-auto text-3xl p-3'>${questions[questionIndex].question}</p>`);
    if (questions[0].answer == "no" && questions[1].answer == "no") {
      return (questionsContainer.innerHTML = congratulations_template);
    } else {
      return (questionsContainer.innerHTML = `
        <h2 class=" max-md:text-2xl text-5xl pb-20 font-bold text-center">Unfortunately, we can't Qualify you at the moment</h2>
        `);
    }
  }
});
noButton.addEventListener("click", () => {
  if (questionIndex == 0) {
    questions[0].answer = "no";
    return (questionContent.innerHTML = `<p class='w-fit mx-auto text-3xl p-3'>${
      questions[++questionIndex].question
    }</p>`);
  }
  if (questions[questionIndex]) {
    questions[questionIndex].answer = "no";
    if (questions[++questionIndex])
      return (questionContent.innerHTML = `<p class='w-fit mx-auto text-3xl p-3'>${questions[questionIndex].question}</p>`);

    if (questions[0].answer == "no" && questions[1].answer == "no") {
      return (questionsContainer.innerHTML = congratulations_template);
    } else {
      return (questionsContainer.innerHTML = `
      <h2 class="text-xl font-bold text-center">Unfortunately, we can't Qualify you at the moment</h2>
      `);
    }
  }
});
