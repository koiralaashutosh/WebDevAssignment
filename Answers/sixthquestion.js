let father_age = parseInt(prompt ("Enter your father's age"));
let mother_age = parseInt(prompt ("Enter your mother's age"));
let user_age = parseInt(prompt ("Enter your age"));

let average_age = (father_age + mother_age + user_age) / 3;
alert ("Average age is: "+average_age+".");

if(father_age>50){
    alert("You should spend more time with your father.");
}

if(mother_age>50){
    alert("You should spend more time with your mother");
}

if (father_age > 50 && mother_age > 50){
    alert("You should spend more time with your family.");
}