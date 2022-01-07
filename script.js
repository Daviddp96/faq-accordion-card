const accordionItems = document.querySelectorAll('.accordion-list__item');

function openQuestion(accordionItem) {
    const question = accordionItem.querySelector('.question');
    const questionArrow = question.querySelector('.question__arrow');
    const answer = accordionItem.querySelector('.answer');

    question.classList.add('question--selected');
    questionArrow.classList.add('question__arrow--rotate-up');

    answer.classList.add('answer--expanded');

    accordionItem.classList.add('active');
}

function closeQuestion(accordionItem) {
    const question = accordionItem.querySelector('.question');
    const questionArrow = question.querySelector('.question__arrow');
    const answer = accordionItem.querySelector('.answer');

    question.classList.remove('question--selected');
    questionArrow.classList.remove('question__arrow--rotate-up');

    answer.classList.remove('answer--expanded');

    accordionItem.classList.remove('active');
}

for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener('click', function() {
        if(accordionItems[i].classList.contains('active')) {
            closeQuestion(accordionItems[i]);
        } else {
            for(let j = 0; j < accordionItems.length; j++) {
                closeQuestion(accordionItems[j]);
            }
            openQuestion(accordionItems[i]);
        }
    });
}