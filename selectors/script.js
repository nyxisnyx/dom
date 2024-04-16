/*
Add a title attribute to every element that has the important class, stating This is an important item. Tip: adding a title attribute to an element is different from changing the title of a document.
Select all the img tags and loop through them. If they have no important class, turn their display property to none
Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

*/

const importantArray = document.querySelectorAll('.important');

importantArray.forEach(element => {
    element.title = 'This is an important item';
});

const imgArray = document.querySelectorAll('img');

imgArray.forEach(img => {
    if (!img.classList.contains('important')) {
        img.style.display = 'none';
    };
});

const pArray = document.querySelectorAll('p');

pArray.forEach(para => {
    if (para.classList.length == 0) {
        console.log(para.innerText);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        para.style.color= '#' + randomColor;
    } else {
        console.log(para.innerText + ' with a class of ' + para.classList);
    };
});