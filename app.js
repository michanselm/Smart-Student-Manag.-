alert("Welcome to the Smart Student Management System");

let schoolName = prompt("Enter your school name:");
if (!schoolName) {
  schoolName = "Our School";
}
alert("Welcome to " + schoolName + "!");
function mainMenu() {}
const option = Number(
  prompt(
    "Please choose an operation:\n1.  Register Student \n 2. View All Students\n 3. Search Student \n 4. Exit"
  )
);

switch (option) {
  case 1:
    let ppl = [];
    let name = prompt("Enter student name:");
    if (!name) {
      alert("Student name cannot be empty");
    }

    let age = prompt("Enter age:");
    if (!age) {
      alert("Age cannot be empty");
      break;
    }

     let clas = prompt("Enter clas:");
    if (!clas) {
      alert("clas cannot be empty");
      break;
    }

     let score = prompt("Enter score:");
    if (score < 1 ) {
      alert("Invalid Score");
      break;
    } 
    if (score > 100) { 
      alert("Invalid Score")
      break;
    }


    ppl.push( name, age , clas, score );
    console.log("student:", ppl);
    break;
      
}
