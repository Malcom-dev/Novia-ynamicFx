const plancontainer = document.querySelector('.plan-container');
const prevbtn = document.querySelector('.#prev-btn');
const nextbtn = document.querySelector('.#next-btn');

let scrollposition = 0;

prevbtn,addEventListener('click', () => {
    scrollposition -= 300;
    plancontainer.scrollLeft = scrollposition;
});

nextbtn,addEventListener('click', () => {
    scrollposition += 300;
    plancontainer.scrollLeft = scrollposition;
});


