class Modulo_Command {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program.command("modulo <num1> <num2>")
            .description("Get remainder of division")
            .action((num1, num2) => this.modulo(num1, num2))
    }

    modulo(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            console.log("Please enter valid numbers!");
            return;
        }
        const divisor = Number(num2);
        if (divisor === 0) {
            console.log("Error: Cannot modulo by zero!");
            return;
        }
        const result = Number(num1) % divisor;
        console.log(`Result: ${result}`);
    }

}

module.exports = Modulo_Command;
