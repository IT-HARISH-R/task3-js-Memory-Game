loading();

function loading(){

    const load = document.getElementById('loading');
    load.classList.remove('hidden');
    
    setTimeout(() => {
        load.classList.add('hidden');
        displayCard();
    }, 3000);
}
const inputArr = [
    {
        name: "hippo",
        icone: '<i class="fa-solid fa-hippo" style="font-size: 30px;"></i>'
    },
    {
        name: "dove",
        icone: '<i class="fa-solid fa-dove" style="font-size: 30px;"></i>'
    },
    {
        name: "froge",
        icone: '<i class="fa-solid fa-frog" style="font-size: 30px;"></i>'
    },
    {
        name: "paw",
        icone: '<i class="fa-solid fa-paw" style="font-size: 30px;"></i>'
    },
    {
        name: "fish",
        icone: '<i class="fa-solid fa-fish-fins" style="font-size: 30px;"></i>'
    },
    {
        name: "spider",
        icone: '<i class="fa-solid fa-spider" style="font-size: 30px;"></i>'
    },
    {
        name: "horse",
        icone: '<i class="fa-solid fa-horse" style="font-size: 30px;"></i>'
    },
    {
        name: "cat",
        icone: '<i class="fa-solid fa-cat" style="font-size: 30px;"></i>'
    },
    {
        name: "hippo",
        icone: '<i class="fa-solid fa-hippo" style="font-size: 30px;"></i>'
    },
    {
        name: "dove",
        icone: '<i class="fa-solid fa-dove" style="font-size: 30px;"></i>'
    },
    {
        name: "froge",
        icone: '<i class="fa-solid fa-frog" style="font-size: 30px;"></i>'
    },
    {
        name: "paw",
        icone: '<i class="fa-solid fa-paw" style="font-size: 30px;"></i>'
    },
    {
        name: "fish",
        icone: '<i class="fa-solid fa-fish-fins" style="font-size: 30px;"></i>'
    },
    {
        name: "spider",
        icone: '<i class="fa-solid fa-spider" style="font-size: 30px;"></i>'
    },
    {
        name: "horse",
        icone: '<i class="fa-solid fa-horse" style="font-size: 30px;"></i>'
    },
    {
        name: "cat",
        icone: '<i class="fa-solid fa-cat" style="font-size: 30px;"></i>'
    }
    

];

let totalclick=0;

let count =0;

let flippedCard = [];

shuffeCards();

const gamebord = document.getElementById('root');


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
        flippedCard[0].classList.remove('active');
        flippedCard[0].classList.add('cursor-not-allowed')
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
        flippedCard[1].classList.add('cursor-not-allowed')
        count++;
        console.log(`count is : ${count}`)
        console.log(`arr is : ${inputArr.length/2}`)
        chackgame();
    }
    else {
        flippedCard[0].classList.add('active');
        flippedCard[0].classList.remove('cursor-not-allowed')
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
            loading();
        })
    }
}





const volum = document.getElementById('volum');
let ison = true;
const audio = document.getElementById('myAudio');
audio.play();

document.addEventListener('load',()=>{
    audio.play();
})

volum.addEventListener('click',()=>{
    const mute = document.getElementById('mute');
    const unmute = document.getElementById('unmute');

    if(ison){
        ison=false;
    }
    else{
        ison=true;
    }

    if(ison){
        mute.classList.remove('flex');
        unmute.classList.remove('hidden');
        unmute.classList.add('flex');
        mute.classList.add('hidden');
        console.log(mute);
        console.log(unmute); 
        audio.play();
    }
    else{
        mute.classList.remove('hidden');
        unmute.classList.remove('flex');
        mute.classList.add('flex')
        unmute.classList.add('hidden');
        audio.pause()
        console.log(mute);
        console.log(unmute);
    }

})

