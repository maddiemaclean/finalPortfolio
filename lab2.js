const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// r1 allows us to manage userInput

function askUser() {
    rl.question("Select a command: ", function(userInput) {
        if (userInput === "q") {
            rl.close();
        } else if (userInput === "n") {
            rl.question("Insert a number: ", function(num) {
                const factNum = is_factorial(num);
                console.log(factNum);

                if (factNum === 0) {
                    console.log(num + " is not the factor of another number");
                } else if (factNum < 0) {
                    console.log(num + " is a negative number");
                } else {
                    console.log(num + " is the factorial number of: " + factNum);
                }

                askUser(); // bascially acts as a recursive call
            });
        } else {
            console.log("Invalid command. Please enter 'n' or 'q'.");
            askUser();
        }
    });
}

console.log("   n: Check a value");
console.log("   q: quit");

askUser(); // Initial call to start the process

function is_factorial(numIn) { // this method figures out if a number is a factorial or not
    const num = parseInt(numIn); // with this method we still need to cast

    if (num < 0) { // negative numbers cannot be a factorial
        return -1;
    }
    
    else if (num === 0) { // zero is not a factorial
        return 0;
    }
    
    else { // calculates the factorial if it's a valid number
        let i = 1;
        let result = 1;

        while (result < num) {
            i++;
            result *= i;
        }

        if (result === num) {
            return i;
        } else {
            return 0;
        }
    }
}
