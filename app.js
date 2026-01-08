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
    
    let ans = prompt("Put in your grade");

    if (isNaN(ans)) {
      console.log("You did not put in a number");
    } else if (ans > 100) {
      console.log("Your score is not within the range");
    } else if (ans > 69) {
      console.log("You got an A");
    } else if (ans > 59) {
      console.log("You got a B");
    } else if (ans > 49) {
      console.log("You got a C");
    } else if (ans > 39) {
      console.log("You got a D");
    } else if (ans > 31) {
      console.log("You got an E");
    } else if (ans < 29) {
      console.log("You got an F");
    }

    ppl.push( name, age , clas, score );
    console.log("student:", ppl);
    break;
      
}
