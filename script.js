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
//function clearInputs() {
    //document.getElementById('firstNameInput').value='';
    //document.getElementById('lastNameInput').value='';
    //document.getElementById('idInput').value='';
    //document.getElementById('titleInput').value='';
    //document.getElementById('annualSalaryInput').value='';
//}

//clear inputs after submit
document.getElementById("Staff").reset();
};

//delete row
function handleClickDelete(event) {
    const deleteRow = event.target.parentElement.parentElement;
    console.log('deleted row:', deleteRow)
    deleteRow.remove();
}

//calculate total
let total = document.getElementsByClassName('getTotal');

let calTotal = total.length;
monthlyTotal = 0;

for(let i = 0; i < calTotal; i++) {
    monthlyTotal += total[i].value*1;
}
document.getElementById('Total');