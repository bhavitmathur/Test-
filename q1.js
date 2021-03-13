console.log("This is index.js");
// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view

// Constructor
function User(id, email, fname,lname) {
    this.id = id;
    this.email = email;
    this.fname = fname;
    this.lname=lname
}

// Display Constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (user) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${user.id}</td>
                        <td>${user.email}</td>
                        <td>${user.fname}</td>
                        <td>${user.lname}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (user) {
    if (user.fname.length < 2 || user.lname.length < 2) {
        return false
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}


// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let id = document.getElementById('user_id').value;
    let email = document.getElementById('email').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;


    let user = new User(id, email, fname,lname);
    console.log(user);

    let display = new Display();

    if (display.validate(user)) {

        display.add(user);
        display.clear();
        display.show('success', 'Your user has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this user');
    }

    e.preventDefault();
}
