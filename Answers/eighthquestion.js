document.write("Cubes of all natural numbers up to 100: </br>");
for (let i = 1; i <= 100; i++) {
    let cube = i ** 3;
    if (i < 100) {
        document.write(cube + ", "); 
    } else {
        document.write(cube,".");
    }
}
