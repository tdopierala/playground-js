document.addEventListener('DOMContentLoaded', () => {
    console.log('Doom');

    // card options
    const cardArray = [
        {
            name: 'mountain',
            img: 'img/wallhaven-3z369y.jpg',
            points: 10,
        },
        {
            name: 'mountain',
            img: 'img/wallhaven-3z369y.jpg',
            points: 10,
        },
        {
            name: 'plane',
            img: 'img/wallhaven-3zqdjv.jpg',
            points: 10,
        },
        {
            name: 'plane',
            img: 'img/wallhaven-3zqdjv.jpg',
            points: 10,
        },
        {
            name: 'tape',
            img: 'img/wallhaven-72jql3.jpg',
            points: 10,
        },
        {
            name: 'tape',
            img: 'img/wallhaven-72jql3.jpg',
            points: 10,
        },
        {
            name: 'astronaut',
            img: 'img/wallhaven-e73xxw.jpg',
            points: 10,
        },
        {
            name: 'astronaut',
            img: 'img/wallhaven-e73xxw.jpg',
            points: 10,
        },
        {
            name: 'city',
            img: 'img/wallhaven-l3z3vr.jpg',
            points: 10,
        },
        {
            name: 'city',
            img: 'img/wallhaven-l3z3vr.jpg',
            points: 10,
        },
        {
            name: 'car',
            img: 'img/wallhaven-rdqmk1.jpg',
            points: 10,
        },
        {
            name: 'car',
            img: 'img/wallhaven-rdqmk1.jpg',
            points: 10,
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const cardsChosen = [];
    const cardsChosenId = [];
    const cardsWon = [];
    let clicks = 0;
    let points = 0;

    const date = new Date();
    let time = (date.getTime() + (1000 * 60 * 1)) - date.getTime();
    printTime(time);

    document.querySelector('#clicks').textContent = clicks;
    document.querySelector('#found').textContent = cardsWon.length;
    document.querySelector('#points').textContent = points;
    //document.querySelector('#max').textContent = cardArray.length*10;

    let timeInterval = setInterval(() => {
        time -= 1000;

        if(time <= 0) {
            clearInterval(timeInterval);

            const h2 = document.querySelector('h2');
            h2.textContent = 'Time out! Game Over! You have lost!';
            h2.style.display = 'block';
        }

        printTime(time);
    }, 1000);

    function printTime(time) {
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        document.querySelector('#time').textContent = `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
    }
    
    
    function choseCard(e) {
        clicks++;
        
        let cardId = e.target.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        
        e.target.setAttribute('src', cardArray[cardId].img);
        
        if(cardsChosen.length === 2) {
            setTimeout(() => {
                
                const cards = document.querySelectorAll('img');
                let optOneId, optTwoId;
                [optOneId, optTwoId] = cardsChosenId;
                
                if(cardsChosen[0] === cardsChosen[1]) {
                    //cards[optOneId].setAttribute('src', 'img/white.jpg');
                    //cards[optTwoId].setAttribute('src', 'img/white.jpg');
                    cards[optOneId].style.opacity = 0.5;
                    cards[optTwoId].style.opacity = 0.5;
                    cards[optOneId].removeEventListener('click', choseCard, false);
                    cards[optTwoId].removeEventListener('click', choseCard, false);
                    cardsWon.push(cardsChosen);
                    
                    points += cardArray[optOneId].points;
                    points += cardArray[optTwoId].points;

                } else {

                    cards[optOneId].setAttribute('src', 'img/blank.jpg');
                    cards[optTwoId].setAttribute('src', 'img/blank.jpg');
                    cardArray[optOneId].points--;
                    cardArray[optTwoId].points--;
                }
                
                if(cardsWon.length === cardArray.length/2) {
                    clearInterval(timeInterval);
                    points += Math.floor(time/1000);

                    const h2 = document.querySelector('h2');
                    h2.textContent = 'Congratulations! You found them all!';
                    h2.style.display = 'block';
                }
                
                document.querySelector('#found').textContent = cardsWon.length;
                document.querySelector('#points').textContent = points;
                
                cardsChosen.length = 0;
                cardsChosenId.length = 0;

            }, 500);
        }

        document.querySelector('#clicks').textContent = clicks;

    }

    // create game board

    (function() {
        for (let i = 0; i < cardArray.length; i++) {
    
            let card = document.createElement('img');
            card.setAttribute('src', 'img/blank.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', choseCard);
    
            grid.appendChild(card);
        }
    })();
    
});