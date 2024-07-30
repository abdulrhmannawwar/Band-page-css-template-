let smallText = document.querySelector('.smallText');
let bigText = document.querySelector('.bigText');
let homeImg = document.querySelector('.homeImg');

let imgSources = ['https://www.w3schools.com/w3images/chicago.jpg'
                ,'https://www.w3schools.com/w3images/la.jpg'
                ,'https://www.w3schools.com/w3images/ny.jpg'];
let bigTexts = ['Chicago','Los Angeles','New York'];
let smallTexts = ['Thank you chicago - A night we will not forget'
                ,'We had the best time playing at Venice Beach!'
                ,'The atmosphere in New York is great.'];
let i = 0;
setInterval(()=>{
    i++;
    if(i==3){
        i = 0;
    }
    smallText.textContent = smallTexts[i];
    bigText.textContent = bigTexts[i];
    homeImg.src = imgSources[i];
},5000);

let btns = document.querySelectorAll('#tour .places button');
let tickets = document.querySelector('.tickets');
let close = document.querySelector('.close');
let x = document.querySelector('.X');
x.addEventListener('click',()=>{
    tickets.style.display = 'none';
})
close.addEventListener('click',()=>{ 
    tickets.style.display = 'none';
})
btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        tickets.style.display = 'block';
        tickets.style.top = '220px';
    })
});
window.addEventListener('click',(e)=>{
    if(e.target == tickets){
        tickets.style.display = 'none';
    }
});