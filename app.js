alert("Welcome to the Smart Student Management System");

let schoolName = prompt("Enter your school name:");
if (!schoolName) {
  schoolName = "Our School";
}

function showMenu() {
  return Number(
    prompt(
      "Select an option:\n" +
        "1. Register Student\n" +
        "2. View All Students\n" +
        "3. Search Student\n" +
        "4. Exit"
    )
  );
}
 let ppl = [];
switch (option) {
  case 1: 
    let name = prompt("Enter student name:");
    if (!name) {
      alert("Student name cannot be empty");
    }

    let age = prompt("Enter age:");
    if (!age) {
      alert("Age cannot be empty");
      break;
    }

    let clas = prompt("Enter class:");
    if (!clas) {
      alert("clas cannot be empty");
      break;
    }

    let score = prompt("Enter score (1- 100):");
    if (score < 1) {
      alert("Invalid Score");
      break;
    }
    if (score > 100) {
      alert("Invalid Score");
      break;
    }

    // let ans = prompt("Put in your grade");

    if (isNaN(score)) {
      console.log("You did not put in a number");
    } else if (score > 100) {
      console.log("Your score is not within the range");
    } else if (score > 69) {
      console.log("You got an A You Passed");
    } else if (score > 59) {
      console.log("You got a B  You Passed");
    } else if (score > 49) {
      console.log("You got a C You Passed");
    } else if (score < 49) {
      console.log("You got an D You failed");
    } else if (score < 40) {
      console.log("You got an F You Failed");
    }
    
    ppl.push(name, age, clas, score);
    console.log("student:", ppl);
    break;
     
  function showMenu() {}
  case 2:

    
}
