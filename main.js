let questions = [{
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was ist HTML?",
        "answer_1": "Eine Rockband",
        "answer_2": "die Sprache des Internets",
        "answer_3": "Eine TV-Sendung",
        "answer_4": "Ein Code für Mitgliedschaft",
        "right_answer": 2
    },
    {
        "question": "Was ist ein Tag?",
        "answer_1": "Ein Wochentag",
        "answer_2": "Ein Stempel",
        "answer_3": "Sind Symbole, um Inhalte einzuschließen",
        "answer_4": "Eine seltene Süßigkeit aus der Schweiz",
        "right_answer": 3
    },
    {
        "question": "Was ist ein Attribut in HTML?",
        "answer_1": "die Stärke eines Menschens",
        "answer_2": "Eine Superheldenkraft",
        "answer_3": "Ein Artikel in der Zeitung",
        "answer_4": "Eine zusätzliche Information, die ein Tag beinhaltet",
        "right_answer": 4
    },
    {
        "question": "Was ist CSS?",
        "answer_1": "Ist eine Sprache, um Elemente im HTML zu beschreiben",
        "answer_2": "Wird genutzt um Wasser zum Kochen zu bringen",
        "answer_3": "Wird genutzt um die Schulnoten der Schüler zu bestimmen",
        "answer_4": "Is eine Sprache der Ägypter",
        "right_answer": 1
    },
    {
        "question": "Was ist der Unterschied zwischen HTML und CSS?",
        "answer_1": "HTML wird genutzt, um im Weltall mit Ausserirdischen zu kommunizieren",
        "answer_2": "gar kein Unterschied",
        "answer_3": "HTML bestimmt den Inhalt der Website und CSS definiert das Aussehen des Inhaltes",
        "answer_4": "CSS wird genutzt, um nach Gold graben zu können",
        "right_answer": 3
    },
    {
        "question": "Was ist ein Z-Index?",
        "answer_1": "Bezeichnent bei CSS die Ebene, in der das Element angezeigt wird",
        "answer_2": "Das ist eine Version des Pokedex",
        "answer_3": "Eine Titelmelodie eines Videospieles",
        "answer_4": "Es ist ein Rapper-Name",
        "right_answer": 1
    }
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    document.getElementById('progess-bar').innerHTML = ` 0 %`;
    document.getElementById('progess-bar').style = `width: 0%;`;

}
showQuestions();

function showQuestions() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressbar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none;';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = ('QuizappImg/tropy.png');
}

function updateProgressbar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progess-bar').innerHTML = `${percent} %`;
    document.getElementById('progess-bar').style = `width: ${percent}%;`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}



function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        theAnswerIsRight(selection);
    } else {
        theAnswerIswrong(selection, idOfRightAnswer);
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer']
}

function theAnswerIsRight(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    AUDIO_SUCCESS.play();
    rightQuestions++;
}

function theAnswerIswrong(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    AUDIO_FAIL.play();
}



function nextQuestion() {
    currentQuestion++; // zb von 0 auf 1

    document.getElementById('next-button').disabled = true;

    resetAnswerButtons();
    showQuestions();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function restartGame() {
    document.getElementById('header-image').src = 'QuizappImg/brainbg.jpg';
    document.getElementById('end-screen').style = 'display: none;'; // Endscreen ausblenden
    document.getElementById('question-body').style = ''; // Questionscreen wieder einblenden

    rightQuestions = 0;
    currentQuestion = 0;
    init();
}