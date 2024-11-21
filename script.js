const inputArr = [
    {
        name: "hippo",
        icone: '<i class="fa-solid fa-hippo"></i>'
    },
    {
        name: "cow",
        icone: '<i class="fa-solid fa-cow"></i>'
    },
    {
        name: "otter",
        icone: '<i class="fa-solid fa-otter"></i>'
    },
    {
        name: "paw",
        icone: '<i class="fa-solid fa-paw"></i>'
    },
    {
        name: "fish",
        icone: '<i class="fa-solid fa-fish"></i>'
    },
    {
        name: "spider",
        icone: '<i class="fa-solid fa-spider"></i>'
    },
    {
        name: "hippo",
        icone: '<i class="fa-solid fa-hippo"></i>'
    },
    {
        name: "cow",
        icone: '<i class="fa-solid fa-cow"></i>'
    },
    {
        name: "otter",
        icone: '<i class="fa-solid fa-otter"></i>'
    },
    {
        name: "paw",
        icone: '<i class="fa-solid fa-paw"></i>'
    },
    {
        name: "fish",
        icone: '<i class="fa-solid fa-fish"></i>'
    },
    {
        name: "spider",
        icone: '<i class="fa-solid fa-spider"></i>'
    }

];
let totalclick=0;

let count =0;

let flippedCard = [];

shuffeCards();

const gamebord = document.getElementById('root');

displayCard();

function shuffeCards() {
    for (i = inputArr.length - 1; i >= 0; i--) {
        const randemIndex = Math.floor(Math.random() * (i + 1));
        [inputArr[i], inputArr[randemIndex]] = [inputArr[randemIndex], inputArr[i]];

    }
}

function displayCard() {
    inputArr.forEach((curr, index, arr) => {
        const card = document.createElement('div');
        card.setAttribute('id', index);
        card.setAttribute("class", 'bg-red-500 text-[#FA6845] h-[80px] sm:h-[100px] sm:w-[80px]  border-4 border-[#2A5159] cursor-pointer flex items-center justify-center active')
        gamebord.appendChild(card);
        card.addEventListener('click', flipCard);

    })
}

function flipCard() {
    if (flippedCard.length < 2 && this.classList.contains('active')) {
        let cardId = this.getAttribute('id');
        flippedCard.push(this);
        this.classList.remove('bg-red-500', 'mx-auto', 'cursor-pointer');
        totalclick++;
        console.log('nnnnnnnnnnnnnnnnnnn');
        this.innerHTML = inputArr[cardId].icone;
        console.log(flippedCard)
        if (flippedCard.length == 2) {
            setTimeout(chackMatch,400);
        }
    }
}

function chackMatch() {
    const card1Id = flippedCard[0].getAttribute('id')
    const card2Id = flippedCard[1].getAttribute('id')
    if (inputArr[card1Id].name === inputArr[card2Id].name) {
        flippedCard[0].classList.remove('active');
        flippedCard[1].classList.remove('active');
        count++;
        console.log(`count is : ${count}`)
        console.log(`arr is : ${inputArr.length/2}`)
        chackgame();
    }
    else {
        flippedCard[0].innerHTML = '';
        flippedCard[0].classList.add('bg-red-500',  'cursor-pointer');
        flippedCard[1].innerHTML = '';
        flippedCard[1].classList.add('bg-red-500', 'cursor-pointer');
    }

    flippedCard = [];
}

function chackgame(){
    if(count == inputArr.length/2){
        const reset = document.getElementById('reset');
        const end = document.getElementById('end');
        const total = document.getElementById('totalclick')
        end.classList.remove('hidden')
        console.log(reset);
        console.log(end);
        total.textContent=`Total click: ${totalclick}`;
        console.log(totalclick);
        reset.addEventListener('click',()=>{
            while (gamebord.firstChild) {
                gamebord.removeChild(gamebord.firstChild);
            }
            count =0;
            flippedCard = [];
            totalclick=0;
            end.classList.add('hidden')
            displayCard();
        })
                
        // gamebord.innerHTML='You won!';
        // gamebord.innerHTML.setAttribute('class','text 3xl ')
    }
}