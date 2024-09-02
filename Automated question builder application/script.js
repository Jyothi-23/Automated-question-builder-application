document.addEventListener("DOMContentLoaded", function() {
    const questionContainer = document.getElementById('question-container');
    const addQuestionBtn = document.getElementById('add-question-btn');
    const generateQuestionsBtn = document.getElementById('generate-questions-btn');
    const output = document.getElementById('output');

    // Function to add a new question block
    function addQuestion() {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const questionInput = document.createElement('input');
        questionInput.type = 'text';
        questionInput.className = 'question-input';
        questionInput.placeholder = 'Enter your question here';

        const answersDiv = document.createElement('div');
        answersDiv.className = 'answers';

        const answerInput1 = document.createElement('input');
        answerInput1.type = 'text';
        answerInput1.className = 'answer-input';
        answerInput1.placeholder = 'Enter answer option 1';

        const answerInput2 = document.createElement('input');
        answerInput2.type = 'text';
        answerInput2.className = 'answer-input';
        answerInput2.placeholder = 'Enter answer option 2';

        answersDiv.appendChild(answerInput1);
        answersDiv.appendChild(answerInput2);

        const addAnswerBtn = document.createElement('button');
        addAnswerBtn.className = 'add-answer-btn';
        addAnswerBtn.textContent = 'Add another answer';

        addAnswerBtn.addEventListener('click', function() {
            addAnswer(answersDiv);
        });

        questionDiv.appendChild(questionInput);
        questionDiv.appendChild(answersDiv);
        questionDiv.appendChild(addAnswerBtn);

        questionContainer.appendChild(questionDiv);
    }

    // Function to add a new answer input
    function addAnswer(answersDiv) {
        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.className = 'answer-input';
        answerInput.placeholder = 'Enter another answer option';

        answersDiv.appendChild(answerInput);
    }

    // Function to generate the questions and answers and display them
    function generateQuestions() {
        const questions = document.querySelectorAll('.question');
        output.innerHTML = '';  // Clear previous output

        questions.forEach((question, index) => {
            const questionText = question.querySelector('.question-input').value;
            const answers = question.querySelectorAll('.answer-input');
            const answerTexts = [];

            answers.forEach((answer) => {
                answerTexts.push(answer.value);
            });

            const questionOutput = document.createElement('div');
            questionOutput.className = 'question-output';
            questionOutput.innerHTML = <h3>Question ${index + 1}: ${questionText}</h3>;

            answerTexts.forEach((answerText, i) => {
                const answerOutput = document.createElement('p');
                answerOutput.textContent = ${i + 1}. ${answerText};
                questionOutput.appendChild(answerOutput);
            });

            output.appendChild(questionOutput);
        });
    }

    // Event listeners
    addQuestionBtn.addEventListener('click', addQuestion);
    generateQuestionsBtn.addEventListener('click', generateQuestions);

    // Add the first question by default
    addQuestion();
});