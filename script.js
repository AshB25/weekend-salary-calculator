console.log('you got this, ashleigh!');

//stop page refresh. submit button function. 
function handleSubmit(event) {
    console.log('submitted');
    event.preventDefault();

//pull values from input
let firstName = document.querySelector('#firstNameInput').value;
let lastName = document.querySelector('#lastNameInput').value;
let idName = document.querySelector('#idInput').value;
let titleName = document.querySelector('#titleInput').value;
let annualSalary = document.querySelector('#annualSalaryInput').value;
//console.log(annualSalary);

//adding employee info into the table
let employeeTable = document.querySelector('#employeeInfo');
employeeTable.innerHTML += ` 
<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idName}</td>
    <td>${titleName}</td>
    <td>${annualSalary}</td>
    <td> <button onclick="handleClickDelete(event)">Delete</button> </td>
</tr>`;


//clear input form once submitted
function clearInputs() {
const formInputs = document.querySelectorAll('input');
console.log('info cleared:', clearInputs);
formInputs.forEach(singleInput => singleInput.value = '');
};
};

function handleClickDelete(event) {
    const deleteRow = event.target.parentElement.parentElement;
    console.log('deleted row:', deleteRow)
    deleteRow.remove();
}