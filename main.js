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

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestions();
}

function showQuestions() {
    let question = questions[currentQuestion];
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

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disable = false;
}

function nextQuestion() {
    currentQuestion++; // zb von 0 auf 1

    document.getElementById('next-button').disable = true;

    resetAnswerButtons();
    showQuestions();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.cloneNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.cloneNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.cloneNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.cloneNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.cloneNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.cloneNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.cloneNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.cloneNode.classList.remove('bg-danger');
}