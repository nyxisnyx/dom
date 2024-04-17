/*
Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
If the background is dark the text should be white, if the background is light the text should be black
Find a way so that everytime you load the page the order of the elements changes!
*/

//The array i'm going to use
const learners = ["Adrien B.", "Adrien C.", "Angel", "Arnaud", "Caroline", "Denis", "Dorian", "Dylan", "Dzheylyan", "Giovanni", "Isabelle", "Jessica", "Jordan", "Julie", "Justine", "Iliess", "Ludovic", "Lyne", "Manu", "Maryann", "Mohamed", "Natalia", "Nathanael", "Stacy", "Tom", "Youris", "Zahra"];

const article = document.querySelector('article');

//function to generate random HEX colors
function randomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#'+randomColor;
};

//function that checks for brightness
function bright(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    if (color == '#FFFFFF') {
        return true;
    };
    return brightness > 155;
};

//function that creates a new div
function createDiv(type,parent,content,className) {
    const newDiv=document.createElement(type);
    if (content!=null) {
      newDiv.innerHTML=content;
    }
    if (className!=null) {
      newDiv.classList.add(className);
    }
    parent.appendChild(newDiv);
    return newDiv;
}


learners.forEach(person => {
    const section = createDiv('section', article, person);
    const color = randomColor();
    section.style.backgroundColor = color;
    if (!bright(color)) {
        section.style.color = '#fff';
    }
});

const body = document.querySelector('body');
const arrayBody = Array.from(body.children);

arrayBody.sort(() => Math.random() - 0.5);

arrayBody.forEach(div => {
    body.appendChild(div);
});