const a = new Date();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const b = dayNames[a.getDay()];

document.write("The current date is: " + a + ".<br>");
document.write("The current day name is: " + b);
