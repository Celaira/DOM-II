// Your code goes here
const header2 = document.querySelector('.content-section > .text-content > h2');
const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const header3 = document.querySelector('.content-destination > h2');
const links = document.querySelector('nav > a');



body.addEventListener('click', (e) => {
    if(e.target.textContent === "Let's Go!") {
        e.target.textContent = "Leave Me Alone";
        btn.setAttribute('draggable', 'true');
    }

});

body.addEventListener('keydown', (e) => {
    e.target.style.color = "blue";
})
body.addEventListener('keyup', (e) => {
    e.target.style.color = "red";
})
btn.addEventListener('mouseover', (e) => {
    e.target.textContent = "STOP!"
});

btn.addEventListener('dblclick', (e) => {
    header2.style.display = "none";    
})

btn.addEventListener('drag', (e) => {
    header3.style.backgroundColor = "yellow";
})
body.addEventListener('click', (e) => {
    e.target.style.backgroundColor = "blue";
})
header3.addEventListener('dblclick', (e) => {
    body.style.backgroundColor = 'green';
})
links.addEventListener('click', (e) => {
    e.preventDefault()
    header3.textContent = "Go away";
})
links.addEventListener('mouseenter', (e) => {
    header2.style.backgroundColor = "green";
})


