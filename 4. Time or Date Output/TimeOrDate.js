console.log("Hello New World");

const date = new Date().toDateString();
const time = new Date().toTimeString();

function ask() {
  let choice = prompt("Would you like to know the Date or Time?: ");
  if (choice == "date") {
    alert(date);
  } else if (choice == "time") {
    alert(time);
  } else {
    alert("Null");
  }
}

ask();
