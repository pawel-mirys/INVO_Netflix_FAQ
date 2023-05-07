export const FaqComponent = () => {
  const FaqComponent = document.querySelector('.faq-component');
  const faqAllQuestions = FaqComponent.querySelectorAll(
    '.faq-question-partial'
  );

  const handleQuestionResize = (questionToListen) => {
    const faqQuestion = questionToListen[0].target;
    const faqAnswer = faqQuestion.querySelector(
      '.faq-question-partial__answer'
    );
    faqQuestion.style.setProperty(
      '--faq-answer-height',
      `${faqAnswer.scrollHeight}px`
    );
  };

  const foldAllSiblingsQuestions = (clickedQuestion) => {
    faqAllQuestions.forEach((questionToFold) => {
      if (questionToFold != clickedQuestion) {
        questionToFold.removeAttribute('data-question-expanded');
      }
    });
  };

  faqAllQuestions.forEach((question) => {
    new ResizeObserver(handleQuestionResize).observe(question);

    const faqAnswer = question.querySelector('.faq-question-partial__answer');

    question.style.setProperty(
      '--faq-answer-height',
      `${faqAnswer.scrollHeight}px`
    );

    question.addEventListener('click', () => {
      question.toggleAttribute('data-question-expanded');
      foldAllSiblingsQuestions(question);
    });
  });
};
