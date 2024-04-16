/*
Display the document title in the console
Change the document title to Modifying the DOM
Change the background color of the body to hot pink (#FF69B4). If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).
Using the children method and a for ... of  loop, display every children elements of the second child element of your document (display all children elements of the <body>)
*/

document.title = 'Modifying the DOM';

console.log(document.title);

document.body.style.backgroundColor = `#FF69B4`;

document.body.style.backgroundColor = `#7e5fea`;

console.log(document.body.children);

let bodyChildren = document.body.children;

for (child of bodyChildren) {
    console.log(child);
};