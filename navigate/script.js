/*
Select the last child of the <ol> tag and put it at the beginning of the list
Move the <h2> of the third section in the second one and vice-versa
Delete the last section from the DOM, we don't need it anyways
*/

//Ex 1
const ol = document.querySelector('ol');
const a = ol.children[0];
const b = ol.children[4];

ol.insertBefore(b, a);


//Ex 2.
const main = document.querySelector('main');
const secondSection = main.children[1];
const thirdSection = main.children[2];

const secondSectionTitle = secondSection.querySelector('h2');
const thirdSectionTitle = thirdSection.querySelector('h2');

console.log(secondSectionTitle.innerText);
console.log(thirdSectionTitle.innerText);

const secondSectionTitleClone = secondSectionTitle.cloneNode(true);
const thirdSectionTitleClone = thirdSectionTitle.cloneNode(true);

secondSection.replaceChild(thirdSectionTitleClone, secondSection.childNodes[0]);
thirdSection.replaceChild(secondSectionTitleClone, thirdSection.childNodes[0]);

secondSectionTitle.remove();
thirdSectionTitle.remove();

//Ex 3
thirdSection.remove();
