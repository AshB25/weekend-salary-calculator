console.log('you got this, ashleigh!');

//stop page refresh
function submitEmployee(event) {
    console.log('submitted');
    event.preventDefault();
}

//pull values from input
let firstName = document.querySelector('#firstNameInput').value;
let lastName = document.querySelector('#lastNameInput').value;
let idName = document.querySelector('#idInput').value;
let titleName = document.querySelector('#titleInput').value;
let annualSalary = document.querySelector('#annualSalaryInput').value;
console.log(annualSalary);