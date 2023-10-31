// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const table = document.getElementById('employees');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0;

const showEmployeeCount = () => {
  const output = document.querySelector('output');
  output.innerText = `(${empCount})`;
};

showEmployeeCount();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const $ = (id) => document.getElementById(id);
    const id = $('id').value;
    const name = $('name').value;
    const extension = $('extension').value;
    const email = $('email').value;
    const department = $('department').value;
    const values = [id, name, extension, email, department];
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    for (let i = 0; i < values.length; i++) {
        let cell = row.insertCell();
        cell.appendChild(document.createTextNode(values[i]));
      }
    
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON
    const deleteCell = row.insertCell();
    deleteCell.addEventListener('click', (e) => deleteEmployee(e, table));
    const button = document.createElement('button');
    button.innerText = 'X';
    button.className = 'btn btn-danger';
    deleteCell.appendChild(button);
    // RESET THE FORM
  form.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  document.getElementById('id').focus();

  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  empCount++;
  showEmployeeCount();
});

// DELETE EMPLOYEE
const deleteEmployee = (e, table) => {
  if (confirm(`Are you sure you want to delete this row?`)) {
    table.deleteRow(e.target.parentNode.parentElement.rowIndex);
    empCount--;
    showEmployeeCount();
  }
};