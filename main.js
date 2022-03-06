// alert('Xush kelibsiz');

const allButtons = document.querySelectorAll('.all-buttons');
const start = document.querySelector('.start');
const you = document.querySelector('.you');
const computer = document.querySelector('.bot');
const reset = document.querySelector('.reset');
const isWin = document.querySelector('.is-win');
const myScore = document.querySelector('.myScore');
const botScore = document.querySelector('.botScore');

const GUESSES = [{
        name: 'rock',
        emoji: '✊',
    },
    {
        name: 'paper',
        emoji: '✋',
    },
    {
        name: 'scissors',
        emoji: '✌️',
    }
];

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedName = e.target.dataset.selection;
        const selected = GUESSES.find(sel => sel.name === selectedName);
        you.textContent = selected.emoji;
    });

    start.addEventListener('click', () => {
        if (you.textContent === '') return;
        const random = Math.floor(Math.random() * GUESSES.length);
        const bot = GUESSES[random];
        computer.textContent = bot.emoji;

        howItWorks(bot, you);

        if (myScore.textContent == '3') {
            alert("G'olib bo'ldingiz 😎");
            resetAll();
        }
        if (botScore.textContent == '3') {
            alert("Mag'lub bo'ldingiz 😧");
            resetAll();
        }
    });
    reset.onclick = resetAll;
});

function resetAll () {
    myScore.textContent = 0;
    botScore.textContent = 0;
    isWin.textContent = '';
    you.textContent = '';
    computer.textContent = '';
}

function howItWorks(bot, you) {
    if (you.textContent == '✊') {
        if (bot.name == 'paper') {
            isWin.textContent = 'Yutqazdingiz';
            isWin.style.color = 'red';
            botScore.textContent = Number(botScore.textContent) + 1;
        } else if (bot.name == 'scissors') {
            isWin.textContent = 'Yutdingiz';
            isWin.style.color = 'green';
            myScore.textContent = Number(myScore.textContent) + 1;
        } else {
            isWin.textContent = 'Durrang';
            isWin.style.color = 'blue';
            myScore.textContent = Number(myScore.textContent) + 0;
            botScore.textContent = Number(botScore.textContent) + 0;
        }
    }
    if (you.textContent == '✌️') {
        if (bot.name == 'rock') {
            isWin.textContent = 'Yutqazdingiz';
            isWin.style.color = 'red';
            botScore.textContent = Number(botScore.textContent) + 1;
        } else if (bot.name == 'paper') {
            isWin.textContent = 'Yutdingiz';
            isWin.style.color = 'green';
            myScore.textContent = Number(myScore.textContent) + 1;
        } else {
            isWin.textContent = 'Durrang';
            isWin.style.color = 'blue';
            myScore.textContent = Number(myScore.textContent) + 0;
            botScore.textContent = Number(botScore.textContent) + 0;
        }
    }
    if (you.textContent == '✋') {
        if (bot.name == 'rock') {
            isWin.textContent = 'Yutdingiz';
            isWin.style.color = 'green';
            myScore.textContent = Number(myScore.textContent) + 1;

        } else if (bot.name == 'scissors') {
            isWin.textContent = 'Yutqazdingiz';
            isWin.style.color = 'red';
            botScore.textContent = Number(botScore.textContent) + 1;
        } else {
            isWin.textContent = 'Durrang';
            isWin.style.color = 'blue';
            myScore.textContent = Number(myScore.textContent) + 0;
            botScore.textContent = Number(botScore.textContent) + 0;
        }
    }
}