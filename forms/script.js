/*Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the input border red) , add a validation, if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.*/

//ex 1

const firstName = document.getElementById('firstname');
const display = document.getElementById('display-firstname');

firstName.addEventListener("keyup", (event) => {
    const firstNameValue = firstName.value;
    display.textContent = firstNameValue;
});

//ex 2

const age = document.getElementById('age');
const hardTruth = document.getElementById('a-hard-truth');

age.addEventListener("keyup", (event) => {
    const ageValue = age.value;
    if (age.value > 18) {
        hardTruth.style.visibility = 'visible';
    };
});

//ex 3

const password = document.getElementById('pwd');
const passwordConfirm = document.getElementById('pwd-confirm');

password.addEventListener("keyup", (event) => {
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;
    let validationMessage;
    let matchCheck;
    // const divs = document.querySelectorAll('div');
    // const pwdField = divs[0];
    // const pwdFieldCheck = divs[1];

    const passwordConfirmValue = passwordConfirm.value;

    function createDiv(type,parent,content, id) {
        const newDiv=document.createElement(type);
        if (content!=null) {
          newDiv.innerHTML=content;
        }
        newDiv.setAttribute("id", id);
        parent.appendChild(newDiv);
    }

    const checkValidationFalse = document.getElementById('tooshort');
    const checkValidationTrue = document.getElementById('longenough');

    if (passwordLength < 6) {
        
        password.style.borderColor = 'red'

        validationMessage = 'Your password is too short!'


        if (!checkValidationFalse) {
             createDiv('div', password.parentNode, validationMessage, 'tooshort');
        }


    } else {
        
        password.style.borderColor = 'black';
        validationMessage = 'Your password is long enough.'
        if (!checkValidationTrue) {
            createDiv('div', password.parentNode, validationMessage, 'longenough');
        }
        checkValidationFalse.remove();
    } 

    const checkMatchTrue = document.getElementById('match');
    const checkMatchFalse = document.getElementById('nomatch');

    if (passwordValue !== passwordConfirmValue) {

        if (!checkMatchFalse) {
            matchCheck = 'Passwords do not match!';
            createDiv('div', passwordConfirm.parentNode, matchCheck, 'nomatch');
       }
        passwordConfirm.style.borderColor = 'red'


    } else {

        if (!checkMatchTrue) {
            matchCheck = 'Passwords match.'
            createDiv('div', passwordConfirm.parentNode, matchCheck, 'match');
       }

        passwordConfirm.style.borderColor = 'black'

        checkMatchFalse.remove();
    }
})

