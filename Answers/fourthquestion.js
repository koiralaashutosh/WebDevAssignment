let firstNum = 0, secondNum = 1, sum;

document.write("Fibonacci series up to the 100th value is: </br>");
document.write(firstNum + "</br>"); // 0 printed
document.write(secondNum + "</br>"); // 1 printed

for (let i = 2; i < 100; i++) { //first two terms already printed
    sum = firstNum + secondNum;
    document.write(sum + "</br>");
    firstNum = secondNum;
    secondNum = sum;
}
