class Multiply_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program.command("multiply <num1> <num2>")
            .description("Multiply two numbers")
            .action((num1, num2) => this.multiply(num1, num2))
    }

    multiply(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            console.log("Please enter valid numbers!");
            return;
        }
        const result = Number(num1) * Number(num2);
        console.log(`Result: ${result}`);
    }

}

module.exports = Multiply_Command;
